
let scores = [10, 30, 50, 70];

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for ... in
for(let i in scores){   // i값에 index가 들어감
    console.log(i + ' ' + scores[i]);
}

//for ... of
for(let score of scores){   // 향상된 for문
    console.log(score);
}

//0  1  2  3
//10 30 50 70 : item
scores.forEach((item, index)=>{     //scores안에 들어있는 애들을 각각 반복실행한다
    console.log(item + " " + index);
}   );