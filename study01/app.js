console.log("Study01 Javascript 시작!");

//node .\study01\app.js

var 정수 = 1;

let 조각 = 2;
const 상수 = 3;

//스크립트 메소드
function print(){
    console.log("출력");
}

//print(); //프린트 메소드 실행 //스크립트는 오버로딩 기능 없음

function print(a){
    return a;
}

//console.log(print(정수)); // 결과 : 1

a = "값";

//console.log(a);

class Test{
    b = 1;
    #c = 2;     //# = private 접근제한자
    constructor(a){
        this.a = a;
    }
}

const test = new Test("이름");
//console.log(test,test.a)

const test2 = {
    a : 1,
    b : 2,
    c : "삼"
};
//console.log(test2 , test2.c,test2.a);

//console.log(test,test2);

for(a in test2){
   // console.log(a,test2[a]);
}

var {b} = test2;
//console.log("해당변수명",b);

var {b:다른이름} = test2;
//console.log("다른 변수명",다른이름);

for(c in test){
    //console.log("클래스 객체",test.b,test.a);
}

var{b} = test;
//console.log("test",b);
var{a} = test;
//console.log("test",a);

const test3 = {};


test3.a = 1;
test3.b = 2;
//console.log(test3);

const test4 = test3;
const test6 = {};
const test5 = {...test3 , ...test6};

//console.log(test4,test5,test5.a);


function fn1(){
    console.log("fn1");
}

const fn2  = function(){
    console.log("fn2");
}

const fn3 = () => {
    console.log("fn3");
}
const fn4 = () => console.log("fn4");
/*
fn1();
fn2();
fn3();
fn4();
*/

function fn5(fn){ //함수 변수를 매게변수로 받을수 있음. (콜백함수)
    fn(); //함수 호출
}
//fn5(fn1);

fn5(() => {
   // console.log("콜백 함수 내용");
});

const crud = {
    select: () => {
        console.log("select")
    },
    insert: () => {
        console.log("insert")
    },
    udate: () => {
        console.log("udate")
    },
    delete: () => {
        console.log("delete")
    },
    selectList: () => {
        console.log("seletList")
    }
      
}

crud.select();
crud["select"]();