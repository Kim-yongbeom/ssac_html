//함수

//함수 선언 => 정의
function compareOne() {
  if (1 === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

//함수 호출 => 호출(call)
compareOne();

function compareNumber(number) {
  if (number === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

compareNumber(1);
compareNumber(2);
compareNumber("1");

function sum(number1, number2) {
  console.log(number1 + number2);
}

sum(1, 3);
sum(2, 5);

//함수를 호출한 위치에 값을 되돌려 주는 것 : return
//return 을 사용하게 되면 함수 내부의 결과 값을 함수 외부에서 사용이 가능하다
function sumReturn(number1, number2) {
  let sum = number1 + number2;
  return sum;
}
console.log(sumReturn(1, 2));
console.log(sumReturn(1, 2) + 10);
////////////////////
///////////////////////
function hello1() {
  console.log("Hello Function 1");
}

let hello2 = function () {
  console.log("Hello Function 2");
};

let hello3 = () => {
  console.log("Hello Function 3");
};

let hello4 = () => console.log("Hello Function 4");

hello1();
hello2();
hello3();
hello4();

let hello5 = (number) => {
  console.log(number);
};

let hello6 = (number) => console.log(number);

//매개변수가 1개일때 소괄호 생략 가능
let hello7 = (number) => console.log(number);

hello5(1);
hello6(2);
hello7(3);
