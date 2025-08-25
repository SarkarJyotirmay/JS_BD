let arr = ['bapan', 'rohit', 'samapon', 'rehan', 10, {"name": 'bapan'}]

// console.log(arr[0]);
// for(let el of arr){
//     console.log(el);
// }
// for(let i = 0; i < arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
// }
// i -> 0>1>2>3

// HIGHER ORDER FUNCTIONS
let age = 10;
let func = ()=>{}

let higherOrder = (fn)=>{
    fn()
    console.log(`Hello world`);
}

let worker = (el, index, arr)=>{
    console.log(`el = ${el}, index = ${index}, arr = ${arr}`);
}
// arr.forEach(worker)
// arr.forEach((el)=>{
//     return
// })



// console.log(arr.length);

// forEach, map, filter,
// reduce, some, every
// flat
let upgraded = arr.map((el, idx, arr)=>{
    // el = bapan
    // el = `I am ${el}` // I am bapan
    // el += ` I am at ${idx} index` // i am bapan I am at 0 index 
    // return el;
    if(typeof el === "object"){
        return el.name
    }
})

// console.log(upgraded);


// ['bapan', 'rohit', 'samapon', 'rehan', 10, {name: 'bapan'}]
let filtered = arr.filter((el, idx, arr)=>{
    // condition
    if(typeof el == "object"){
        return el
    }
})

// console.log(filtered);

// FW => Native - 80% 
















