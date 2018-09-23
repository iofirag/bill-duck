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
