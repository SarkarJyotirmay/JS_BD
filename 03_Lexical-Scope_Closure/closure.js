let a = 20;
function func1() {
  let bapan = 20;
  console.log(a);

  return function () {
    a += bapan;
    console.log(bapan);
  };
}

// console.log(bapan);

// console.log(bapan); // RE

// let inner = func1();
// inner();
// inner();
// inner();
// func1();

func1()();

console.log("Bapan");

