import { TA_row } from "../types";

// import { Router, Request, Response } from 'express';

// const router: Router = Router();

// router.get('/', (req: Request, res: Response) => {
//     res.send('Hello, World!');
// });



// export const testFunc = (req: Request, res: Response) => {
//     res.json({d:3})
// }

import * as csvtojson from 'csvtojson';
import { fetchData } from "../services/stockService";
import { TaseUrl } from "../static";
import { MarketM } from "../classes";
import { saveMarketByCondition } from "../services/market.service";
// import { TA_row } from '../types';
// import { MarketM } from '../classes/markets.model';
// import { fetchData } from '../services/stockService';
// import { TaseUrl } from '../static';

export const initTaMarket = async () => {
    const jsonData = async (csvContent: string): Promise<TA_row[]> => {
        // Async / await usage
        // const jsonArray = await csv().fromFile(csvFilePath);
        const stockList: TA_row[] = await csvtojson({
            noheader: false,
            headers: ['name', 'symbol', 'ISIN', 'index', 'lastPrice', 'changePrecent', 'volume', 'lastTrade']
        }).fromString(csvContent);
        // wstream.write(csvContent);
        // wstream.end()
        stockList.shift()   // Remove name: 'As of  07/10/2018 10:01'
        stockList.shift()   // Remove headers

        return stockList;
    };


    // const market = new MarketM();
    // market.name = 'TA';
    // market.country = 'israel';
    const market: any = {
        name: 'TA',
        country: 'IL',
        sectorList: ['TA35', 'TA100'],
        stockList: [],
    };

    // var wstream = fs.createWriteStream('tase.csv');

    const ta_res = await fetchData(TaseUrl, { method: 'GET' });
    const csvContent: string = await ta_res.text();
    const stockList = await jsonData(csvContent);
    market.stockList = stockList.map((s)=> {
        return {
            identifier: {
                symbol: s.symbol
            }
        }
    })

    await saveMarketByCondition(MarketM, { name: 'ta', country: 'il' }, market, { upsert: true, new: true })
}