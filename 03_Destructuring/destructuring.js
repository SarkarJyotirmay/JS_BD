let arr = [1, 2, 3, 4, 5];

// 1 | 2 | 3 | 4 | 5
// console.log(arr);

// console.log(...arr)

let arrUpgraded = [10, 20, 30, ...arr];
// console.log(arrUpgraded);

// let [a,b,c,d,e] = arr
// 1 | 2 | 3 | 4 | 5

// console.log(a);

let [a, ...b] = arr;
// console.log(a);
// console.log(b);

// Spread | Rest
// [] -> spread
// [] -> Rest

// let [x,...y] = arr
// 1 | 2 | 3 | 4 | 5
// ...arr

// let [x,y,...z] = arr
// console.log(z);

let arr1 = [["Bapan", "Jyoti"],1, 2, 3];
// let arr2 = arr1;
let arr2 = [...arr1]

arr2[0][0] = 32;

// console.log("arr1 =>",arr1);
// console.log("arr2 =>",arr2);

// 

let arr3 = JSON.stringify(arr1)
let arr4 = JSON.parse(arr3)
// console.log(arr3);

console.log(typeof arr3);
// console.log(arr4);
// console.log(typeof arr4);

arr4[0][0] = "Rohit"
console.log(`arr1 => ${arr1}`);
console.log(`arr2 => ${arr4}`);


let ans = JSON.parse(JSON.stringify(arr1))
console.log(ans);

ans[0][1] = "Hello"

// Situation 
// ["Somapan", "Rehan", "Jyoti", "Amit"]
// ... -> []
// [["Rehan", 10], ["samapan", 20], ["Jyoti", 32]]
// ... -> [[ref]]

// Deep copy







// Shallow Copy | Deep Copy
