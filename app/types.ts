export type Commodity = {
    'Meta Data'?: MetaData,
    'Time Series (Daily)'?: { [date: string]: TimeSeriesDaily } //'2018-01-31': TimeSeriesDaily
    'Information'?: any
}
export type MetaData = {
    '1. Information': string,
    '2. Symbol': string,
    '3. Last Refreshed': string, // date as string
    '4. Output Size': string | 'Full size',
    '5. Time Zone': string | 'US/Eastern',
}
export type TimeSeriesDaily = {
    '1. open': string,//(number as string)
    '2. high': string,//(number as string)
    '3. low': string,//(number as string)
    '4. close': string,//(number as string)
    '5. volume': string, //(number as string)
}