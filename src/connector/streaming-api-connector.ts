import 'reflect-metadata';
import {Server} from './server';
import {Connector} from './connector';
import WebSocket from 'ws';
import {Observable, Subject} from "rxjs";
import {StreamingCandleResponse} from "../responses/streaming-candle.response";
import {CandlesSubscribe} from "../streaming/candles.subscribe";
import {plainToClass} from "class-transformer";
import {StreamingBalanceResponse} from "../responses/streaming-balance.response";
import {BalanceSubscribe} from "../streaming/balance.subscribe";
import {StreamingKeepAliveResponse} from "../responses/streaming-keep-alive.response";
import {KeepAliveSubscribe} from "../streaming/keep-alive.subscribe";
import {KeepAliveStop} from "../streaming/keep-alive.stop";
import {StreamingBaseResponse} from "../responses/streaming-base.response";
import {CandlesStop} from "../streaming/candles.stop";
import {BalanceStop} from "../streaming/balance.stop";
import {ApiCommunicationError} from "../errors/api-communication.error";
import {StreamingNewsResponse} from "../responses/streaming-news.response";
import {NewsStop} from "../streaming/news.stop";
import {NewsSubscribe} from "../streaming/news.subscribe";
import {StreamingProfitResponse} from "../responses/streaming-profit.response";
import {ProfitsSubscribe} from "../streaming/profits.subscribe";
import {ProfitsStop} from "../streaming/profits.stop";
import {StreamingTradeResponse} from "../responses/streaming-trade.response";
import {TradesSubscribe} from "../streaming/trades.subscribe";
import {TradesStop} from "../streaming/trades.stop";
import {StreamingTradeStatusResponse} from "../responses/streaming-trade-status.response";
import {TradeStatusSubscribe} from "../streaming/trade-status.subscribe";
import {TradeStatusStop} from "../streaming/trade-status.stop";

export class StreamingApiConnector extends Connector {

    private subscriptions: {[id: string]: Subject<any>} = {};

    public constructor(
        private server: Server,
        private streamSessionId: string,
    ) {
        super();
    }

    public connect(): Promise<StreamingApiConnector> {
        return new Promise<StreamingApiConnector>((resolve, reject) => {
            this.apiSocket = new WebSocket(this.server.addressStream, {
                perMessageDeflate: false,
                handshakeTimeout: 1000 * 60 * 5
            });

            this.apiSocket.on('open', () => {
                this._connected = true;
                resolve(this);
            });

            this.apiSocket.on('error', (err) => {
                console.log(err);
                reject(err);
            });

            this.apiSocket.on('message', (message: string) => {
                console.log(message);
                const response: {command: string, data: {[key: string]: any}} = JSON.parse(message);
                const parsedResponse = this.parseResponse(response);
                this.subscriptions[parsedResponse.command].next(parsedResponse);
            });
        });
    }

    /**
     * @param symbol
     */
    public subscribeCandles(symbol: string): Observable<StreamingCandleResponse> {
        this.subscriptions.candle = new Subject();
        this.apiSocket.send(new CandlesSubscribe(this.streamSessionId, symbol).toString());

        return this.subscriptions['candle'].asObservable();
    }

    /**
     * @param symbol
     */
    public stopCandles(symbol: string): void {
        this.apiSocket.send(new CandlesStop(symbol).toString());
        this.subscriptions['candle'].unsubscribe();
        delete this.subscriptions['candle'];
    }

    public subscribeBalance(): Observable<StreamingBalanceResponse> {
        this.subscriptions.balance = new Subject();
        this.apiSocket.send(new BalanceSubscribe(this.streamSessionId).toString());

        return this.subscriptions['balance'].asObservable();
    }

    public stopBalance(): void {
        this.apiSocket.send(new BalanceStop().toString());
        this.subscriptions['balance'].unsubscribe();
        delete this.subscriptions['balance'];
    }

    public subscribeKeepAlive(): Observable<StreamingKeepAliveResponse> {
        this.subscriptions.keepAlive = new Subject();
        this.apiSocket.send(new KeepAliveSubscribe(this.streamSessionId).toString());

        return this.subscriptions['keepAlive'].asObservable();
    }

    public stopKeepAlive(): void {
        this.apiSocket.send(new KeepAliveStop().toString());
        this.subscriptions['keepAlive'].unsubscribe();
        delete this.subscriptions['keepAlive'];
    }

    public subscribeNews(): Observable<StreamingNewsResponse> {
        this.subscriptions.news = new Subject();
        this.apiSocket.send(new NewsSubscribe(this.streamSessionId).toString());

        return this.subscriptions['news'].asObservable();
    }

    public stopNews(): void {
        this.apiSocket.send(new NewsStop().toString());
        this.subscriptions['news'].unsubscribe();
        delete this.subscriptions['news'];
    }

    public subscribeProfits(): Observable<StreamingProfitResponse> {
        this.subscriptions.profit = new Subject();
        this.apiSocket.send(new ProfitsSubscribe(this.streamSessionId).toString());

        return this.subscriptions['profit'].asObservable();
    }

    public stopProfits(): void {
        this.apiSocket.send(new ProfitsStop().toString());
        this.subscriptions['profit'].unsubscribe();
        delete this.subscriptions['profit'];
    }

    public subscribeTrades(): Observable<StreamingTradeResponse> {
        this.subscriptions.trade = new Subject();
        this.apiSocket.send(new TradesSubscribe(this.streamSessionId).toString());

        return this.subscriptions['trade'].asObservable();
    }

    public stopTrades(): void {
        this.apiSocket.send(new TradesStop().toString());
        this.subscriptions['trade'].unsubscribe();
        delete this.subscriptions['trade'];
    }

    public subscribeTradeStatus(): Observable<StreamingTradeStatusResponse> {
        this.subscriptions.tradeStatus = new Subject();
        this.apiSocket.send(new TradeStatusSubscribe(this.streamSessionId).toString());

        return this.subscriptions['tradeStatus'].asObservable();
    }

    public stopTradeStatus(): void {
        this.apiSocket.send(new TradeStatusStop().toString());
        this.subscriptions['tradeStatus'].unsubscribe();
        delete this.subscriptions['tradeStatus'];
    }

    private parseResponse(response: {command: string, data: {}}): StreamingBaseResponse {
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
