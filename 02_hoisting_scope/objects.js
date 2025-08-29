

// why objects

// let names = ["Rohit", "Bapan", "Suprabhat"]
// let rooms = [101, 102, 103]
// console.log(names[0], rooms[0]);

let roomByNames = {
    rohit: 101,
    bapan: 102,
    suprabhat: 103,
    naitik: {
        room: 104,
        descripttion: "Missunderstood as a thief"
    }
}

// console.log(roomByNames.suprabhat);

// Tip: while dealing with variables
let playBoy = "rohit"
// console.log(roomByNames[playBoy]);


// Ways to access: dot(.), []

// console.log(roomByNames["rohit"]);

// Properties
// key -> string
// value -> can be anything

let keys = Object.keys(roomByNames) // ["rohit", "bapan", "suprabhat"]


// console.log(typeof keys[0]);


// .values, .entries

// .keys, .values, .entries


// 29/08/25
// Loop over object
let students = {
    bapan: 20,
    chirag: 30,
    jyoti: 32
}

// .keys, .values, .entries

let arr = [1,2,3]
// for, .forEach, while, for of -> Array
// for(let el of arr){
//     console.log(el);
// }
// 1, 2, 3

// for in -> Object
// 
// for(let key in students){
//     console.log(key);
// }

// 
let obj = {
    A: 1,
    B: 2, 
    C: 3,
    d: 5,
    E: 6
}
// extract the value where key is in lower case 
for(let key in obj){
    if(key.charCodeAt() >= 97){
        console.log(key, ": ", obj[key]);
        return
    }
}
// O/p =>









