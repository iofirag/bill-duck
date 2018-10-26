"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import _ from 'lodash';
// import { Identifier } from '../types';
// import { Stock } from './Stock';
var mongoose = require("mongoose");
// import mongoose from 'mongoose';
// import { MongoConfig } from './../config/mongo.config';
// const schema = new Schema();
// export class Market/*  extends mongoose.Schema */ {
//     public name: string = '';
//     public country: string = '';
//     public sectorList: string[] = [];
//     public stockList: Identifier[] = [];
//     public lastUpdate: Number = Date.now();
//     constructor() {
//         // super();
//     }
// }
/* Market Schema */
// const marketSchema = new mongoose.Schema();
// marketSchema.loadClass(Market);
// mongoose.model('MarketM', marketSchema, 'markets');
// mongoose.model('MarketM', new Market());
// export const MarketM = mongoose.model('MarketM');
var marketSchema = new mongoose.Schema({
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
}, { collection: 'markets' });
exports.MarketM = mongoose.model('MarketM', marketSchema, 'market');
//# sourceMappingURL=market.model.js.map