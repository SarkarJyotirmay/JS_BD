// function fun(){
//     let x = 20
// } // *

 

// console.log(x); // ref error

// global -> parent to all
// block
// function

// data flow -> parent to child

console.log(x); // undefined | ref error not defined

function fn(){

    console.log("inside x");
    var x = 32;
    console.log(x);
}

fn()
// undefinded
