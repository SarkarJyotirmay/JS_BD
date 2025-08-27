

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
console.log(roomByNames[playBoy]);


// Ways to access: dot(.), []

console.log(roomByNames["rohit"]);

// Properties
// key -> string
// value -> can be anything

let keys = Object.keys(roomByNames) // ["rohit", "bapan", "suprabhat"]


console.log(typeof keys[0]);


// .values, .entries







