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
        var loss=financial((initial-current)*quantity);
        var losspercent=financial((loss/initial)*100);
        
        showOutput(`Hey the loss is ${loss} and the percent is ${losspercent}%`);
        output_box.style.color = 'red';
    }
    else if(current>initial)
    {   //profit report
        var profit=financial((current-initial)*quantity);
        var profitpercent=financial((profit/initial)*100);
        showOutput(`Hey the profit is ${profit} and the percent is ${profitpercent}%`); 
        output_box.style.color = 'green';   
    }
    else{
        showOutput(`No pain , no gain `);
        output_box.style.color = '#6d28d9'; 
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
// this function will round off upto 2 digits

// console.log(financial(2.8956322) )

  

btn.addEventListener('click',submitBtn);

