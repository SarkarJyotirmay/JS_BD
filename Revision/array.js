// redcue => reducer => Which reduces the values
// [] => Collection of values
// reduce => single value

// Q1: From an array of objects, return only the users who are active.
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];
// Expected: [{ name: "A", active: true }, { name: "C", active: true }]
let ans = users.filter((user) => user.active);
// console.log(ans);

// Q2. Expected: 30
const nums = [5, 10, 15];
// Constraint use higher order functions only

// Q3.
const students = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
// Expected: { 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" }, 3:  { id: 3, name: "C" } }

let objById = students.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

// console.log(objById);

// Q4.
const nestedNums = [9,[1, 2], [3, 4, [7,8]], [5]];
// Expected: [1, 2, 3, 4, 5]
let flaten = [];
function flatMyArr(nums) {
  nums.forEach((arr) => {
    // normla value
    if (!Array.isArray(arr)) {
      flaten.push(arr);
    }
    else{
        // array value -> [3, 4, [7,8]]
        arr.forEach((el)=>{
            // el -> [7,8]
            if(Array.isArray(el)){
                flatMyArr(el)
            }
            else{
                flaten.push(el)
            }
        })
    }
  });
  return flaten
}

let res = flatMyArr(nestedNums)
console.log(res);



// fn(nums)
// fun(nums1)
// array -> passed by ref
