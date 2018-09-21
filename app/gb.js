var form = document.getElementById('post-form');
form.first.value = 'a';
form.first.value = "a"
form.last.value = "a"
form.occupation.value = "Investor"
form.organization.value = 'b'
form.email.value = `${Date.now()}@gmail.com`
document.getElementsByTagName('iframe')[0].scrollIntoView()
setTimeout(() => { document.getElementById('submit-btn').click() }, 5000)



var form = document.getElementById('post-form');
form.first.value = 'a';
form.first.value = "a"
form.last.value = "a"
form.occupation.value = "Investor"
form.organization.value = 'b'
form.email.value = `${Date.now()}@gmail.com`
document.getElementsByTagName('iframe')[0].scrollIntoView()
document.addEventListener("mousemove", (e) => {
    // console.log(e, e.clientX, e.clientY)
    e.target.click()
});


// console.log(`${Object.keys(com['Time Series (Daily)'] || {})}`)
                // const dt: Date = new Date();
                // const year: number = dt.getFullYear();
                // const month2Dig: string = ("0" + (dt.getMonth() + 1)).slice(-2); // const month: number = dt.getMonth()+1;
                // const date2Dig: string = ("0" + dt.getDate()).slice(-2); // const date: number = dt.getDate();
                // const fullDate = `${year}-${month2Dig}-${date2Dig}`;
                // console.log(fullDate);

                // console.log(`Success - ${tickerSymbol} - ${stock_al['Time Series (Daily)'][quoteList[0]]['1. open']}`);
