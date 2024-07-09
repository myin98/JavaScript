
/* >함수 4개 만들기 : 더하기,빼기,나누기,곱하기
>문제 : 두개의 정수의 변수를 받아 함수를 실행하기. */

//1. 두개의 정수값 변수
var a = 10;
var b = 2;


//2. 함수 4개 만들기
const carl = {
    plus: () => {
        console.log(`${a} + ${b} = ${a+b}`)
    },
    minus: () => {
        console.log(`${a} - ${b} = ${a-b}`)
    },
    multi: () => {
        console.log(`${a} * ${b} = ${a*b}`)
    },
    divid: () => {
        console.log(`${a} / ${b} = ${a/b}`)
    }
}

//3. 각각 함수 4개 호출하여 결과값 출력하기

carl.plus();
carl.minus();
carl.multi();
carl.divid();