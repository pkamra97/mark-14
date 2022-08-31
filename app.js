const intialPrice=document.querySelector("#intial-price");
const stocksQuantitu=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const btn=document.querySelector("#submit-btn");
const op=document.querySelector("#output-box");

function calculatePNL(initial, current , quantity)
{
    if(current<initial)
    {//loss report 
        var loss=(initial-current)*quantity;
        var percent=(loss/initial)*100;
        console.log(`Hey the loss is ${loss} and the percent is ${percent}%`);
    }
    else if(current>initial)
    {   //profit report
        var profit=(current-initial)*quantity;
        var percent=(profit/initial)*100;
        console.log(`Hey the profit is ${profit} and the percent is ${percent}%`);    
    }
    else{
        console.log(`No pain , no gain `);
    }
}

calculatePNL(50,150,10);
calculatePNL(20,100,10);