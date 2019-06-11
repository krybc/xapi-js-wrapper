import {Exclude, Expose} from "class-transformer";

@Exclude()
export class SymbolRecord {
    @Expose()
    ask: number;

    @Expose()
    bid: number;

    @Expose()
    categoryName: string;

    @Expose()
    contractSize: number;

    @Expose()
    currency: string;

    @Expose()
    currencyPair: boolean;

    @Expose()
    currencyProfit: string;

    @Expose()
    description: string;

    @Expose()
    expiration: number | null;

    @Expose()
    groupName: string;

    @Expose()
    high: number;

    @Expose()
    initialMargin: number;

    @Expose()
    instantMaxVolume: number;

    @Expose()
    leverage: number;

    @Expose()
    longOnly: boolean;

    @Expose()
    lotMax: number;

    @Expose()
    lotMin: number;

    @Expose()
    lotStep: number;

    @Expose()
    low: number;

    @Expose()
    marginHedged: number;

    @Expose()
    marginHedgedStrong: boolean;

    @Expose()
    marginMaintenance: number;

    @Expose()
    marginMode: number;

    @Expose()
    percentage: number;

    @Expose()
    pipsPrecision: number;

    @Expose()
    precision: number;

    @Expose()
    profitMode: number;

    @Expose()
    quoteId: number;

    @Expose()
    shortSelling: boolean;

    @Expose()
    spreadRaw: number;

    @Expose()
    spreadTable: number;

    @Expose()
    starting: number | null;

    @Expose()
    stepRuleId: number;

    @Expose()
    stopsLevel: number;

    @Expose({ name: 'swap_rollover3days' })
    swapRollover3days: string;

    @Expose()
    swapEnable: boolean;

    @Expose()
    swapLong: number;

    @Expose()
    swapShort: number;

    @Expose()
    swapType: number;

    @Expose()
    symbol: string;

    @Expose()
    tickSize: number;

    @Expose()
    tickValue: number;

    @Expose()
    time: number;

    @Expose()
    timeString: string;

    @Expose()
    trailingEnabled: boolean;

    @Expose()
    type: number;
}
