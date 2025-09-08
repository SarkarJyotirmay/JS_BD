// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");


// setTimeout(() => console.log("X"), 1000);
// setTimeout(() => console.log("Y"), 1000);

// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 2000);

// setTimeout(() => {
//   console.log("timeout 2");
// }, 1000);

// console.log("end");
// start end 2 1

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


// ****