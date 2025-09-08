// console.log("I am sync 1");

// function f1() {
//   console.log("I am ASYNC 1");
//   console.log("I am ASYNC 2");
//   console.log("I am ASYNC 3");
// }

// const intervalID = setInterval(() => {
//   clearInterval(intervalID);
//   console.log("I am ASYNC 1");
//   console.log("I am ASYNC 2");
//   console.log("I am ASYNC 3");
// }, 1000);

// setInterval(f1, 1000)
//
// 1s delay -> f1(CB, Delay Timer)
// 1s delay -> f1()
// 1s delay -> f1()
// 1s delay -> f1()
// Waiting
// Calling

// console.log("I am sync 2");
// console.log("I am sync 3");
// console.log(typeof setInterval);

// ? 3 time call a function with a delay of 2 seconds
// TO ---2s>f1()
// TO ---2s>f1()
// TO ---2s>f1()

// TI ---2s> f1()
// TI ---2s> f1()
// TI ---2s> f1()
// ! Break -> ClearInterval
// TI ---2s> f1()
// TI ---2s> f1()
// TI ---2s> f1()
// TI ---2s> f1()
// TI ---2s> f1()
// TI ---2s> f1()

// ! Thumb Rule of coding -> Always break your problem into chunks(smaller parts)
// Counter = 0 => 1 => 2 => 3

let counter = 1;  // 2 3 
function IamBapan (){
    console.log("bapan bapan bapan bapan bapan bapan bapan bapan bapan bapan");
    // counter upgrade
    if(counter === 3){
        clearInterval(ID)
    }
    counter++;
}
// const ID = setInterval(IamBapan, 2000)

// ? Call a function once using SetInterval
const IamRohit = ()=>{
    clearInterval(RohitID)
    console.log("Meye Chai Meye ChaiMeye ChaiMeye ChaiMeye ChaiMeye Chai");
}
const RohitID = setInterval(IamRohit, 2000)

