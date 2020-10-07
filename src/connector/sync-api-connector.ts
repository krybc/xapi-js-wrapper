import 'reflect-metadata';
import * as WebSocket from 'ws';
import {plainToClass} from "class-transformer";
import {Server} from "./server";
import {Connector} from "./connector";
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
  TradeTransactionStatusResponse
} from "../responses";

import {ApiCommunicationError, ApiResponseError} from "../errors";

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
    }).catch(error => {
      return error;
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
    }).catch(error => {
      return error;
    });
  }

  private parseResponse(command: BaseCommand, message: any): BaseResponse {
    switch (command.command) {
      case 'login':
        return plainToClass(LoginResponse, message);
        break;
      case 'getAllSymbols':
        return plainToClass(AllSymbolsResponse, message);
        break;
      case 'getCalendar':
        return plainToClass(CalendarResponse, message);
        break;
      case 'getChartLastRequest':
        return plainToClass(ChartLastResponse, message.returnData);
        break;
      case 'getChartRangeRequest':
        return plainToClass(ChartRangeResponse, message.returnData);
        break;
      case 'getCommissionDef':
        return plainToClass(ChartRangeResponse, message.returnData);
        break;
      case 'getCurrentUserData':
        return plainToClass(CurrentUserResponse, message.returnData);
        break;
      case 'getIbsHistory':
        return plainToClass(IbsHistoryResponse, message);
        break;
      case 'getMarginLevel':
        return plainToClass(MarginLevelResponse, message.returnData);
        break;
      case 'getMarginTrade':
        return plainToClass(MarginTradeResponse, message.returnData);
        break;
      case 'getNews':
        return plainToClass(NewsResponse, message);
        break;
      case 'getProfitCalculation':
        return plainToClass(ProfitCalculationResponse, message.returnData);
        break;
      case 'getServerTime':
        return plainToClass(ServerTimeResponse, message.returnData);
        break;
      case 'getStepRules':
        return plainToClass(StepRulesResponse, message);
        break;
      case 'getSymbol':
        return plainToClass(SymbolResponse, message);
        break;
      case 'getTickPrices':
        return plainToClass(TickPricesResponse, message.returnData);
        break;
      case 'getTradeRecords':
        return plainToClass(TradeRecordsResponse, message);
        break;
      case 'getTrades':
        return plainToClass(TradesResponse, message);
        break;
      case 'getTradesHistory':
        return plainToClass(TradesHistoryResponse, message);
        break;
      case 'getTradingHours':
        return plainToClass(TradingHoursResponse, message);
        break;
      case 'getVersion':
        return plainToClass(VersionResponse, message.returnData);
        break;
      case 'ping':
        return plainToClass(PingResponse, message.returnData);
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
