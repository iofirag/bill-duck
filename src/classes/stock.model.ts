// import _ from 'lodash';
// import { Res_alphavantage, Identifier, StockStatics } from '../types';
// import { Quote } from './Quote';


// export class Stock {    
//     public identifiers: Identifier = {};
//     public quoteList: Quote[] = [];
//     public statics: StockStatics = {
//         movingAvg: []
//     };
//     // public name: string = '';
//     // public country: string = '';
//     // public sectorList: string[] = [];

//     // constructor(obj?: Res_alphavantage, type?: string) {
//     //     if (obj) {
//     //         switch (type) {
//     //             case 'alpha':
//     //                 return this.createObjFromAlphaResponse(obj);
//     //         }
//     //     }
//     // }

//     // private createObjFromAlphaResponse(com_alpha: Res_alphavantage): Stock {
//     //     /* Handle Meta data of this stock */
//     //     // const qMetaData: MetaData_alphavantage = com_alpha['Meta Data'];
//     //     // Object.keys(qMetaData).forEach((key: string) => {
//     //     //     if (key.includes('Symbol')) {
//     //     //         this.identifiers.symbol = qMetaData[key];
//     //     //     } else if (key.includes('Last Refreshed')) {
//     //     //         // q.date = qMetaData["3. Last Refreshed"];
//     //     //     }
//     //     // });

//     //     // /* Handle time series of this stock */
//     //     // const qTimeSeriesDaily: TimeSeriesDaily_alphavantage = com_alpha['Time Series (Daily)'];
//     //     // const dateList: string[] = Object.keys(qTimeSeriesDaily) as string[] || [];
//     //     // for(let i=0; i<10; i++) {
//     //     //     const date: string = dateList[i];
//     //     //     const timeSeriesDaily: TimeSeriesDailyDate_alphavantage = qTimeSeriesDaily[date];
            
//     //     //     const q: Quote = new Quote();
//     //     //     q.date = date;
//     //     //     Object.keys(timeSeriesDaily).forEach((key: string) => {
//     //     //         if (key.includes('open')) {
//     //     //             q.open = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('high')) {
//     //     //             q.high = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('low')) {
//     //     //             q.low = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('adjusted close')) {
//     //     //             q.adjustedClose = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('close')) {
//     //     //             q.close = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('volume')) {
//     //     //             q.volume = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('dividend amount')) {
//     //     //             q.dividedAmount = parseFloat(timeSeriesDaily[key])
//     //     //         } else if (key.includes('split coefficient')) {
//     //     //             q.splitCoefficient = parseFloat(timeSeriesDaily[key])
//     //     //         }
//     //     //     });
//     //     //     this.quoteList.push(q);
//     //     // }
//     //     return this;
//     // }
// }
const stockSchema = new mongoose.Schema({
    // public quoteList: Quote[] = [];
//     public statics: StockStatics = {
//         movingAvg: []
//     };
//     // public name: string = '';
//     // public country: string = '';
//     // public sectorList: string[] = [];
    /* name: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"] },
    country: { type: String, lowercase: true },
    sectorList: [String],

    statics: {},
    lastUpdate: { type: Date, default: Date.now }, */

    // stock: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Stock',
    //     required: [true, "can't be blank"]
    // },
    name: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"] },
    country: { type: String, lowercase: true },
    sectorList: [String],
    stockList: [{
        // identifier: {
        // number: Number,
        symbol: { type: String, lowercase: true, unique: true },
        // },
        _id: false
    }],
    lastUpdate: { type: Date, default: Date.now },
}, { collection: 'market' });