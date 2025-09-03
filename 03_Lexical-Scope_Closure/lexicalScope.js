let x = 30;

function outter() {
    let a = 20
    console.log(x);
return  function inner() {
    console.log(a)
    console.log(x);
    
  }
}

let tryToAccessMe = 55;

let inner = outter()
inner();
