// type of variable -> let | const | var
// type of scope -> local | global | block

// who can hoist -> var & function
// arrow functions are being treated as normal variables
// hoisting preferece -> function always on the top -> var

// fn1 -> func
// var fn1 -> undefined

fn1();


function fn1() {
  console.log("I am fn1");
}

// fn2()

var fn2 = () => {
  console.log("I am fn2");
};

var fn1 = 30;
console.log(fn1);


// var -> hoistis with undefined
// function -> hoists with entire body
