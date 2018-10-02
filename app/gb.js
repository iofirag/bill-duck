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
