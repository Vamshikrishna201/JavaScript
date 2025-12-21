// Map is a Data Structure where we store key-value pairs
// key can be any thing, (unline Objects, which primarily use strings)


// Core Methods (CRUD)
/*
.set(key, value) -> update a key-value pair. Return the MAP

.get(key) -> get the key. Returns undifined if the key doesn't exist

.has(key) -> Checks if a key exist. Returns true or false.

.delete(key) -> removes all key-value pair

. clear() -> Removes all Key-value pairs.

*/

const m1 = new Map([
    ["Ram", 46],
    [2, "Keishna"],
    [true, 11],
    [[10,20,11], "Hari"]
]);

// console.log(m1);

m1.set({name:"Shayam", age:28}, false);

console.log(m1.get("Ram")); // 46

// console.log(m1.size);

for(let num of m1){
    console.log(num);
    
}
