import {Server} from "ws";

export class WsSyncMock {
  private ws: Server;

  static handleGetAllSymbols(message) {
    return {
      "status": true,
      "returnData": [
        {
          "ask": 4000.0,
          "bid": 4000.0,
          "categoryName": "Forex",
          "contractSize": 100000,
          "currency": "USD",
          "currencyPair": true,
          "currencyProfit": "SEK",
          "description": "USD/PLN",
          "expiration": null,
          "groupName": "Minor",
          "high": 4000.0,
          "initialMargin": 0,
          "instantMaxVolume": 0,
          "leverage": 1.5,
          "longOnly": false,
          "lotMax": 10.0,
          "lotMin": 0.1,
          "lotStep": 0.1,
          "low": 3500.0,
          "marginHedged": 0,
          "marginHedgedStrong": false,
          "marginMaintenance": null,
          "marginMode": 101,
          "percentage": 100.0,
          "precision": 2,
          "profitMode": 5,
          "quoteId": 1,
          "shortSelling": true,
          "spreadRaw": 0.000003,
          "spreadTable": 0.00042,
          "starting": null,
          "stepRuleId": 1,
          "stopsLevel": 0,
          "swap_rollover3days": 0,
          "swapEnable": true,
          "swapLong": -2.55929,
          "swapShort": 0.131,
          "swapType": 0,
          "symbol": "USDPLN",
          "tickSize": 1.0,
          "tickValue": 1.0,
          "time": 1272446136891,
          "timeString": "Thu May 23 12:23:44 EDT 2013",
          "trailingEnabled": true,
          "type": 21
        }
      ]
    };
  }

  static handleGetCalendar(message) {
    return {
      "status": true,
      "returnData": [
        {
          "country": "CA",
          "current": "",
          "forecast": "",
          "impact": "3",
          "period": "(FEB)",
          "previous": "58.3",
          "time": 1374846900000,
          "title": "Ivey Purchasing Managers Index"
        }
      ]
    };
  }

  static handleGetChartLastRequest(message) {
    return {
      "status": true,
      "returnData": {
        "digits": 4,
        "rateInfos": [
          {
            "close": 1.0,
            "ctm": 1389362640000,
            "ctmString": "Jan 10, 2014 3:04:00 PM",
            "high": 6.0,
            "low": 0.0,
            "open": 41848.0,
            "vol": 0.0
          }
        ]
      }
    };
  }

  static handleGetChartRangeRequest(message) {
    return {
      "status": true,
      "returnData": {
        "digits": 4,
        "rateInfos": [
          {
            "close": 1.0,
            "ctm": 1389362640000,
            "ctmString": "Jan 10, 2014 3:04:00 PM",
            "high": 6.0,
            "low": 0.0,
            "open": 41848.0,
            "vol": 0.0
          }
        ]
      }
    };
  }

  static handleGetCommissionDef(message) {
    return {
      "status": true,
      "returnData": {
        "commission": 0.51,
        "rateOfExchange": 0.1609
      }
    };
  }

  static handleGetCurrentUserData(message) {
    return  {
      "status": true,
      "returnData": {
        "companyUnit": 8,
        "currency": "PLN",
        "group": "demoPLeurSTANDARD200",
        "ibAccount": false,
        "leverage": 1,
        "leverageMultiplier": 0.25,
        "spreadType": "FLOAT",
        "trailingStop": false
      }
    };
  }

  static handleGetIbsHistory(message) {
    return {
      "status": true,
      "returnData": [
        {
          "closePrice": 1.39302,
          "login": "12345",
          "nominal": 6.00,
          "openPrice": 1.39376,
          "side": 0,
          "surname": "IB_Client_1",
          "symbol": "EURUSD",
          "timestamp": 1395755870000,
          "volume": 1.0
        }
      ]
    };
  }

  static handleLogin(message) {
    return  {
      "status": true,
      "streamSessionId": "8469308861804289383"
    };
  }

  static handleGetMarginLevel(message) {
    return {
      "status": true,
      "returnData": {
        "balance": 995800269.43,
        "credit": 1000.00,
        "currency": "PLN",
        "equity": 995985397.56,
        "margin": 572634.43,
        "margin_free": 995227635.00,
        "margin_level": 173930.41
      }
    };
  }

  static handleGetMarginTrade(message) {
    return {
      "status": true,
      "returnData": {
        "margin": 4399.350
      }
    };
  }

  static handleGetNews(message) {
    return  {
      "status": true,
      "returnData": [
        {
          "body": "<html>...</html>",
          "bodylen": 110,
          "key": "1f6da766abd29927aa854823f0105c23",
          "time": 1262944112000,
          "timeString": "May 17, 2013 4:30:00 PM",
          "title": "Breaking trend"
        }
      ]
    };
  }

  static handlePing(message) {
    return {
      "status": true
    };
  }

  static handleGetProfitCalculation(message) {
    return {
      "status": true,
      "returnData": {
        "profit": 714.303
      }
    };
  }

  static handleGetServerTime(message) {
    return {
      "status": true,
      "returnData": {
        "time": Date.now(),
        "timeString": new Date(Date.now()).toISOString()
      }
    };
  }

  static handleGetStepRules(message) {
    return {
      "status": true,
      "returnData": [
        {
          "id": 1,
          "name": "Forex",
          "steps": [
            {
              "fromValue": 0.1,
              "step": 0.0025
            }
          ]
        }
      ]
    };
  }

  static handleGetSymbol(message) {
    return {
      "status": true,
      "returnData": {
        "ask": 4000.0,
        "bid": 4000.0,
        "categoryName": "Forex",
        "contractSize": 100000,
        "currency": "USD",
        "currencyPair": true,
        "currencyProfit": "SEK",
        "description": "USD/PLN",
        "expiration": null,
        "groupName": "Minor",
        "high": 4000.0,
        "initialMargin": 0,
        "instantMaxVolume": 0,
        "leverage": 1.5,
        "longOnly": false,
        "lotMax": 10.0,
        "lotMin": 0.1,
        "lotStep": 0.1,
        "low": 3500.0,
        "marginHedged": 0,
        "marginHedgedStrong": false,
        "marginMaintenance": null,
        "marginMode": 101,
        "percentage": 100.0,
        "precision": 2,
        "profitMode": 5,
        "quoteId": 1,
        "shortSelling": true,
        "spreadRaw": 0.000003,
        "spreadTable": 0.00042,
        "starting": null,
        "stepRuleId": 1,
        "stopsLevel": 0,
        "swap_rollover3days": 0,
        "swapEnable": true,
        "swapLong": -2.55929,
        "swapShort": 0.131,
        "swapType": 0,
        "symbol": "USDPLN",
        "tickSize": 1.0,
        "tickValue": 1.0,
        "time": 1272446136891,
        "timeString": "Thu May 23 12:23:44 EDT 2013",
        "trailingEnabled": true,
        "type": 21
      }
    };
  }

  static handleGetTickPrices(message) {
    return {
      "status": true,
      "returnData": {
        "quotations": [
          {
            "ask": 4000.0,
            "askVolume": 15000,
            "bid": 4000.0,
            "bidVolume": 16000,
            "high": 4000.0,
            "level": 0,
            "low": 3500.0,
            "spreadRaw": 0.000003,
            "spreadTable": 0.00042,
            "symbol": "KOMB.CZ",
            "timestamp": 1272529161605
          }
        ]
      }
    };
  }

  static handleGetTradeRecords(message) {
    return {
      "status": true,
      "returnData": [
        {
          "close_price": 1.3256,
          "close_time": null,
          "close_timeString": null,
          "closed": false,
          "cmd": 0,
          "comment": "Web Trader",
          "commission": 0.0,
          "customComment": "Some text",
          "digits": 4,
          "expiration": null,
          "expirationString": null,
          "margin_rate": 0.0,
          "offset": 0,
          "open_price": 1.4,
          "open_time": 1272380927000,
          "open_timeString": "Fri Jan 11 10:03:36 CET 2013",
          "order": 7497776,
          "order2": 1234567,
          "position": 1234567,
          "profit": -2196.44,
          "sl": 0.0,
          "storage": -4.46,
          "symbol": "EURUSD",
          "timestamp": 1272540251000,
          "tp": 0.0,
          "volume": 0.10
        }
      ]
    };
  }

  static handleTradeTransaction(message) {
    return {
      "status": true,
      "returnData": {
        "order": 43
      }
    };
  }

  static handleTradeTransactionStatus(message) {
    return {
      "status": true,
      "returnData": {
        "ask": 1.392,
        "bid": 1.392,
        "customComment": "Some text",
        "message": null,
        "order": 43,
        "requestStatus": 3
      }
    };
  }

  static handleGetTrades(message) {
    return {
      "status": true,
      "returnData": [
        {
          "close_price": 1.3256,
          "close_time": null,
          "close_timeString": null,
          "closed": false,
          "cmd": 0,
          "comment": "Web Trader",
          "commission": 0.0,
          "customComment": "Some text",
          "digits": 4,
          "expiration": null,
          "expirationString": null,
          "margin_rate": 0.0,
          "offset": 0,
          "open_price": 1.4,
          "open_time": 1272380927000,
          "open_timeString": "Fri Jan 11 10:03:36 CET 2013",
          "order": 7497776,
          "order2": 1234567,
          "position": 1234567,
          "profit": -2196.44,
          "sl": 0.0,
          "storage": -4.46,
          "symbol": "EURUSD",
          "timestamp": 1272540251000,
          "tp": 0.0,
          "volume": 0.10
        }
      ]
    };
  }

  static handleGetTradesHistory(message) {
    return {
      "status": true,
      "returnData": [
        {
          "close_price": 1.3256,
          "close_time": null,
          "close_timeString": null,
          "closed": false,
          "cmd": 0,
          "comment": "Web Trader",
          "commission": 0.0,
          "customComment": "Some text",
          "digits": 4,
          "expiration": null,
          "expirationString": null,
          "margin_rate": 0.0,
          "offset": 0,
          "open_price": 1.4,
          "open_time": 1272380927000,
          "open_timeString": "Fri Jan 11 10:03:36 CET 2013",
          "order": 7497776,
          "order2": 1234567,
          "position": 1234567,
          "profit": -2196.44,
          "sl": 0.0,
          "storage": -4.46,
          "symbol": "EURUSD",
          "timestamp": 1272540251000,
          "tp": 0.0,
          "volume": 0.10
        }
      ]
    };
  }

  static handleGetTradingHours(message) {
    return {
      "status": true,
      "returnData": [
        {
          "quotes": [
            {
              "day": 2,
              "fromT": 63000000,
              "toT": 63300000
            }
          ],
          "symbol": "USDPLN",
          "trading": [
            {
              "day": 2,
              "fromT": 63000000,
              "toT": 63300000
            }
          ]
        }
      ]
    };
  }

  static handleGetVersion(message) {
    return {
      "status": true,
      "returnData": {
        "version": "2.5.0"
      }
    };
  }

  start() {
    this.ws = new Server({ port: 8111 });
    this.listen();

    return this;
  }

  async stop() {
    await this.ws.addListener('close', () => {
      return true;
    });
    this.ws.close();
  }

  async connected(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.ws.on('open', () => {
        resolve(true);
      });
    });
  }

  private listen() {
    this.ws.on('connection', function connection(ws) {
      ws.on('message', function incoming(plainMessage) {
        const message = JSON.parse(plainMessage.toString());
        let result: any = 'ERROR';

        switch (message.command) {
          case 'getAllSymbols':
            result = WsSyncMock.handleGetAllSymbols(message);
            break;
          case 'getCalendar':
            result = WsSyncMock.handleGetCalendar(message);
            break;
          case 'getChartLastRequest':
            result = WsSyncMock.handleGetChartLastRequest(message);
            break;
          case 'getChartRangeRequest':
            result = WsSyncMock.handleGetChartRangeRequest(message);
            break;
          case 'getCommissionDef':
            result = WsSyncMock.handleGetCommissionDef(message);
            break;
          case 'getCurrentUserData':
            result = WsSyncMock.handleGetCurrentUserData(message);
            break;
          case 'getIbsHistory':
            result = WsSyncMock.handleGetIbsHistory(message);
            break;
          case 'login':
            result = WsSyncMock.handleLogin(message);
            break;
          case 'getMarginLevel':
            result = WsSyncMock.handleGetMarginLevel(message);
            break;
          case 'getMarginTrade':
            result = WsSyncMock.handleGetMarginTrade(message);
            break;
          case 'getNews':
            result = WsSyncMock.handleGetNews(message);
            break;
          case 'ping':
            result = WsSyncMock.handlePing(message);
            break;
          case 'getProfitCalculation':
            result = WsSyncMock.handleGetProfitCalculation(message);
            break;
          case 'getServerTime':
            result = WsSyncMock.handleGetServerTime(message);
            break;
          case 'getStepRules':
            result = WsSyncMock.handleGetStepRules(message);
            break;
          case 'getSymbol':
            result = WsSyncMock.handleGetSymbol(message);
            break;
          case 'getTickPrices':
            result = WsSyncMock.handleGetTickPrices(message);
            break;
          case 'getTradeRecords':
            result = WsSyncMock.handleGetTradeRecords(message);
            break;
          case 'tradeTransaction':
            result = WsSyncMock.handleTradeTransaction(message);
            break;
          case 'tradeTransactionStatus':
            result = WsSyncMock.handleTradeTransactionStatus(message);
            break;
          case 'getTrades':
            result = WsSyncMock.handleGetTrades(message);
            break;
          case 'getTradesHistory':
            result = WsSyncMock.handleGetTradesHistory(message);
            break;
          case 'getTradingHours':
            result = WsSyncMock.handleGetTradingHours(message);
            break;
          case 'getVersion':
            result = WsSyncMock.handleGetVersion(message);
            break;
        }

        ws.send(new Buffer(JSON.stringify(result)));
      });
    });
  }
}
