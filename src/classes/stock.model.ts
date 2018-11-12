// import _ from 'lodash';
// import { Res_alphavantage, Identifier, StockStatics } from '../types';
// import { Quote } from './Quote';
import * as mongoose from 'mongoose';

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

const stockSchema = new mongoose.Schema({
    symbol: { type: String, lowercase: true, unique: true },

    name: { type: String, lowercase: true/* , unique: true, required: [true, "can't be blank"] */ },
    country: { type: String, lowercase: true },
    sectorList: [String],

    quoteList: [{
        date: { type: Date, default: Date.now  },
        open: { type: Number },
        high: { type: Number },
        low: { type: Number },
        close: { type: Number },
        adjustedClose: { type: Number },
        volume: { type: Number },
        dividedAmount: { type: Number },
        _id: false
    }],

    statics: {
        movingAvg: { type: Number }
    },

    lastUpdate: { type: Date, default: Date.now },

    // stock: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Stock',
    //     required: [true, "can't be blank"]
    // },
}, { collection: 'stock' });

export const StockM: any = mongoose.model('StockM', stockSchema, 'stock');