import 'reflect-metadata';
import {Server} from './server';
import {BaseConnector} from './base-connector';
import * as WebSocket from 'ws';
import {Observable, Subject} from "rxjs";
import {plainToClass} from "class-transformer";
import {
  StreamingCandleResponse,
  StreamingBalanceResponse,
  StreamingKeepAliveResponse,
  StreamingProfitResponse,
  StreamingTradeResponse,
  StreamingNewsResponse,
  StreamingTradeStatusResponse,
} from '../responses';
import {
  CandlesSubscribe,
  BalanceSubscribe,
  KeepAliveSubscribe,
  KeepAliveStop,
  CandlesStop,
  BalanceStop,
  ProfitsSubscribe,
  ProfitsStop,
  TradesSubscribe,
  TradesStop,
  NewsStop,
  NewsSubscribe,
  TradeStatusSubscribe,
  TradeStatusStop,
} from '../streaming';

import {ApiCommunicationError} from '../errors';
import {StreamingBaseResponse} from "../responses/streaming-base.response";
import {fromPromise} from "rxjs/internal-compatibility";

export class StreamConnector extends BaseConnector {
  public constructor(
    private server: Server,
    private streamSessionId: string,
  ) {
    super();
  }

  public connect(): Promise<StreamConnector> {
    return new Promise<StreamConnector>((resolve, reject) => {
      this.socket = new WebSocket(this.server.addressStream, {
        perMessageDeflate: false,
        handshakeTimeout: 1000 * 60 * 5
      });

      this.socket.on('open', () => {
        this._connected = true;
        resolve(this);
      });

      this.socket.on('error', (err) => {
        reject(err);
      });

      this.socket.on('message', (message: string) => {
        const response: { command: string, data: { [key: string]: any } } = JSON.parse(message);
        const parsedResponse = this.parseResponse(response);
        this.subscriptions[parsedResponse.command].next(parsedResponse);
      });
    }).catch(error => {
      return error;
    });
  }

  /**
   * @param symbol
   */
  public subscribeCandles(symbol: string): Observable<StreamingCandleResponse> {
    this.subscriptions.candle = new Subject();
    this.socket.send(new CandlesSubscribe(this.streamSessionId, symbol).toString());

    return this.subscriptions['candle'].asObservable();
  }

  /**
   * @param symbol
   */
  public stopCandles(symbol: string): void {
    this.socket.send(new CandlesStop(symbol).toString());
    this.subscriptions['candle'].unsubscribe();
    delete this.subscriptions['candle'];
  }

  public subscribeBalance(): Observable<StreamingBalanceResponse> {
    this.subscriptions.balance = new Subject();
    this.socket.send(new BalanceSubscribe(this.streamSessionId).toString());

    return this.subscriptions['balance'].asObservable();
  }

  public stopBalance(): void {
    this.socket.send(new BalanceStop().toString());
    this.subscriptions['balance'].unsubscribe();
    delete this.subscriptions['balance'];
  }

  public subscribeKeepAlive(): Observable<StreamingKeepAliveResponse> {
    this.subscriptions.keepAlive = new Subject();
    this.socket.send(new KeepAliveSubscribe(this.streamSessionId).toString());

    return this.subscriptions['keepAlive'].asObservable();
  }

  public stopKeepAlive(): void {
    this.socket.send(new KeepAliveStop().toString());
    this.subscriptions['keepAlive'].unsubscribe();
    delete this.subscriptions['keepAlive'];
  }

  public subscribeNews(): Observable<StreamingNewsResponse> {
    this.subscriptions.news = new Subject();
    this.socket.send(new NewsSubscribe(this.streamSessionId).toString());

    return this.subscriptions['news'].asObservable();
  }

  public stopNews(): void {
    this.socket.send(new NewsStop().toString());
    this.subscriptions['news'].unsubscribe();
    delete this.subscriptions['news'];
  }

  public subscribeProfits(): Observable<StreamingProfitResponse> {
    this.subscriptions.profit = new Subject();
    this.socket.send(new ProfitsSubscribe(this.streamSessionId).toString());

    return this.subscriptions['profit'].asObservable();
  }

  public stopProfits(): void {
    this.socket.send(new ProfitsStop().toString());
    this.subscriptions['profit'].unsubscribe();
    delete this.subscriptions['profit'];
  }

  public subscribeTrades(): Observable<StreamingTradeResponse> {
    this.subscriptions.trade = new Subject();
    this.socket.send(new TradesSubscribe(this.streamSessionId).toString());

    return this.subscriptions['trade'].asObservable();
  }

  public stopTrades(): void {
    this.socket.send(new TradesStop().toString());
    this.subscriptions['trade'].unsubscribe();
    delete this.subscriptions['trade'];
  }

  public subscribeTradeStatus(): Observable<StreamingTradeStatusResponse> {
    this.subscriptions.tradeStatus = new Subject();
    this.socket.send(new TradeStatusSubscribe(this.streamSessionId).toString());

    return this.subscriptions['tradeStatus'].asObservable();
  }

  public stopTradeStatus(): void {
    this.socket.send(new TradeStatusStop().toString());
    this.subscriptions['tradeStatus'].unsubscribe();
    delete this.subscriptions['tradeStatus'];
  }

  private parseResponse(response: { command: string, data: {} }): StreamingBaseResponse {
    switch (response.command) {
      case 'keepAlive':
        return plainToClass(StreamingKeepAliveResponse, response as Object);
        break;
      case 'balance':
        return plainToClass(StreamingBalanceResponse, response as Object);
        break;
      case 'candle':
        return plainToClass(StreamingCandleResponse, response as Object);
        break;
      case 'news':
        return plainToClass(StreamingNewsResponse, response as Object);
        break;
      case 'profit':
        return plainToClass(StreamingProfitResponse, response as Object);
        break;
      case 'trade':
        return plainToClass(StreamingTradeResponse, response as Object);
        break;
      case 'tradeStatus':
        return plainToClass(StreamingTradeStatusResponse, response as Object);
        break;
      default:
        throw new ApiCommunicationError('Unknown streaming record received');
        break;
    }
  }
}
