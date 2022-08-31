const intialPrice=document.querySelector("#intial-price");
const stocksQuantity=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const btn=document.querySelector("#submit-btn");
const output_box=document.querySelector("#output-box");

function calculatePNL(initial, current , quantity)
{
    if(current<initial)
    {//loss report 
        var loss=(initial-current)*quantity;
        var percent=(loss/initial)*100;
        showOutput(`Hey the loss is ${loss} and the percent is ${percent}%`);
    }
    else if(current>initial)
    {   //profit report
        var profit=(current-initial)*quantity;
        var percent=(profit/initial)*100;
        showOutput(`Hey the profit is ${profit} and the percent is ${percent}%`);    
    }
    else{
        showOutput(`No pain , no gain `);
    }
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
  

btn.addEventListener('click',submitBtn);

