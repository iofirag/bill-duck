function hack(numOfKeys) {
    var apiKeysArr = JSON.parse(localStorage.getItem('apiArr'));
        
    if(!apiKeysArr) {
        apiKeysArr = [];
    }

    // Check if the arr length < 10
    if(apiKeysArr.length < numOfKeys) {
        var form = document.getElementById('post-form');
        form.first.value = 'a';
        form.first.value = "a"
        form.last.value = "a"
        form.occupation.value = "Investor"
        form.organization.value = `d${Date.now()-327863728166}ff`
        form.email.value = `${Date.now()}@gmail.com`
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

// document.getElementsByTagName('iframe')[0].scrollIntoView()
// setTimeout(() => { document.getElementById('submit-btn').click() }, 5000)
const VERS1 = 'Vantage! Your API key is: ';
const VERS2 = 'Vantage! Your dedicated access key is: ';
const VERS3 = 'It seems that you are already a registered user. As a reminder, your API key is: ';
const VERS4 = 'Welcome to Alpha Vantage! Here is your API key: '

Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key))
}
const exportKey = (msg, vers) => {
    let apiKeyIndex = msg.indexOf(vers) + vers.length;
    return msg.slice(apiKeyIndex, apiKeyIndex + 16);
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
        // console.log(msg)
        var key;
        if (msg.indexOf(VERS1) > -1) {
            key = exportKey(msg, VERS1);
            // console.log(msg.slice(43, 59));
        } else if (msg.indexOf(VERS2) > -1) {
            key = exportKey(msg, VERS2);
            // console.log( msg.slice(56, 72) );
        } else if (msg.indexOf(VERS3) > -1) {
            // console.log(exportKey(msg, VERS3));
            key = exportKey(msg, VERS3); 
        } else if (msg.indexOf(VERS4) > -1) {
            // console.log(exportKey(msg, VERS3));
            key = exportKey(msg, VERS4);
        }
        if (key) {
            var keyList = localStorage.getObj('keyList') || [];
            keyList.push(key);
            localStorage.setObj('keyList', keyList);
        }
        generateNewApiKey()
    }, 2000);
}
generateNewApiKey()



// console.log(`${Object.keys(com['Time Series (Daily)'] || {})}`)
// const dt: Date = new Date();
// const year: number = dt.getFullYear();
// const month2Dig: string = ("0" + (dt.getMonth() + 1)).slice(-2); // const month: number = dt.getMonth()+1;
// const date2Dig: string = ("0" + dt.getDate()).slice(-2); // const date: number = dt.getDate();
// const fullDate = `${year}-${month2Dig}-${date2Dig}`;
// console.log(fullDate);

                // console.log(`Success - ${tickerSymbol} - ${stock_al['Time Series (Daily)'][quoteList[0]]['1. open']}`);



// const https = require("https");
// const apikey: string = ApiKey[0];


// type my = {
//     s?: {
//         df?: {
//             age?: number 
//         }
//     }
// }

// var b: my = {

// }
// var c: my = {
//     s: {
//         df: {}
//     }
// }
// var a: my = {
//     s: {
//         df: {
//             age: 44
//         }
//     }
// }
// if (a && a.s && a.s.df && a.s.df.age) {
//     console.log (a.s.df.age)
// }

// console.log(a && a.s && a.s.df && a.s.df.age)

// var val = _.get(a, 's.df.age', 0);
// console.log(val)
// console.log(`Success - ${tickerSymbol} - ${stock_al['Time Series (Daily)'][quoteList[0]]['1. open']}`);
