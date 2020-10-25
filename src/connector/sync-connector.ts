import {EventEmitter} from 'events';

import 'reflect-metadata';
import * as WebSocket from 'ws';
import {plainToClass} from "class-transformer";
import {Server} from "./server";
import {BaseConnector} from "./base-connector";
import {BaseCommand} from "../commands/base.command";
import {BaseResponse} from "../responses/base.response";

import {
  LoginResponse,
  CalendarResponse,
  AllSymbolsResponse,
  CurrentUserResponse,
  ChartLastResponse,
  ChartRangeResponse,
  IbsHistoryResponse,
  MarginLevelResponse,
  MarginTradeResponse,
  NewsResponse,
  ProfitCalculationResponse,
  ServerTimeResponse,
  StepRulesResponse,
  SymbolResponse,
  TickPricesResponse,
  TradeRecordsResponse,
  TradesResponse,
  TradesHistoryResponse,
  TradingHoursResponse,
  VersionResponse,
  PingResponse,
  TradeTransactionResponse,
  TradeTransactionStatusResponse, CommissionDefResponse
} from "../responses";

import {ApiCommunicationError, ApiResponseError} from "../errors";
import {
  AllSymbolsCommand,
  CalendarCommand,
  ChartLastCommand,
  ChartRangeCommand,
  CommissionDefCommand,
  CurrentUserDataCommand,
  IbsHistoryCommand,
  LoginCommand,
  MarginLevelCommand,
  MarginTradeCommand,
  NewsCommand,
  PingCommand,
  ProfitCalculationCommand,
  ServerTimeCommand,
  StepRulesCommand,
  SymbolCommand,
  TickPricesCommand,
  TradeRecordsCommand, TradesCommand, TradesHistoryCommand,
  TradeTransactionCommand, TradeTransactionStatusCommand, TradingHoursCommand,
  VersionCommand
} from "../commands";
import {Credentials} from "./credentials";
import {TradeOperationCodeEnum, TradeTransactionTypeEnum} from "../enums";

export class SyncConnector extends BaseConnector {
  private locked = false;
  private queue: Map<string, BaseCommand> = new Map<string, BaseCommand>();
  private responses: EventEmitter = new EventEmitter();

  public constructor(
    private server: Server
  ) {
    super();
  }

  public connect(): Promise<SyncConnector> {
    return new Promise<SyncConnector>((resolve, reject) => {
      this.socket = new WebSocket(this.server.address, {
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
        this.handleResponse(message);
      });
    }).catch(error => {
      return error;
    });
  }

  public getAllSymbols(): Promise<AllSymbolsResponse> {
    const command = new AllSymbolsCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getCalendar(): Promise<CalendarResponse> {
    const command = new CalendarCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getChartLast(period: number, start: number, symbol: string): Promise<ChartLastResponse> {
    const command = new ChartLastCommand(period, start, symbol);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getChartRange(end: number, period: number, start: number, symbol: string, ticks: number = 0): Promise<ChartRangeResponse> {
    const command = new ChartRangeCommand(end, period, start, symbol, ticks);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getCommissionDef(symbol: string, volume: number): Promise<CommissionDefResponse> {
    const command = new CommissionDefCommand(symbol, volume);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getCurrentUserData(): Promise<CurrentUserResponse> {
    const command = new CurrentUserDataCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getIbsHistory(end: number, start: number): Promise<IbsHistoryResponse> {
    const command = new IbsHistoryCommand(end, start);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public login(credentials: Credentials): Promise<LoginResponse> {
    const command = new LoginCommand(credentials);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getMarginLevel(): Promise<MarginLevelResponse> {
    const command = new MarginLevelCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getMarginTrade(symbol: string, volume: number): Promise<MarginTradeResponse> {
    const command = new MarginTradeCommand(symbol, volume);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getNews(end: number, start: number): Promise<NewsResponse> {
    const command = new NewsCommand(end, start);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public ping(): Promise<PingResponse> {
    const command = new PingCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getProfitCalculation(closePrice: number, cmd: number, openPrice: number, symbol: string, volume: number): Promise<ProfitCalculationResponse> {
    const command = new ProfitCalculationCommand(closePrice, cmd, openPrice, symbol, volume);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getServerTime(): Promise<ServerTimeResponse> {
    const command = new ServerTimeCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getStepRules(): Promise<StepRulesResponse> {
    const command = new StepRulesCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getSymbol(symbol: string): Promise<SymbolResponse> {
    const command = new SymbolCommand(symbol);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getTickPrices(level: number, symbols: string[], timestamp: number): Promise<TickPricesResponse> {
    const command = new TickPricesCommand(level, symbols, timestamp);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getTradeRecords(orders: number[]): Promise<TradeRecordsResponse> {
    const command = new TradeRecordsCommand(orders);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public tradeTransaction(cmd: TradeOperationCodeEnum, type: TradeTransactionTypeEnum, symbol: string, volume: number, price: number, tp: number, sl: number, order: number, offset: number, expiration: number, customComment: string,): Promise<TradeTransactionResponse> {
    const command = new TradeTransactionCommand(cmd, type, symbol, volume, price, tp, sl, order, offset, expiration, customComment);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public tradeTransactionStatus(order: number): Promise<TradeTransactionStatusResponse> {
    const command = new TradeTransactionStatusCommand(order);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getTrades(openOnly: boolean): Promise<TradesResponse> {
    const command = new TradesCommand(openOnly);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getTradesHistory(end: number, start: number): Promise<TradesHistoryResponse> {
    const command = new TradesHistoryCommand(end, start);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getTradingHours(symbols: string[]): Promise<TradingHoursResponse> {
    const command = new TradingHoursCommand(symbols);
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  public getVersion(): Promise<VersionResponse> {
    const command = new VersionCommand();
    this.executeCommand(command);
    return this.listenForResponse(command.socketKey);
  }

  private handleResponse(message: string) {
    const command = this.firstOfQueue();
    const response = JSON.parse(message);
    const parsedResponse = this.parseResponse(command, response);
    this.responses.emit(command, parsedResponse);
    this.queue.delete(command);
    this.locked = false;

    this.settleQueue();
  }

  private firstOfQueue(): string {
    for (let [key, val] of this.queue) {
      return key;
    }
  }

  private settleQueue(): void {
    if (this.queue.size > 0 && !this.locked) {
      const command = this.firstOfQueue();
      this.socket.send(this.queue.get(command).toString());
      this.locked = true;
    }
  }

  private executeCommand(command: BaseCommand): void {
    this.queue.set(command.socketKey, command);
    this.settleQueue();
  }

  private listenForResponse(command: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.responses.once(command, (result => {
        resolve(result);
      }));
    });
  }

  private parseResponse(command: string, message: any): BaseResponse {
    switch (command) {
      case 'login':
        return plainToClass(LoginResponse, message);
        break;
      case 'allSymbols':
        return plainToClass(AllSymbolsResponse, message);
        break;
      case 'calendar':
        return plainToClass(CalendarResponse, message);
        break;
      case 'chartLast':
        return plainToClass(ChartLastResponse, message.returnData);
        break;
      case 'chartRange':
        return plainToClass(ChartRangeResponse, message.returnData);
        break;
      case 'commissionDef':
        return plainToClass(CommissionDefResponse, message.returnData);
        break;
      case 'currentUserData':
        return plainToClass(CurrentUserResponse, message.returnData);
        break;
      case 'ibsHistory':
        return plainToClass(IbsHistoryResponse, message);
        break;
      case 'marginLevel':
        return plainToClass(MarginLevelResponse, message.returnData);
        break;
      case 'marginTrade':
        return plainToClass(MarginTradeResponse, message.returnData);
        break;
      case 'news':
        return plainToClass(NewsResponse, message);
        break;
      case 'ping':
        return plainToClass(PingResponse, message);
        break;
      case 'profitCalculation':
        return plainToClass(ProfitCalculationResponse, message.returnData);
        break;
      case 'serverTime':
        return plainToClass(ServerTimeResponse, message.returnData);
        break;
      case 'stepRules':
        return plainToClass(StepRulesResponse, message);
        break;
      case 'symbol':
        return plainToClass(SymbolResponse, message);
        break;
      case 'tickPrices':
        return plainToClass(TickPricesResponse, message.returnData);
        break;
      case 'tradeRecords':
        return plainToClass(TradeRecordsResponse, message);
        break;
      case 'trades':
        return plainToClass(TradesResponse, message);
        break;
      case 'tradesHistory':
        return plainToClass(TradesHistoryResponse, message);
        break;
      case 'tradingHours':
        return plainToClass(TradingHoursResponse, message);
        break;
      case 'version':
        return plainToClass(VersionResponse, message.returnData);
        break;
      case 'tradeTransaction':
        return plainToClass(TradeTransactionResponse, message.returnData);
        break;
      case 'tradeTransactionStatus':
        return plainToClass(TradeTransactionStatusResponse, message.returnData);
        break;
      default:
        throw new ApiCommunicationError('Undefined response class');
        break;
    }
  }
}
