
//Java 비교
//new int[3];
//new int[5]; -> ArrayList  .add .get

//javascript 배열 조작 함수

/*
앞
    -삭제 : shift
    -추가 : unshift
뒤
    -삭제 : pop
    -추가 : push
*/

let arr = [1,2,3];

//파괴적함수(원본데이터 바꿈) / 비파괴적함수(원본데이터 안바꿈)

arr.unshift(9);
console.log(arr);
arr.push(20);
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//concat 배열 연결
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// arr1 = arr1.concat(arr2);
console.log(arr1);

// ... 전개연산자

let arr3 = [80, ...arr1, 90];
//         [80, [1,2,3], 90]; ...을 하면 한꺼풀을 벗겨낸다 - > [80, 1,2,3, 90];
console.log(arr3);

//깊은 복사(deep copy) vs 얕은 복사(shallow copy)
// 값 자체를 복사       vs 주소 복사

let x = [1,2,3];
let y = x;
let z = [...x];
console.log(x);
console.log(y);
console.log(z);


x[1] = 20;
console.log(x);
console.log(y);
console.log(z);

// splice 함수
// 특정위치에 추가/삭제

// splice(인덱스, 삭제할 갯수)
// splice(인덱스, 삭제할 갯수, 추가할 값)

let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1,2);
console.log(arr4);  //[1,4,5]
arr4.push(6);
console.log(arr4);  //[1,4,5,6]
arr4.splice(2,1,50);    //2인덱스 값 하나 지우고 50을 추가하겠다
// arr4[2] = 50;
console.log(arr4);
arr4.splice(2,0,30);
console.log(arr4);

console.log('-------------------------');
let obj = {
    name:"김밥천국",
    menu:"김밥"
};
console.log(obj);
obj.menu = "참치김밥";  //값 저장
console.log(obj);
obj.price = 5500;   //새로운 key값 저장(추가) -> 그냥 써주면 됨
console.log(obj);
delete obj.price;   //특정 키값 삭제
console.log(obj);