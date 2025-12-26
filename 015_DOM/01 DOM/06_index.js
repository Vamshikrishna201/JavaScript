// mouse location, when it moves
let check = document.querySelector("body")
.addEventListener("mousemove", ()=> {
    console.log("Moving...");
})


//optional
let check1 = document.querySelector("body")
.addEventListener("mousemove", (dets)=> {
    console.log(dets);
})