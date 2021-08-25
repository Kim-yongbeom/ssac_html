//반복문 : for, while
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i < 20; i += 2) {
  console.log(10 / i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
  console.log(sum);
}
console.log(sum);

let a = 0;
while (true) {
  a++;
  if (a >= 10) {
    break;
  }
}
console.log(a);

// 로그인을 위해 while 구문을 사용하는 경우
// 로그인 할 때는 입력을 계속 기다려야함
// 사용자가 아이디와 비밀번호를 입력한다
// 맞을때 까지 반복, 맞으면 break
