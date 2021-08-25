//Scope

//Global scope(전역 범위)
let name = "tom";

function sumPrint() {
  // function scope(함수 범위)
  let sum = 50;

  for (let i = 0; i < 3; i++) {
    // Block scope(블록 범위)
    let msg = "Hello World";
    //블록 범위
    console.log(name);
    console.log(sum);
    console.log(msg);
  }
  //함수 범위
  console.log(name);
  console.log(sum);
  // console.log(msg);
}

//전역 범위
console.log(name);
// console.log(sum);
// console.log(msg);

// var : Global scope, function scope 만 적용 가능

//this
let person = {
  name: "kim",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);

console.log(this); //전역에서는 this 쓰면 window나옴

let x = this;
// x.alert("Hello");
// alert("hello");   요것도 바로 window
function type() {
  console.log(this);
}

type(); //함수에서도 this 쓰면 window
