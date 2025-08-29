// fn with whole body
// var -> undefined
// console.log(a);

var a = 10;


// fn()

function fn(){
    console.log("Hoist hone ki ninja technique! Ding Ding :)");
}



// var, functions
// functions ka hoisting precedense/preference is higher than var

// var => redeclare & reassign

// let, const, var
// var -> function scoped
// let, const -> block scoped
console.log(bapan);

{
    var bapan = 20
}

// console.log(jyoti);
function fnc(){
    var jyoti
}