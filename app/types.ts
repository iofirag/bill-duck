export type Res_eodhistoricaldata = {
    date: string,   // "1980-12-12",
    open: string,   // "28.7500",
    high: string,   // "28.8700",
    low: string,    // "28.7500",
    close: string,  // "28.7500",
    adjusted_close: string, // "0.4164",
    volume: string, // "117258517.00"
};
export type Res_alphavantage = {
    'Meta Data'?: any,
    'Time Series (Daily)'?: { [date: string]: any } //'2018-01-31': TimeSeriesDaily
    'Information'?: any
};
// export type MetaData_alphavantage = {
//     '1. Information': string,
//     '2. Symbol': string,
//     '3. Last Refreshed': string, // date as string
//     '4. Output Size': string | 'Full size',
//     '5. Time Zone': string | 'US/Eastern',
// }
// export type TimeSeriesDaily_alphavantage = {
//     [date: string]: TimeSeriesDailyDate_alphavantage
// }
// export type TimeSeriesDailyDate_alphavantage = {
//     '1. open': string,//(number as string)
//     '2. high': string,//(number as string)
//     '3. low': string,//(number as string)
//     '4. close': string//(number as string)
//     '5. adjusted close': string//(number as string)
//     '6. volume': string//(number as string)
//     '7. dividend amount': string//(number as string)
//     '8. split coefficient': string//(number as string)
// }
export type Identifier = {
    number?: number,
    symbol?: string,
}
// export type Commodity = {

export type StockStatics = {
    movingAvg: MovingAvg[];
}
export type MovingAvg = { 
    date: number, 
    value: number 
};

