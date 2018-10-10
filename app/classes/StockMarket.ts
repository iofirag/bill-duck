// import _ from 'lodash';
import { Identifier } from '../types';
import { Stock } from './Stock';
import * as mongoose from 'mongoose';
// import mongoose from 'mongoose';
import { MongoConfig } from './../config/mongo.config';


// const schema = new Schema();

export class Market extends mongoose.Schema {
    public name: string = '';
    public country: string = '';
    public sectorList: string[] = [];
    public stockList: Identifier[] = [];
    public lastUpdate: Number = Date.now();

    constructor() {
        super();
    }
}

/* Market Schema */
export const marketSchema = new mongoose.Schema();
marketSchema.loadClass(Market);
mongoose.model('MarketM', marketSchema);
// mongoose.model('MarketM', new Market());




// export const MarketSchema = new Schema({
//     name: String,
//     country: String,
//     sectorList: [String],
//     stockList: [{
//         identifier: {
//             number: Number,
//             symbol: String
//         }
//     }],
//     lastUpdate: { type: Date, default: Date.now },
// }, { collection: 'markets', _id: false });