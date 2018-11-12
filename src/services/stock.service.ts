import fetch from 'node-fetch';
import { StockM } from '../classes/stock.model';
// import { StockM } from '../classes/stock.model';
// import * as mongoose from 'mongoose';
// const StockM = mongoose.model('StockM');

export const fetchData = async (url: string, options: any): Promise<any> => {
    return await fetch(url, options);
};

export const upsertStocks = async (marketCountry: string, stockDetailsList: { name: string, symbol: string }[]): Promise<any> => {
    // const stockToUpsert: { name: string, symbol: string }[] = []
    const op = { upsert: true/* , new: true  */};
    await stockDetailsList.forEach(async (s) =>  {
        let saveItem = Object.assign(s, { country: marketCountry});
        StockM.findOneAndUpdate({ symbol: saveItem.symbol }, saveItem, (err: any, data: any) => {
            if (err) return console.log(err);
            // saved!
        })
    });
}