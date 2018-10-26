"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongo_config_1 = require("./config/mongo.config");
var classes_1 = require("./classes");
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
var app = express();
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
(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new mongo_config_1.MongoConfig()];
            case 1:
                _a.sent();
                classes_1.MarketM.create({ name: 'aaa' }, function (err, small) {
                    if (err)
                        console.log(err);
                    console.log('saved');
                    // saved!
                });
                return [2 /*return*/];
        }
    });
}); })();
var initAllMarkets = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
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
//# sourceMappingURL=server.js.map