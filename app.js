const intialPrice=document.querySelector("#intial-price");
const stocksQuantity=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const btn=document.querySelector("#submit-btn");
const output_box=document.querySelector("#output-box");

function calculatePNL(initial, current , quantity)
{
    if(initial && current && quantity)
{
        if(current<initial)
    {//loss report 
        var loss=(initial-current)*quantity;
        var losspercent=(loss/initial)*100;
        showOutput(`Hey the loss is ${loss} and the percent is ${losspercent}%`);
    }
    else if(current>initial)
    {   //profit report
        var profit=(current-initial)*quantity;
        var profitpercent=(profit/initial)*100;
        showOutput(`Hey the profit is ${profit} and the percent is ${profitpercent}%`);    
    }
    else{
        showOutput(`No pain , no gain `);
    }
}
else{ showOutput("Please fill Every box")}

}

// calculatePNL(50,150,10);
// calculatePNL(20,100,10);

function submitBtn()
{
    var ip=Number(intialPrice.value);
    var qty=Number(stocksQuantity.value);
    var cp=Number(currentPrice.value);
    calculatePNL(ip,cp,qty); 
}

function showOutput(message , status)
{ 
     output_box.innerText=message;
}

function financial(x) {  return Number.parseFloat(x).toFixed(2);  }

// working separtely but not working inside loss and profit 1st doubt 
console.log(financial(2.8956322) )
  

btn.addEventListener('click',submitBtn);

