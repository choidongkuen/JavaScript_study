// 변수 선언 및 할당 
let language = 'JavaScript'

// 재할당
language = 'js'

// 출력
// console.log(language);

// 복합 할당 연산자
// let count = 0;
// count += 1;

// 변수에 대한 탐구
// <변수의 선언 및 재할당의 측면>
// 변수형에는 var,let,const 3가지가 존재
// 1. var : 중복 선언 o, 재할당 o
// 2. let : 중복 선언 x, 재할당 o
// 3. const : 중복 선언 x, 재할당 x

// <변수의 스코프의 측면>
// function-level scope : 함수레벨스코프
// block-level scope : 블록레벨스코프
// var : 함수레벨스코프
// let,const : 블록레벨스코프


// 값
// 원시 타입(Primitive Type)
// 문자열
// 숫자
// 심볼
// 불리언
// undefined

// 객체 타입(Reference Type)
// 객체

// 1. 문자열 
// " " or ' ' 가능하다.
var firstStr = "이것도 문자열입니다.";
var secondStr = '이것도 문자열입니다.';
var thirdStr = "나의 이름은 '홍길동' 이야.";

// 자바스크립트에서는 숫자와 문자열을 더할 수 있다.
var num = 10;
var str = "JavaScript";
// document.getElementById("result").innerHTML = (num + str); => HTML에서 실행

// 2. 숫자형
var firstNum = 10;
var secondNum = 10.00;
var thirdNum = 10e6;
var fourthNum = 10e-6; 

// 3. 심볼
var sym = Symbol("javascript"); // symbol 타입
var symObj = Object(sym); // Object 타입

// 4. 불리언
var bool = true;

// # typeof 연산자
// Html에서 구현해보기  
