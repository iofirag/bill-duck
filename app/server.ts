import * as express from 'express';
import fetch from 'node-fetch';
// import {WelcomeController} from './controllers';
import { setTimeout } from 'timers';
import { Stock } from './classes/Stock';
import { ApiKeyList, TICKERS_SP500, ApiFunction, TaseUrl } from './static';
import { Res_alphavantage } from './types';
import { MongoConfig } from './config/mongo.config';
import { Quote } from './classes/Quote';

const app: express.Application = express();
// app.use('/welcome', WelcomeController);


// const https = require("https");
// const apikey: string = ApiKey[0];

// Config the mongoDB (local or online)
new MongoConfig(false);

const fetchStock = async (_url: string): Promise<Res_alphavantage> => {
    let res = await fetch(_url);
    const json: Res_alphavantage = await res.json();
    return json;
}
const buildFetchUrl = (apikey: string, apiFunction: string, stockSymbol: string) => {
    return `https://www.alphavantage.co/query?apikey=${apikey}&function=${apiFunction}&outputsize=full&symbol=${stockSymbol}`
}

const stockList: string[] = TICKERS_SP500.split(',');
const successTickers: string[] = [];
let errTimes = 0;
let apiKey: string = '';

const getNextApiKey = (lastKey?: string) => {
    if (!lastKey) { 
        return ApiKeyList[0];
    }
    const i = ApiKeyList.indexOf(lastKey);
    if (i >= 0 && i < ApiKeyList.length - 1)
    return ApiKeyList[i + 1]
    else return ApiKeyList[0]
}
const tryFetchData = () => {
    if (stockList.length) {
        const tickerSymbol: string = stockList[stockList.length-1];
        apiKey = getNextApiKey(apiKey);
        const url = buildFetchUrl(apiKey, ApiFunction, tickerSymbol);
        console.log(`apiKey=${apiKey}`)
        console.log(`-------------------------`)
        console.log(`Try fetch ${tickerSymbol} (${stockList.indexOf(tickerSymbol) + 1 })`);
        fetchStock(url)
            .then((stock_al: Res_alphavantage) => {

            // console.log(Object.keys(com))
            let isSuccess: boolean = false;
            if (stock_al.hasOwnProperty('Information')) {
                // Fail
                isSuccess = false;
                console.log(`Fail - ${tickerSymbol} - TIME_OUT :/`);
                
            } else if (stock_al.hasOwnProperty('Time Series (Daily)')) {
                // Success
                isSuccess = true;
                errTimes = 0;

                const stock: Stock = new Stock(stock_al, 'alpha');
                // createStockStatics(stock);
                console.log(stock);

                // Remove last element
                successTickers.push(stockList[stockList.length - 1]);
                stockList.splice(stockList.length - 1, 1);
                
            } else {
                isSuccess = false;
                errTimes++;
                console.log(`Fail(${errTimes}) - ${tickerSymbol} - Cant found "Time Series (Daily)" field`);
                if (errTimes >= 5) {
                    console.log(`Fail`)
                    stockList.splice(stockList.length - 1, 1);
                    errTimes = 0;
                }
            }
            
            if (isSuccess) {
                // Try fetch next stock symbol
                errTimes = 0;
                tryFetchData();
            } else {
                console.log('timeout 30 secons')
                setTimeout(tryFetchData, 30000);
            }
        }).catch((ex) => {
            console.log(`Exception2 - ${tickerSymbol} - ${ex}`);
            tryFetchData();
        });

    } else {
        // End process
        console.timeEnd('quote-fetching');
        console.log(`success tickers = ${successTickers.length +1}`)
        console.log(successTickers);
    }
}
console.time('quote-fetching');
// tryFetchData()



import * as fs from 'fs';
import * as csvtojson from 'csvtojson';

var wstream = fs.createWriteStream('tase.csv');
fetch(TaseUrl, {
    method: 'GET',
})  .then(res => res.text())
    .then(body => {
        wstream.write(body);
        wstream.end()
        jsonData(body);
    });

const jsonData = (csvText: string) => {
    // TBD
}




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
