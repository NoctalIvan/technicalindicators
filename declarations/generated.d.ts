// Generated by dts-bundle v0.7.2

export class MAInput extends IndicatorInput {
    period: number;
    values: number[];
    constructor(period: number, values: number[]);
}
export class SMA extends Indicator {
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    static calculate: typeof sma;
    nextValue(price: number): number | undefined;
}
export function sma(input: MAInput): number[];

export class EMA extends Indicator {
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    static calculate: typeof ema;
    nextValue(price: number): number;
}
export function ema(input: MAInput): number[];

export class WMA extends Indicator {
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    static calculate: typeof wma;
    nextValue(price: number): number | undefined;
}
export function wma(input: MAInput): number[];

export class WEMA extends Indicator {
    period: number;
    price: number[];
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: MAInput);
    static calculate: typeof wema;
    nextValue(price: number): number | undefined;
}
export function wema(input: MAInput): number[];

/**
  * Created by AAravindan on 5/4/16.
  */
export class MACDInput extends IndicatorInput {
    period: number;
    values: number[];
    SimpleMAOscillator: boolean;
    SimpleMASignal: boolean;
    fastPeriod: number;
    slowPeriod: number;
    signalPeriod: number;
    constructor(period: number, values: number[]);
}
export class MACDOutput {
    MACD?: number;
    signal?: number;
    histogram?: number;
}
export class MACD extends Indicator {
    result: MACDOutput[];
    generator: IterableIterator<MACDOutput | undefined>;
    constructor(input: MACDInput);
    static calculate: typeof macd;
    nextValue(price: number): MACDOutput | undefined;
}
export function macd(input: MACDInput): MACDOutput[];

export class RSIInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class RSI extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: RSIInput);
    static calculate: typeof rsi;
    nextValue(price: number): number | undefined;
}
export function rsi(input: RSIInput): number[];

export class BollingerBandsInput extends IndicatorInput {
    period: number;
    stdDev: number;
    values: number[];
}
export class BollingerBandsOutput extends IndicatorInput {
    middle: number;
    upper: number;
    lower: number;
    pb: number;
}
export class BollingerBands extends Indicator {
    generator: IterableIterator<BollingerBandsOutput | undefined>;
    constructor(input: BollingerBandsInput);
    static calculate: typeof bollingerbands;
    nextValue(price: number): BollingerBandsOutput | undefined;
}
export function bollingerbands(input: BollingerBandsInput): BollingerBandsOutput[];

export class ADXInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    period: number;
}
export class ADX extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: ADXInput);
    static calculate: typeof adx;
    nextValue(price: number): number | undefined;
}
export function adx(input: ADXInput): number[];

export class ATRInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
    period: number;
}
export class ATR extends Indicator {
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: ATRInput);
    static calculate: typeof atr;
    nextValue(price: number): number | undefined;
}
export function atr(input: ATRInput): number[];

export class TrueRangeInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
}
export class TrueRange extends Indicator {
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: TrueRangeInput);
    static calculate: typeof truerange;
    nextValue(price: CandleData): number | undefined;
}
export function truerange(input: TrueRangeInput): number[];

export class ROCInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class ROC extends Indicator {
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: ROCInput);
    static calculate: typeof roc;
    nextValue(price: number): number | undefined;
}
export function roc(input: ROCInput): number[];

export class KSTInput extends IndicatorInput {
    ROCPer1: number;
    ROCPer2: number;
    ROCPer3: number;
    ROCPer4: number;
    SMAROCPer1: number;
    SMAROCPer2: number;
    SMAROCPer3: number;
    SMAROCPer4: number;
    signalPeriod: number;
    values: number[];
}
export class KSTOutput {
    kst: number;
    signal: number;
}
export class KST extends Indicator {
    result: KSTOutput[];
    generator: IterableIterator<KSTOutput | undefined>;
    constructor(input: KSTInput);
    static calculate: typeof kst;
    nextValue(price: number): KSTOutput;
}
export function kst(input: KSTInput): KSTOutput[];

export class StochasticInput extends IndicatorInput {
    period: number;
    low: number[];
    high: number[];
    close: number[];
    signalPeriod: number;
}
export class StochasticOutput {
    k: number;
    d: number;
}
export class Stochastic extends Indicator {
    result: StochasticOutput[];
    generator: IterableIterator<StochasticOutput | undefined>;
    constructor(input: StochasticInput);
    static calculate: typeof stochastic;
    nextValue(input: StochasticInput): StochasticOutput;
}
export function stochastic(input: StochasticInput): StochasticOutput[];

export class WilliamsRInput extends IndicatorInput {
    low: number[];
    high: number[];
    close: number[];
    period: number;
}
export class WilliamsR extends Indicator {
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: WilliamsRInput);
    static calculate: typeof williamsr;
    nextValue(price: number): number | undefined;
}
export function williamsr(input: WilliamsRInput): number[];

/**
  * Created by AAravindan on 5/17/16.
  */
export class ADLInput extends IndicatorInput {
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
}
export class ADL extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: ADLInput);
    static calculate: typeof adl;
    nextValue(price: CandleData): number | undefined;
}
export function adl(input: ADLInput): number[];

export class OBVInput extends IndicatorInput {
    close: number[];
    volume: number[];
}
export class OBV extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: OBVInput);
    static calculate: typeof obv;
    nextValue(price: CandleData): number | undefined;
}
export function obv(input: OBVInput): number[];

export class TRIXInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class TRIX extends Indicator {
    result: number[];
    generator: IterableIterator<number | undefined>;
    constructor(input: TRIXInput);
    static calculate: typeof trix;
    nextValue(price: number): number;
}
export function trix(input: TRIXInput): number[];

export class AvgGainInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class AverageGain extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: AvgGainInput);
    static calculate: typeof averagegain;
    nextValue(price: number): number | undefined;
}
export function averagegain(input: AvgGainInput): number[];

export class AvgLossInput extends IndicatorInput {
    values: number[];
    period: number;
}
export class AverageLoss extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: AvgLossInput);
    static calculate: typeof averageloss;
    nextValue(price: number): number | undefined;
}
export function averageloss(input: AvgLossInput): number[];

export class SDInput extends IndicatorInput {
    period: number;
    values: number[];
}
export class SD extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: SDInput);
    static calculate: typeof sd;
    nextValue(price: number): number | undefined;
}
export function sd(input: SDInput): number[];

export default class BullishPatterns extends CandlestickFinder {
    constructor();
    hasPattern(data: StockData): boolean;
}
export function bullish(data: StockData): boolean;

export default class BearishPatterns extends CandlestickFinder {
    constructor();
    hasPattern(data: StockData): boolean;
}
export function bearish(data: StockData): boolean;

export default class AbandonedBaby extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function abandonedbaby(data: StockData): any;

export default class Doji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function doji(data: StockData): any;

export default class BearishEngulfingPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishengulfingpattern(data: StockData): any;

export default class BullishEngulfingPattern extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishengulfingpattern(data: StockData): any;

export default class DarkCloudCover extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function darkcloudcover(data: StockData): any;

export default class DownsideTasukiGap extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function downsidetasukigap(data: StockData): any;

export default class DragonFlyDoji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function dragonflydoji(data: StockData): any;

export default class GraveStoneDoji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function gravestonedoji(data: StockData): any;

export default class BullishHarami extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishharami(data: StockData): any;

export default class BearishHarami extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishharami(data: StockData): any;

export default class BullishHaramiCross extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishharamicross(data: StockData): any;

export default class BearishHaramiCross extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishharamicross(data: StockData): any;

export default class EveningDojiStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function eveningdojistar(data: StockData): any;

export default class EveningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function eveningstar(data: StockData): any;

export default class MorningDojiStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function morningdojistar(data: StockData): any;

export default class MorningStar extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function morningstar(data: StockData): any;

export default class BullishMarubozu extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishmarubozu(data: StockData): any;

export default class BearishMarubozu extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishmarubozu(data: StockData): any;

export default class PiercingLine extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function piercingline(data: StockData): any;

export default class BullishSpinningTop extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bullishspinningtop(data: StockData): any;

export default class BearishSpinningTop extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function bearishspinningtop(data: StockData): any;

export default class ThreeBlackCrows extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function threeblackcrows(data: StockData): any;

export default class ThreeWhiteSoldiers extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
export function threewhitesoldiers(data: StockData): any;

/**
  * Calcaultes the fibonacci retracements for given start and end points
  *
  * If calculating for up trend start should be low and end should be high and vice versa
  *
  * returns an array of retracements level containing [0 , 23.6, 38.2, 50, 61.8, 78.6, 100, 127.2, 161.8, 261.8, 423.6]
  *
  * @export
  * @param {number} start
  * @param {number} end
  * @returns {number[]}
  */
export function fibonacciretracement(start: number, end: number): number[];

export class IndicatorInput {
    reversedInput?: boolean;
    format?: (data: number) => number;
}
export class AllInputs {
    values?: number[];
    open?: number[];
    high?: number[];
    low?: number[];
    close?: number[];
    volume?: number[];
}
export class Indicator {
    result: any[];
    format: (data: number) => number;
    constructor(input: IndicatorInput);
    static reverseInputs(input: any): void;
    getResult(): any[];
}

export default class StockData {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    reversedInput?: boolean;
    constructor(open: number[], high: number[], low: number[], close: number[], reversedInput: boolean);
}
export class CandleData {
    open?: number;
    high?: number;
    low?: number;
    close?: number;
}

export default class CandlestickFinder {
    requiredCount: number;
    name: string;
    constructor();
    approximateEqual(a: number, b: number): boolean;
    logic(data: StockData): boolean;
    getAllPatternIndex(data: StockData): number[];
    hasPattern(data: StockData): any;
    protected _getLastDataForCandleStick(data: StockData): StockData;
    protected _generateDataForCandleStick(data: StockData): StockData[];
}
