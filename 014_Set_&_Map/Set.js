//Set is a Data Strucutre designed to store a collection
// of unique values.
// Its automatically filter and remove duplicates values

const arr = [10,20 ,30,23,45,45,34,20,40,30];
// console.log(arr);

const s1 = new Set(arr);
s1.add(69);

console.log(s1);

console.log(s1.has(30));

s1.delete(23);
console.log(s1);


const email = ["rog@gm", "rg@gm", "rog@gm","rzg@gm", "agg@gm"];

// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

const s2 = new Set(email);

for(let num of s2){
    console.log(num);
}
