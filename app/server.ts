import express from 'express';
import fetch from 'node-fetch';
// import {WelcomeController} from './controllers';
import { setTimeout } from 'timers';
import { Stock } from './classes/Stock';
import { ApiKey, TICKERS_SP500, ApiFunction } from './static';
import { Res_alphavantage } from './types';

const app: express.Application = express();
// app.use('/welcome', WelcomeController);


// const https = require("https");
// const apikey: string = ApiKey[0];



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
let apiKey: string;

const getNextApiKey = (lastKey?: string) => {
    if (!lastKey) { return ApiKey[0];
     }
    const i = ApiKey.indexOf(lastKey);
    if (i >= 0 && i < ApiKey.length - 1)
    return ApiKey[i + 1]
    else return ApiKey[0]
}
const tryFetchData = () => {
    if (stockList.length) {
        const tickerSymbol: string = stockList[stockList.length-1];
        apiKey = getNextApiKey();
        const url = buildFetchUrl(apiKey, ApiFunction, tickerSymbol);
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
tryFetchData()




const port: number = parseInt(process.env.PORT as string) || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
