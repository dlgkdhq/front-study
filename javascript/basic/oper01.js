//oper01.js

//operator

console.log( 2 ** 4); //2*2*2*2

let x = 10;
let y = 10;
let z = '10';

console.log(x > 5);
//     ==  !=

// ==(값이 같다)   ===(값과 타입이 같다)
// !=             !==
console.log(x==y); //true
console.log(x==z); //true

console.log(x===y); //true
console.log(x===z); //false      === 값과 자료형까지 일치하는가?

console.log( x > 5 && y > 0);
console.log( x == 1 || y >= 50);

//숫자 -> 문자
//문자 -> 숫자
let q = 10;
let w = '20';
let e = 30;

console.log(q+e);   //40
console.log(q+w);   //1020

// String()
// Number()

console.log(q + String(e)); //숫자 -> 문자
console.log(q + Number(w)); //문자 -> 숫자

console.log(Number("123.123"));


if( q ==10 ){
    console.log("출력~");
}

q == 10 && console.log("출력~~~");  //둘다 참이어야 실행됨, 앞이 거짓이면 뒤 코드 실행 안함.