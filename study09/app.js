/***************************************************
 * 비동기 통신 방법 (Ajax)
 * https://www.w3schools.com/js/js_ajax_intro.asp
 ***************************************************/
import { $async, $get } from "./ajax.js";
/* 
// data=>console.log(data.response);
const event1 = data => {document.getElementById("menu1").innerHTML = data.response;}
const event2 = data => {document.getElementById("menu2").innerHTML = data.response ;}
const event3 = data => {document.getElementById("menu3").innerHTML = data.response ;}
const event4 = data => {document.getElementById("menu4").innerHTML = data.response ;}
//$async("GET" ,"./html/menu1.html" , {} , event1);
//$get("./html/menu1.html" , {} , event1);


 document.getElementById("event1").onclick = () => $get("./html/menu1.html" , {} , event1);
 document.getElementById("event2").onclick = () => $get("./html/menu2.html" , {} , event2);
 document.getElementById("event3").onclick = () => $get("./html/menu3.html" , {} , event3);
 document.getElementById("event4").onclick = () => $get("./html/menu4.html" , {} , event4); */

 const a = document.getElementsByClassName("가져오기");
 const d = document.getElementsByClassName("지우기")
 for(let tag of a){
    // console.log(tag, tag.id, tag.hash,tag.hash.substring(1));
     const event = data => document.getElementById(tag.hash.substring(1)).innerHTML = data.response
        tag.onclick = () => {
            let page = Number(tag.hash.substring(5)) - 1;
            let url = `http://lh/html/${page}`; // 스프링주소
            //`./html/${tag.hash.substring(1)}.html` //전주소
            $get(url,{},event);
        }
 }
 for(let tag of d){
    // console.log(tag, tag.id, tag.hash,tag.hash.substring(1));
     const event = data => document.getElementById(tag.hash.substring(1)).innerHTML = ""
        tag.onclick = () => {
            let page = Number(tag.hash.substring(5)) - 1;
            let url = `http://lh/html/${page}`; // 스프링주소
            //`./html/${tag.hash.substring(1)}.html` //전주소
            $get(url,{},event);
        }
 }
