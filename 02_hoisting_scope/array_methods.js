// js == other lang
// car == bekar

// map, filter, forEach

// reduce
let arr = [1,2,3,4,5]
// compress -> returns single value 
let ans = arr.reduce((prev, curr)=>{
    // console.log(`Prev: ${prev}`);
    // console.log(`Curr: ${curr}`);
    // console.log(`ans: ${prev + curr}`);
    
    return prev + curr
}, 0)

// console.log(ans);


// 
// let fn = () => {
//     return 30
// }
// let fn = () => 30

let double = arr.map((el, i, arr)=> el*2)
let doubleEven = double.filter((el)=> el %2 == 0)

console.log(`Double: ${double}`);
console.log(`Even Double: ${doubleEven}`);

// HW -> some, every 
// MDN ->
// Youtube



// Summary
// reduce
// single liner function





