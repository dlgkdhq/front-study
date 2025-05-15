
//함수 리턴
function sum1(){
    return 100;
}

sum1();
console.log(sum1());
let n = 20 + sum1();
console.log(n);

const sum2 = function(a, b){
    return a+b;
}
console.log(sum2(10,20));

const sum3 = function sum333(a,b){
    return a+b;
}
console.log(sum3(90,20));

const sum4 = (a,b)=>{
    return a+b;
}
console.log(sum4(101,202));

const sum5 = (a,b)=> a+b;   //화살표 뒤 코드를 return으로 인식함
console.log(sum5(15,25));

const sum6 = ()=>1+2+3+4+5;

//const sum6 = ()=>{
//  return 1+2+3+4+5;
//}
console.log(sum6());

function func(){
    let x = 10;
    console.log(x);
}

//console.log(x);
if(true) {
    let x = 20;
}

{
    let x = 30;
}

// console.log(x);

/*
console.log(q);
let q = 30;
*/

console.log(w);
var w = 30; //함수 호이스팅

r = 3000;
var r;              //이미 변수 r이 저~~위에 있다고 인식
console.log(r);

check();
function check(){       //이미 함수가 저~~ 위에 있다고 인식
    console.log('check');
}

// let name = "이름";
// let name = "내이름";     //let은 같은 변수명 사용 못함

var r = 5000;       //이미 선언한 변수명인데 다시 선언하면서 기존값이 덮어쓰기 됨
console.log(r);     //주로 let이나 const를 씀

function welcome(){
    console.log("환영합니다~");

}

(function(){
    console.log('이것은 일회용 함수');
})();

