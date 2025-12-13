
function greet(){
    console.log("Hello everyone");
}

function bye(){
    console.log("ok thank you we'll meet soon!");
    
}

function meet(callback) {
    console.log("i am going to meet someone");

    callback();

    console.log("I finished meeting");
}

meet(greet);
meet(bye);