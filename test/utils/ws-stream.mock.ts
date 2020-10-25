import {Server} from "ws";

export class WsStreamMock {
  private ws: Server;

  static handleGetCandles(message) {
    return {
      "command": "candle",
      "data": {
        "close": 4.1849,
        "ctm": 1378369375000,
        "ctmString": "Sep 05, 2013 10:22:55 AM",
        "high": 4.1854,
        "low": 4.1848,
        "open": 4.1848,
        "quoteId": 2,
        "symbol": "EURUSD",
        "vol": 0.0
      }
    };
  }

  static handleGetBalance(message) {
    return {
      "command": "balance",
      "data": {
        "balance": 995800269.43,
        "credit": 1000.00,
        "equity": 995985397.56,
        "margin": 572634.43,
        "marginFree": 995227635.00,
        "marginLevel": 173930.41
      }
    };
  }

  static handleGetKeepAlive(message) {
    return {
      "command": "keepAlive",
      "data": {
        "timestamp": Date.now()
      }
    };
  }

  start() {
    this.ws = new Server({ port: 8222 });
    this.listen();

    return this;
  }

  async stop() {
    await this.ws.addListener('close', () => {
      return true;
    });
    this.ws.close();
  }

  handle(ws, message) {
    let result: any = 'ERROR';

    if (message.command.substring(0, 4) !== 'stop') {
      let loops = 0;
      const loop = setInterval(() => {
        switch (message.command) {
          case 'getCandles':
            result = WsStreamMock.handleGetCandles(message);
            break;
          case 'getBalance':
            result = WsStreamMock.handleGetBalance(message);
            break;
          case 'getKeepAlive':
            result = WsStreamMock.handleGetKeepAlive(message);
            break;
        }

        ws.send(JSON.stringify(result));
        loops++;
        if (loops >= 2) {
          clearInterval(loop);
        }
      }, 250);
    } else {
      this.ws.close();
    }
  }

  private listen() {
    const that = this;
    this.ws.on('connection', function connection(ws) {
      ws.on('message', function incoming(plainMessage) {
        const message = JSON.parse(plainMessage.toString());
        that.handle(ws, message);
      });
    });
  }
}
