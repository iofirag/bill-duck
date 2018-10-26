import * as express from 'express';
import { MongoConfig } from './config/mongo.config';
import { MarketM } from './classes';
import { initTaMarket } from './controllers/market.controller';
// import {initTaMarket} from './controllers/market.controller'
// import { /* Market, */ /* MarketSchema */ MarketM } from './classes/market.model';

// import { setTimeout } from 'timers';
// import { Stock } from './classes/Stock';
// import { ApiKeyList, TICKERS_SP500, ApiFunction, TaseUrl } from './static';
// import { Res_alphavantage, Res_eodhistoricaldata, TA_row } from './types';
// import { Quote } from './classes/Quote';
// import * as fs from 'fs';
// import {WelcomeController} from './controllers';
// const https = require("https");

const app: express.Application = express();
// import * as routes from './routes';
// require('./routes/index')(app);
// app.use('/market', WelcomeController);

// module.exports = (app) => {

//     //app.use(fileUpload());
//     app.use('/user', require('../routes/user.routes'));
//     app.use('/event', require('../routes/event.routes'));
//     app.use('/gallery', require('../routes/gallery.routes'));
//     app.use('/group', require('../routes/group.routes'));
//     //app.use('/web', require('../routes/web.routes'));
//     // app.use('/doc', ensureAuthenticated, require('../routes/doc'));
//     // app.use('/admin', require('../routes/admin'));
//     // app.use('/file', require('../routes/file'));
//     // app.use('/log', require('../routes/log'));
//     // app.use('/transaction', require('../routes/transaction'));
//     // app.use('/statistics', require('../routes/statistics'));
//     // app.use('/parameters', require('../routes/parametersRoutes'));

//     // set the view engine to ejs
//     // app.set('view engine', 'ejs');
//     // set the home page route
//     app.get('/', (req, res) => {
//         // ejs render automatically looks in the views folder
//         res.render('index');
//     });
// }









const initAllMarkets = async () => {
    const stockMarketList: any[] = [];
    // stockMarketList.push( await initTaMarket() );

    await initTaMarket()
    // const market_ta = await initTaMarket();
    
    // debugger
    // console.log(stockMarketList.length)
    // MarketM.create(...stockMarketList, (err: any, res: any[])=> {
    //     if (err) {
    //         throw console.log(err)
    //         // return;
    //     }
    //     console.log('create docs')
    //     console.log(res);
    // })

    // MarketM.findOneAndUpdate(...stockMarketList, {}, // /* findOneAndUpdate */
    //     { upsert: true, /* 'new': true */ }, (err: any, res: any) => {
    //         // err === null
    //         // res === null'
    //         // console.log('create docs')
    //         console.log(err, res)
    //     });
    // .then((d: any) => {
    //     console.log(d)
    // })
    // .catch((e: any) => {
    //     console.error(e)
    // });
    // MarketM.create({ name: 2 })
    // .then((e: any) => {
    //     console.log('success:', e)
    // }).catch((e: any) => {
    //     console.log('error', e)
    // })
}
// initAllMarkets();

(async () => {
    await new MongoConfig();

    await initAllMarkets()
    // MarketM.create({
    //     name: 'TA',
    //     country: 'IL',
    //     sectorList: ['TA35', 'TA100'],
    //     stockList: [
    //         { identifier: { number: 10 } },
    //         { identifier: { number: 10 } }
    //     ],
    //     lastUpdate: Date.now(),
    // }, (err: any, small: any) => {
    //     if (err) console.log(err)
    //     console.log('saved')
    //     // saved!
    // })
})();


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
