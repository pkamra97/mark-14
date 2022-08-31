const intialPrice=document.querySelector("#intial-price");
const stocksQuantitu=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const btn=document.querySelector("#submit-btn");
const op=document.querySelector("#output-box");

function calculatePNL(initial_price, current_price , no_of_stocks)
{
    if(current_price<initial_price)
    {//loss report 
        var loss=(initial_price-current_price)*no_of_stocks;
        var percent=(loss/initial_price)*100;
        console.log(`Hey the loss is ${loss} and the percent is ${percent}%`);
    }
    else if(current_price>initial_price)
    {   //profit report
        var profit=(current_price-initial_price)*no_of_stocks;
        var percent=(profit/initial_price)*100;
        console.log(`Hey the profit is ${profit} and the percent is ${percent}%`);    
    }
    else{
        console.log(`No pain , no gain `);
    }
}
