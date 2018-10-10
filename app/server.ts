import * as express from 'express';
import { MongoConfig } from './config/mongo.config';
import {initTaMarket} from './controllers/stockMarket.controller'
import { Market, MarketSchema } from './classes/StockMarket';

// import { setTimeout } from 'timers';
// import { Stock } from './classes/Stock';
// import { ApiKeyList, TICKERS_SP500, ApiFunction, TaseUrl } from './static';
// import { Res_alphavantage, Res_eodhistoricaldata, TA_row } from './types';
// import { Quote } from './classes/Quote';
// import * as fs from 'fs';
// import {WelcomeController} from './controllers';
// const https = require("https");

new MongoConfig(false);

const app: express.Application = express();
// app.use('/welcome', WelcomeController);




const initAllMarkets = async () => {
    const stockMarketList: Market[] = [];
    const stockMarketList2: MarketSchema[] = []
    stockMarketList.push( await initTaMarket() );

    // stock
}
initAllMarkets();



// const createStockStatics = (stock: Stock) => {
//     console.log(stock);
//     let total = 0;
//     stock.quoteList.forEach(quote => {
//         total += quote.close;
//     })
//     const avg = total / stock.quoteList.length;
//     stock.statics.movingAvg.push({ date: Date.now(), value: avg});
// }

// const tryFetchData2 = () => {
//     stockList.forEach(tickerSymbol => {
//         apiKey = getNextApiKey(apiKey);
//         const url = buildFetchUrl(apiKey, ApiFunction, tickerSymbol);
//         console.log(`-------------------------`)
//         console.log(`Try fetch ${tickerSymbol} (${stockList.indexOf(tickerSymbol) + 1})`);
//         fetchStock(url)
//             .then((stock_al: Res_alphavantage) => {
//                 console.log(stock_al);
//             }).catch((ex) => {
//                 console.log(`Exception2 - ${tickerSymbol} - ${ex}`);
//                 tryFetchData();
//             });
//     })
// }
// tryFetchData2()



// const port: number = parseInt(process.env.PORT as string) || 3000;
// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}/`);
// });
