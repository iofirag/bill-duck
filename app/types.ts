export type Commodity_alphavantage = {
    'Meta Data'?: MetaData_alphavantage,
    'Time Series (Daily)'?: { [date: string]: TimeSeriesDaily_alphavantage } //'2018-01-31': TimeSeriesDaily
    'Information'?: any
}
export type MetaData_alphavantage = {
    '1. Information': string,
    '2. Symbol': string,
    '3. Last Refreshed': string, // date as string
    '4. Output Size': string | 'Full size',
    '5. Time Zone': string | 'US/Eastern',
}
export type TimeSeriesDaily_alphavantage = {
    [date: string]: TimeSeriesDailyDate_alphavantage
}
export type TimeSeriesDailyDate_alphavantage = {
    '1. open': string,//(number as string)
    '2. high': string,//(number as string)
    '3. low': string,//(number as string)
    '4. close': string//(number as string)
    '5. adjusted close': string//(number as string)
    '6. volume': string//(number as string)
    '7. dividend amount': string//(number as string)
    '8. split coefficient': string//(number as string)
}
export type Identifier = {
    number?: number,
    symbol?: string,
}
// export type Commodity = {


