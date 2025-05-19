
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

function changeLink(strUrl){

    if( !(strUrl.includes("://")) ){
        return "경로가 잘못되었습니다."
    }

    let ht = strUrl.split("://");
    let ht1 = ht[0];
    let ht2 = ht[1];

    if(ht1 == "https"){
        return ht1 + "://secure." + ht2;
    } else if(ht1 == "http"){
        return ht1 + "://open." + ht2;
    }

}
console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));