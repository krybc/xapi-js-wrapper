import 'reflect-metadata';
import WebSocket from 'ws';
import {Server} from "./server";
import {Connector} from "./connector";
import {BaseCommand} from "../commands/base.command";
import {BaseResponse} from "../responses/base.response";
import {ApiCommunicationError} from "../errors/api-communication.error";
import {LoginResponse} from "../responses/login.response";
import {plainToClass} from "class-transformer";
import {CalendarResponse} from "../responses/calendar.response";
import {AllSymbolsResponse} from "../responses/all-symbols.response";
import {CurrentUserResponse} from "../responses/current-user.response";
import {ChartLastResponse} from "../responses/chart-last.response";
import {ChartRangeResponse} from "../responses/chart-range.response";
import {IbsHistoryResponse} from "../responses/ibs-history.response";
import {MarginLevelResponse} from "../responses/margin-level.response";
import {MarginTradeResponse} from "../responses/margin-trade.response";
import {NewsResponse} from "../responses/news.response";
import {ProfitCalculationResponse} from "../responses/profit-calculation.response";
import {ServerTimeResponse} from "../responses/server-time.response";
import {StepRulesResponse} from "../responses/step-rules.response";
import {SymbolResponse} from "../responses/symbol.response";
import {TickPricesResponse} from "../responses/tick-prices.response";
import {TradeRecordsResponse} from "../responses/trade-records.response";
import {TradesResponse} from "../responses/trades.response";
import {TradesHistoryResponse} from "../responses/trades-history.response";
import {TradingHoursResponse} from "../responses/trading-hours.response";
import {VersionResponse} from "../responses/version.response";
import {PingResponse} from "../responses/ping.response";
import {TradeTransactionResponse} from "../responses/trade-transaction.response";
import {TradeTransactionStatusResponse} from "../responses/trade-transaction-status.response";
import {ApiResponseError} from "../errors/api-response.error";

export class SyncApiConnector extends Connector {

    private locked: boolean = false;

    public constructor(
        private server: Server
    ) {
        super();
    }

    public connect(): Promise<SyncApiConnector> {
        return new Promise<SyncApiConnector>((resolve, reject) => {
            this.apiSocket = new WebSocket(this.server.address, {
                perMessageDeflate: false,
                handshakeTimeout: 1000 * 60 * 5
            });

            this.apiSocket.on('open', () => {
                this._connected = true;
                resolve(this);
            });

            this.apiSocket.on('error', (err) => {
                reject(err);
            });
        });
    }

    public executeCommand(command: BaseCommand): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.connected) {
                throw new ApiCommunicationError('Server is disconnected');
            }

            try {
                this.apiSocket.send(command.toString());
                this.locked = true;
            } catch (e) {
                reject(new ApiCommunicationError(`Error while sending the data: ${e.message}`));
            }

            this.apiSocket.on('message', (message: string) => {
                const messageObj = JSON.parse(message);

                if (message === null || message === '') {
                    this.apiSocket.close();
                    reject(new ApiCommunicationError('Server not responding'));
                }

                if (messageObj.errorCode !== undefined) {
                    reject(new ApiResponseError(messageObj.errorCode, messageObj.errorDescr));
                }

                this.locked = false;
                resolve(this.parseResponse(command, messageObj));
            });
        });
    }
    
    private parseResponse(command: BaseCommand, message: any): BaseResponse {
        switch (command.command) {
            case 'login':
                return  plainToClass(LoginResponse, message);
                break;
            case 'getAllSymbols':
                return  plainToClass(AllSymbolsResponse, message);
                break;
            case 'getCalendar':
                return  plainToClass(CalendarResponse, message);
                break;
            case 'getChartLastRequest':
                return  plainToClass(ChartLastResponse, message.returnData);
                break;
            case 'getChartRangeRequest':
                return  plainToClass(ChartRangeResponse, message.returnData);
                break;
            case 'getCommissionDef':
                return  plainToClass(ChartRangeResponse, message.returnData);
                break;
            case 'getCurrentUserData':
                return  plainToClass(CurrentUserResponse, message.returnData);
                break;
            case 'getIbsHistory':
                return  plainToClass(IbsHistoryResponse, message);
                break;
            case 'getMarginLevel':
                return  plainToClass(MarginLevelResponse, message.returnData);
                break;
            case 'getMarginTrade':
                return  plainToClass(MarginTradeResponse, message.returnData);
                break;
            case 'getNews':
                return  plainToClass(NewsResponse, message);
                break;
            case 'getProfitCalculation':
                return  plainToClass(ProfitCalculationResponse, message.returnData);
                break;
            case 'getServerTime':
                return  plainToClass(ServerTimeResponse, message.returnData);
                break;
            case 'getStepRules':
                return  plainToClass(StepRulesResponse, message);
                break;
            case 'getSymbol':
                return  plainToClass(SymbolResponse, message);
                break;
            case 'getTickPrices':
                return  plainToClass(TickPricesResponse, message.returnData);
                break;
            case 'getTradeRecords':
                return  plainToClass(TradeRecordsResponse, message);
                break;
            case 'getTrades':
                return  plainToClass(TradesResponse, message);
                break;
            case 'getTradesHistory':
                return  plainToClass(TradesHistoryResponse, message);
                break;
            case 'getTradingHours':
                return  plainToClass(TradingHoursResponse, message);
                break;
            case 'getVersion':
                return  plainToClass(VersionResponse, message.returnData);
                break;
            case 'ping':
                return  plainToClass(PingResponse, message.returnData);
                break;
            case 'tradeTransaction':
                return  plainToClass(TradeTransactionResponse, message.returnData);
                break;
            case 'tradeTransactionStatus':
                return  plainToClass(TradeTransactionStatusResponse, message.returnData);
                break;
            default:
                throw new ApiCommunicationError('Undefined response class');
                break;
        }
    }
}
