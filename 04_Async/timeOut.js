console.log("Hello 1");

let timerId1 = setTimeout(() => {
  console.log("Hello 2");
}, 5000);

clearTimeout(timerId1)

let timerId2 = setTimeout(() => {
  console.log("Hello 3");
}, 3000);
// 1s = 1000ms
// {id: delay}





// Web API -> Timer starts (waiting period)
// All Sync tasks are completed -> Async execution starts (according to their  waiting period)
