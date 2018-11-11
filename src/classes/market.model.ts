// import _ from 'lodash';
// import { Identifier } from '../types';
// import { Stock } from './Stock';
import * as mongoose from 'mongoose';
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



const marketSchema = new mongoose.Schema({
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

export const MarketM: any = mongoose.model('MarketM', marketSchema, 'market');