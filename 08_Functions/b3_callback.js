
function blinkItOrderPlaced(){
    console.log("BlinkIt started preparing your food");
}

function zomatoOrderPlaced(){
    console.log("Zomato started preparing your food");
}


function payment(amount, callback){
    console.log(`${amount} payment has initilized`);
    console.log("Payment is recived");
    callback();
}

payment(349, blinkItOrderPlaced);
console.log("\n");
payment(349, zomatoOrderPlaced);