import { IndicatorInput, Indicator } from '../indicator/indicator';
export declare class SDInput extends IndicatorInput {
    period: number;
    values: number[];
}
export declare class SD extends Indicator {
    generator: IterableIterator<number | undefined>;
    constructor(input: SDInput);
    static calculate: typeof sd;
    nextValue(price:any): number | undefined;
}
export declare function sd(input: SDInput): number[];
