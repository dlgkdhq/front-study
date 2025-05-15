//function 함수

//function 함수 선언
function func01() {
    console.log('func01 호출');
}

func01();   //함수 호출!!

const func02 = function(){
    console.log('func02 호출');
}

func02();

const func03 = function func303(){  //function 뒤에 오는 이름은 아무거나 써도 됨.. 어차피 인식 못함 그래서 굳이 쓸 필요 없음
    console.log('func03 호출');
}

func03();
//func303();

const func04 = ()=>{
    console.log('func04 호출')
}

func04();

//함수 + 매개변수
function func05(a, b){  //매개변수명은 아무거나 사용 가능
    console.log(a + " " + b);
}

func05(10, 20);
func03("A", "B");

const func06 = function(a,b){
    console.log(a + " " + b);
}

func06(20, 30);

const func07 = function func007(a,b){
    console.log(a + " " + b);
}

func07(50, 60);

const func08 = (a, b)=>{
    console.log(a + " " + b);
}

func08(90, 100);
