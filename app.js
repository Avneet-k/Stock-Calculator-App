const purchasePrice = document.querySelector("#purchase-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const form = document.querySelector(".main-form");
const btnCheck = document.querySelector("#btn-check");
const outputDiv = document.querySelector("#output");
const body = document.querySelector("#body");
const lottie = document.querySelector("#lottie");


lottie.style.display = "none";
body.classList.remove("sad");

form.addEventListener("submit", submitHandler);

function submitHandler(e){
    e.preventDefault();
    var purchaseInput = Number(purchasePrice.value);
    var quantityInput = Number(stockQuantity.value);
    var currentInput = Number(currentPrice.value);

    calculateProfitAndLoss(purchaseInput,quantityInput,currentInput);
};


function calculateProfitAndLoss(purchase,quantity,current){

    if (purchase > 0 && quantity > 0 && current > 0){
        if(purchase > current){
            var loss = (purchase - current)*quantity;
            var lossPercent = (((purchase - current)*100)/purchase).toFixed(2);
            showOutput(`Oh No!😦 You lost ${lossPercent}%. Your total loss is ₹${loss}`);
            body.classList.add("sad");
            lottie.style.display = "none";
        }
        else if(current > purchase){
            var profit = (current - purchase)*quantity;
            var profitPercent = (((current - purchase)*100)/current).toFixed(2);
            showOutput(`Congratulations!🥳 You gained ${profitPercent}%. Your total profit is ₹${profit}`);
            lottie.style.display = "block";
            body.classList.remove("sad");
        }
        else{
            showOutput(`Even-Steven!😇 Niether a gain, nor a loss`);
            body.classList.remove("sad");
            lottie.style.display = "none";
        }
    }else{
        showOutput(`Values should be greater than 0`);
        body.classList.remove("sad");
        lottie.style.display = "none";
    }
    
};

function showOutput(message){
    outputDiv.innerHTML = message;

}
