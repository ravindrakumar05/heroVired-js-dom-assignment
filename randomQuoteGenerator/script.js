let quoteEle = document.getElementById("new-quote")
async function getQuote(){
    let response = await fetch('https://api.quotable.io/random');
    let quote1 = await response.json();
    quoteEle.innerText = "' "+quote1.content+" '"

}
