"use strict";
// import { Router, Request, Response } from 'express';
// const router: Router = Router();
// router.get('/', (req: Request, res: Response) => {
//     res.send('Hello, World!');
// });
// export const testFunc = (req: Request, res: Response) => {
//     res.json({d:3})
// }
// import * as csvtojson from 'csvtojson';
// import { TA_row } from '../types';
// import { MarketM } from '../classes/markets.model';
// import { fetchData } from '../services/stockService';
// import { TaseUrl } from '../static';
// export const initTaMarket = async (): Promise</* MarketM */ any> => {
//     const jsonData = async (csvContent: string): Promise<TA_row[]> => {
//         // Async / await usage
//         // const jsonArray = await csv().fromFile(csvFilePath);
//         const stockList: TA_row[] = await csvtojson({
//             noheader: false,
//             headers: ['name', 'symbol', 'ISIN', 'index', 'lastPrice', 'changePrecent', 'volume', 'lastTrade']
//         }).fromString(csvContent);
//         // wstream.write(csvContent);
//         // wstream.end()
//         stockList.shift()   // Remove name: 'As of  07/10/2018 10:01'
//         stockList.shift()   // Remove headers
//         return stockList;
//     };
//     const market = new MarketM();
//     market.name = 'TA';
//     market.country = 'israel';
//     // var wstream = fs.createWriteStream('tase.csv');
//     // const ta_res = await fetch(TaseUrl, { method: 'GET' })
//     const ta_res = await fetchData(TaseUrl, { method: 'GET' });
//     const csvContent: string = await ta_res.text();
//     market.stockList = await jsonData(csvContent);
//     return market;
//     // console.log(market.stockList.length);
// } 
//# sourceMappingURL=market.controller.js.map