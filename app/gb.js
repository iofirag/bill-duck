function hack(numOfKeys) {
    var apiKeysArr = JSON.parse(localStorage.getItem('apiArr'));
        
    if(!apiKeysArr) {
        apiKeysArr = [];
    }

    // Check if the arr length < 10
    if(apiKeysArr.length < numOfKeys) {
        var form = document.getElementById('post-form');
        form.first.value = 'a';
        form.last.value = "a";
        form.occupation.value = "Investor";
        form.organization.value = `d${Date.now()-327863728166}ff`;
        form.email.value = `${Date.now()}@gmail.com`;
    //     var rep = document.getElementsByClassName('g-recaptcha')[0];
    //     rep.parentElement.removeChild(rep);
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('submit-btn').click();

        // Wait for 2sec, for the page will render the apiKey
        setTimeout(() => {
            var apiCodeTag = document.getElementsByTagName('strong')[1];
            var apiCodeString = apiCodeTag.textContent;

            // exporting the api code from the gb text
            apiCodeString = apiCodeString.split(':')[1];
            apiCodeString = apiCodeString.split('.')[0];
            var apiCode = apiCodeString.split(' ')[1];

            // Checking if this apiKey is already imported to the array
            if(!apiKeysArr.includes(apiCode)) {
                apiKeysArr.push(apiCode);
                localStorage.setItem('apiArr', JSON.stringify(apiKeysArr));
            }

			hack(numOfKeys);
        }, 2000);
    } else {
		console.log(apiKeysArr);
		console.log('done. please check the array');
    }
}

/* ##################################################### */
const exportKey = (msg) => {
    msg = msg.split(':')[1];
    msg = msg.split('.')[0];
    var apiCode = msg.split(' ')[1];
    return apiCode;
}
const generateNewApiKey = () => {
    var form = document.getElementById('post-form');
    form.first.value = 'a';
    form.first.value = 'a';
    form.last.value = 'a';
    form.occupation.value = 'Investor';
    form.organization.value = 'b';
    form.email.value = `${Date.now()}@gmail.com`;
    try {
        var captcha = document.getElementsByClassName('g-recaptcha')[0];
        captcha.parentNode.removeChild(captcha);
    } catch (ex) { }
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('submit-btn').click();
    //print to console
    setTimeout(() => {
        var msg = String(document.getElementById('talk').firstChild.firstChild.innerHTML);
        var key = exportKey(msg);
        if (key) {
            var keyList = localStorage.getObj('keyList') || [];
            keyList.push(key);
            localStorage.setItem('keyList', JSON.stringify(keyList));
        }
        generateNewApiKey()
    }, 20000);
}
generateNewApiKey()

/* export saved data */
JSON.parse(localStorage.getItem('keyList'))
localStorage.keyList = [];



// console.log(`${Object.keys(com['Time Series (Daily)'] || {})}`)
// const dt: Date = new Date();
// const year: number = dt.getFullYear();
// const month2Dig: string = ("0" + (dt.getMonth() + 1)).slice(-2); // const month: number = dt.getMonth()+1;
// const date2Dig: string = ("0" + dt.getDate()).slice(-2); // const date: number = dt.getDate();
// const fullDate = `${year}-${month2Dig}-${date2Dig}`;
// console.log(fullDate);

                // console.log(`Success - ${tickerSymbol} - ${stock_al['Time Series (Daily)'][quoteList[0]]['1. open']}`);










// const apikey: string = ApiKey[0];

// Config the mongoDB (local or online)

// const fetchStock = async (_url: string): Promise<Res_alphavantage> => {
//     let res = await fetch(_url);
//     const json: Res_alphavantage = await res.json();
//     return json;
// }
// const buildFetchUrl = (apikey: string, apiFunction: string, stockSymbol: string) => {
//     return `https://www.alphavantage.co/query?apikey=${apikey}&function=${apiFunction}&outputsize=full&symbol=${stockSymbol}`
// }

// const stockList: string[] = TICKERS_SP500.split(',');
// const successTickers: string[] = [];
// let errTimes = 0;
// let apiKey: string = '';

// const getNextApiKey = (lastKey?: string) => {
//     if (!lastKey) { 
//         return ApiKeyList[0];
//     }
//     const i = ApiKeyList.indexOf(lastKey);
//     if (i >= 0 && i < ApiKeyList.length - 1)
//     return ApiKeyList[i + 1]
//     else return ApiKeyList[0]
// }
// const tryFetchData = () => {
//     if (stockList.length) {
//         const tickerSymbol: string = stockList[stockList.length-1];
//         apiKey = getNextApiKey(apiKey);
//         const url = buildFetchUrl(apiKey, ApiFunction, tickerSymbol);
//         console.log(`apiKey=${apiKey}`)
//         console.log(`-------------------------`)
//         console.log(`Try fetch ${tickerSymbol} (${stockList.indexOf(tickerSymbol) + 1 })`);
//         fetchStock(url)
//             .then((stock_al: Res_alphavantage) => {

//             // console.log(Object.keys(com))
//             let isSuccess: boolean = false;
//             if (stock_al.hasOwnProperty('Information')) {
//                 // Fail
//                 isSuccess = false;
//                 console.log(`Fail - ${tickerSymbol} - TIME_OUT :/`);

//             } else if (stock_al.hasOwnProperty('Time Series (Daily)')) {
//                 // Success
//                 isSuccess = true;
//                 errTimes = 0;

//                 const stock: Stock = new Stock(stock_al, 'alpha');
//                 // createStockStatics(stock);
//                 console.log(stock);

//                 // Remove last element
//                 successTickers.push(stockList[stockList.length - 1]);
//                 stockList.splice(stockList.length - 1, 1);

//             } else {
//                 isSuccess = false;
//                 errTimes++;
//                 console.log(`Fail(${errTimes}) - ${tickerSymbol} - Cant found "Time Series (Daily)" field`);
//                 if (errTimes >= 5) {
//                     console.log(`Fail`)
//                     stockList.splice(stockList.length - 1, 1);
//                     errTimes = 0;
//                 }
//             }

//             if (isSuccess) {
//                 // Try fetch next stock symbol
//                 errTimes = 0;
//                 tryFetchData();
//             } else {
//                 console.log('timeout 30 secons')
//                 setTimeout(tryFetchData, 30000);
//             }
//         }).catch((ex) => {
//             console.log(`Exception2 - ${tickerSymbol} - ${ex}`);
//             tryFetchData();
//         });

//     } else {
//         // End process
//         console.timeEnd('quote-fetching');
//         console.log(`success tickers = ${successTickers.length +1}`)
//         console.log(successTickers);
//     }
// }
// console.time('quote-fetching');
// tryFetchData()
