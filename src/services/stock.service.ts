import fetch from 'node-fetch';

export const fetchData = async (url: string, options: any): Promise<any> => {
    return await fetch(url, options);
};

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