import express from 'express';
import fetch from 'node-fetch';
// import {WelcomeController} from './controllers';
import { Commodity } from './types';
import { setTimeout } from 'timers';

const app: express.Application = express();
// app.use('/welcome', WelcomeController);


const https = require("https");
const apikey: string = '0LYQQSYMZAYEZLJP';
const apiFunction: string = 'TIME_SERIES_DAILY';
// const commoditySymbol: string = 'TEVA';
// const url: string = `https://www.alphavantage.co/query?apikey=${apikey}&function=${apiFunction}&outputsize=full&symbol=${commoditySymbol}`
const TICKERS_SP500: string = "GICS,CIK,MMM,ABT,ABBV,ACN,ACE,ACT,ADBE,ADT,AES,AET,AFL,AMG,A,GAS,APD,ARG,AKAM,AA,ALXN,ATI,ALLE,ADS,ALL,ALTR,MO,AMZN,AEE,AAL,AEP,AXP,AIG,AMT,AMP,ABC,AME,AMGN,APH,APC,ADI,AON,APA,AIV,AAPL,AMAT,ADM,AIZ,T,ADSK,ADP,AN,AZO,AVGO,AVB,AVY,BHI,BLL,BAC,BK,BCR,BAX,BBT,BDX,BBBY,BBY,BIIB,BLK,HRB,BA,BWA,BXP,BSX,BMY,BRCM,BFB,CHRW,CA,CVC,COG,CAM,CPB,COF,CAH,HSIC,KMX,CCL,CAT,CBG,CBS,CELG,CNP,CTL,CERN,CF,SCHW,CHK,CVX,CMG,CB,CI,XEC,CINF,CTAS,CSCO,C,CTXS,CLX,CME,CMS,COH,KO,CCE,CTSH,CL,CMA,CSC,CAG,COP,CNX,ED,STZ,GLW,COST,CCI,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DLPH,DAL,XRAY,DVN,DO,DTV,DFS,DG,DLTR,D,DOV,DOW,DPS,DTE,DD,DUK,DNB,ETFC,EMN,ETN,EBAY,ECL,EIX,EW,EA,EMC,EMR,ENDP,ESV,ETR,EOG,EQT,EFX,EQIX,EQR,ESS,EL,ES,EXC,EXPE,EXPD,ESRX,XOM,FFIV,FB,FDO,FAST,FDX,FIS,FITB,FSLR,FE,FISV,FLIR,FLS,FLR,FMC,FTI,F,FOSL,BEN,FCX,FTR,GME,GCI,GPS,GRMN,GD,GE,GGP,GIS,GM,GPC,GNW,GILD,GS,GT,GOOG,GWW,HAL,HBI,HOG,HAR,HRS,HIG,HAS,HCA,HCP,HCN,HP,HES,HPQ,HD,HON,HRL,HSP,HST,HCBK,HUM,HBAN,ITW,IR,TEG,INTC,ICE,IBM,IP,IPG,IFF,INTU,ISRG,IVZ,IRM,JEC,JNJ,JCI,JOY,JPM,JNPR,KSU,K,KEY,GMCR,KMB,KIM,KMI,KLAC,KSS,KRFT,KR,LB,LLL,LH,LRCX,LM,LEG,LEN,LVLT,LUK,LLY,LNC,LLTC,LMT,L,LO,LOW,LYB,MTB,MAC,M,MNK,MRO,MPC,MAR,MMC,MLM,MAS,MA,MAT,MKC,MCD,MHFI,MCK,MJN,MWV,MDT,MRK,MET,KORS,MCHP,MU,MSFT,MHK,TAP,MDLZ,MON,MNST,MCO,MS,MOS,MSI,MUR,MYL,NDAQ,NOV,NAVI,NTAP,NFLX,NWL,NFX,NEM,NWSA,NEE,NLSN,NKE,NI,NE,NBL,JWN,NSC,NTRS,NOC,NRG,NUE,NVDA,ORLY,OXY,OMC,OKE,ORCL,OI,PCAR,PLL,PH,PDCO,PAYX,PNR,PBCT,POM,PEP,PKI,PRGO,PFE,PCG,PM,PSX,PNW,PXD,PBI,PCL,PNC,RL,PPG,PPL,PX,PCP,PCLN,PFG,PG,PGR,PLD,PRU,PEG,PSA,PHM,PVH,QEP,PWR,QCOM,DGX,RRC,RTN,RHT,REGN,RF,RSG,RAI,RHI,ROK,COL,ROP,ROST,RCL,R,CRM,SNDK,SCG,SLB,SNI,STX,SEE,SRE,SHW,SIAL,SPG,SWKS,SLG,SJM,SNA,SO,LUV,SWN,SE,STJ,SWK,SPLS,SBUX,HOT,STT,SRCL,SYK,STI,SYMC,SYY,TROW,TGT,TEL,TE,THC,TDC,TSO,TXN,TXT,HSY,TRV,TMO,TIF,TWX,TWC,TJX,TMK,TSS,TSCO,RIG,TRIP,FOXA,TSN,TYC,USB,UA,UNP,UNH,UPS,URI,UTX,UHS,UNM,URBN,VFC,VLO,VAR,VTR,VRSN,VZ,VRTX,VIAB,V,VNO,VMC,WMT,WBA,DIS,WM,WAT,ANTM,WFC,WDC,WU,WY,WHR,WFM,WMB,WIN,WEC,WYN,WYNN,XEL,XRX,XLNX,XL,XYL,YHOO,YUM,ZMH,ZION,ZTS,SAIC,AP"

const fetchCommodity = async (_url: string): Promise<Commodity> => {
    let res = await fetch(_url);
    const json: Commodity = await res.json();
    return json;
}
const buildCommodityUrl = (apikey: string, apiFunction: string, commoditySymbol: string) => {
    return `https://www.alphavantage.co/query?apikey=${apikey}&function=${apiFunction}&outputsize=full&symbol=${commoditySymbol}`
}

// const url: string = buildCommodityUrl(apikey, apiFunction, 'RAI')
// fetchCommodity(url).then((com: Commodity) => {
//     // const dateStr = 
//     // console.log(com["Meta Data"])
//     console.log(Object.keys(com))
//     // if (com.hasOwnProperty('Information')) {
//     //     console.log(com.Information)
//     // }
//     // console.log(`${symbol} close rate: ${data["Time Series (Daily)"]["4. close"]}`);
// });

const tickerList: string[] = TICKERS_SP500.split(',');
const successTickers: string[] = [];

let errTimes = 0;
const tryFetchData = () => {
    if (tickerList.length) {
        const tickerSymbol: string = tickerList[tickerList.length-1];
        const url = buildCommodityUrl(apikey, apiFunction, tickerSymbol);
        console.log(`-------------------------`)
        console.log(`Try fetch ${tickerSymbol} (${tickerList.indexOf(tickerSymbol) + 1 })`);
        fetchCommodity(url)
            .then((com: Commodity) => {

            // console.log(Object.keys(com))
            let isSuccess: boolean = false;
            if (com.hasOwnProperty('Information')) {
                // Fail
                console.log(`Fail - ${tickerSymbol} - TIME_OUT :/`);
                isSuccess = false;
                // errTimes = 0;
                
            } else if (com.hasOwnProperty('Time Series (Daily)')) {
                // Success
                // console.log(`${Object.keys(com['Time Series (Daily)'] || {})}`)
                // const dt: Date = new Date();
                // const year: number = dt.getFullYear();
                // const month2Dig: string = ("0" + (dt.getMonth() + 1)).slice(-2); // const month: number = dt.getMonth()+1;
                // const date2Dig: string = ("0" + dt.getDate()).slice(-2); // const date: number = dt.getDate();
                // const fullDate = `${year}-${month2Dig}-${date2Dig}`;
                // console.log(fullDate);
                errTimes = 0;
                const quoteList: string[] = Object.keys(com['Time Series (Daily)'])
                console.log(`Success - ${tickerSymbol} - ${com['Time Series (Daily)'][quoteList[0]]['1. open']}`);

                // Remove last element
                successTickers.push(tickerList[tickerList.length - 1]);
                tickerList.splice(tickerList.length - 1, 1);
                // Try fetch next ticker
                // tryFetchData();
                isSuccess = true;
            } else {
                errTimes++;
                console.log(`Fail(${errTimes}) - ${tickerSymbol} - Cant found "Time Series (Daily)" field`);
                isSuccess = false;
                if (errTimes >= 5) {
                    console.log(`Fail`)
                    tickerList.splice(tickerList.length - 1, 1);
                    errTimes = 0;
                }
            }

            if (isSuccess) {
                errTimes = 0;
                tryFetchData();
            } else {
                setTimeout(tryFetchData, 30000);
            }
        }).catch((ex) => {
            console.log(`Exception2 - ${tickerSymbol} - ${ex}`);
            tryFetchData();
        });

    } else {
        // End process
        // console.log(`processed in`)
        console.timeEnd('quote-fetching');
        console.log(`success tickers = ${successTickers.length +1}`)
        console.log(successTickers);
    }
}
// var t0 = performance.now();
console.time('quote-fetching');
tryFetchData()



// dd(dd);
    // const url = buildCommodityUrl(apikey, apiFunction, 'RAI')
    // fetchCommodity(url).then((com: Commodity) => {
    //     // const dateStr = 
    //     // console.log(com["Meta Data"])
    //     console.log(Object.keys(com))
    //     // if (com.hasOwnProperty('Information')) {
    //     //     console.log(com.Information)
    //     // }
    //     // console.log(`${symbol} close rate: ${data["Time Series (Daily)"]["4. close"]}`);
    // });
    // function(callback)
    // setTimeout(() => {
    //     console.log(33)
    // }, 1500);
// }


// TICKERS_SP500.split(',').forEach((symbol: string, i: number) => {
//     const url: string =  buildCommodityUrl(apikey, apiFunction, symbol)
//     fetchCommodity(url).then((com: Commodity) => {
//         // const dateStr = 
//         // console.log(com["Meta Data"])
//         console.log(symbol, Object.keys(com))
//         if (com.hasOwnProperty('Information')) {
//             console.log(com.Information)
//         }
//         // console.log(`${symbol} close rate: ${data["Time Series (Daily)"]["4. close"]}`);
//     });
// });


// 
// let lastMinute = new Date().getMinutes();
// let inSameMinute = 0;
// TICKERS_SP500.split(',').forEach((symbol: string, i: number) => {

    // const increaseAndGetOne = (isReset?: boolean) => {
    //     if (isReset) {
    //         inSameMinute = 0;
    //     }
    //     inSameMinute++;
    //     getOne()
    // }
    // const bibi = () => {
    //     // for (let index = 0; index < 5; index++) {
    //         let currMinute = new Date().getMinutes();
    //         if (lastMinute === currMinute) {
    //             if (inSameMinute < 5) {
    //                 increaseAndGetOne()
    //                 bibi();
    //             } else {
    //                 setTimeout(() => {
    //                     lastMinute = currMinute;
    //                     bibi();
    //                 }, 60000)
    //             }
    //         } else {
    //             lastMinute = currMinute;
    //             increaseAndGetOne()
    //             bibi();
    //         }
    //         // }
    //     }
    //     bibi();
        
// const getOne = (symbol: string): Promise<Commodity> => {
//     const url = buildCommodityUrl(apikey, apiFunction, symbol)
//     return fetchCommodity(url)
//     /* .then((com: Commodity) => {
//         console.log(symbol, Object.keys(com));
//     }); */
// }
        // TICKERS_SP500.split(',');
        // let list_all = TICKERS_SP500.split(',');
// let needWork: string[] = TICKERS_SP500.split(',')
        

// function fetchByList() {
//     needWork.forEach((symbol: string, i:number) => {
//         getOne(symbol)
//             .then(comm => {
//                 console.log(`${i}/${needWork.length}`)
//                 if (!comm.hasOwnProperty('Meta Data')) {
//                     needWork.push(symbol);
//                     throw "error with " + symbol;
//                 }

//                 // Remove from not success
//                 console.log('success ' + symbol)
//                 const foundedObj = needWork.find((c) => c === symbol);
//                 const i: number = needWork.indexOf(foundedObj || '');
//                 needWork.splice(i, 1);

//                 return;
//             })
//             .catch(ex => console.log(ex))
//     }, () => {
//         console.log('more: ' + needWork.length);
//         fetchByList();
//     })
// }
// fetchByList();
// notSuccess.forEach(symbol => {
//     getOne(symbol)
//     .then(comm => {
//         if (!comm.hasOwnProperty('Meta Data')) {
//             notSuccess.push(symbol);
//             throw "error with "+symbol;
//         }

//         // Remove from not success
//         console.log('success ' +symbol)
//         const foundedObj = notSuccess.find((c)=> c=== symbol);
//         const i: number = notSuccess.indexOf(foundedObj || '');
//         notSuccess.splice(i, 1);
        
//         return;
//     })
//     .catch(ex => console.log(ex))
// }, fetchByList.bind(notSuccess) );






const port: number = parseInt(process.env.PORT as string) || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
