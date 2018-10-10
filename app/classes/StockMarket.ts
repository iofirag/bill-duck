// import _ from 'lodash';
import { Identifier } from '../types';
import { Stock } from './Stock';
import * as mongoose from 'mongoose';
// import mongoose from 'mongoose';

var Schema = mongoose.Schema;

export class Market {
    public name: string = '';
    public country: string = '';
    public sectorList: string[] = [];
    public stockList: Identifier[] = [];
    public lastUpdate: Number = Date.now();

    constructor() {

    }
}


/* User Schema */
export const MarketSchema = new Schema({
    name: String,
    country: String,
    sectorList: [String],
    stockList: [{
        identifier: {
            number: Number,
            symbol: String
        }
    }],
    lastUpdate: { type: Date, default: Date.now },
}, { collection: 'markets', _id: false });

// exports.userSchema = userSchema;