const { maxHeaderSize } = require("http");

console.log('hello');
console.log("welocome to the class");
console.log(20+30)


//넓이와 둘레길이를 구하는 코드를 만드세요
let a = 11
let b = 7 
let Area = a * b
let Perimeter = 2 * ( a + b )

console.log("넓이는 " + Area + ", 둘레는 " + Perimeter)
// 표면적과 부피를 구하세요 

a = 20
let area = 6 * a ** 2
console.log(area)

let volume = a ** 3
console.log(volume)
//현재 속도 90 km/h mp/h 로 계산 mph = 0.6214*kmh

let kmh = 90
let mph = 0.6214 * kmh
console.log(mph)

let sky

console.log(sky) //undefined 데이터가 할당안되어있음

 
let ground = ""
console.log(ground) 

a = 75
b = 20

result = a + b 
console.log(result)

result = a - b
console.log(result)

result = a / b
console.log(result)

result = a % b //모듈로 나누기?
console.log(result)

result = a++ // a를 result에 저장하고 , a는 a에 1더하라 a = 75+1
console.log(result)
console.log(a)

result = b-- //b 를 result에 저장하고 ,b는 b에 1빼라 b = 20-1
console.log(result)
console.log(b)

result = ++a // a에 1을 먼저 더하라. a = a + 1
            // a를 result에 저장하라, result = a 
console.log(result)
console.log(a)

console.log( a == b )
console.log( a > b )

// a에는 3을 저장하고 , b에는 7을 저장하고 ,
// c에는 9를 저장하고 , d에는 10을 저장한다. 
// 한문장으로 쓰는것 a는 5보다 크고, b는 8보다 작냐 (and)
// 한문장으로 c가 7보다 크거나 ,d가 5보다 작냐(or)
 a = 3
 b = 7
 c = 9
 d = 10

 //console.log( a > 5 && b < 8 )
 // console.log( c > 7 || d < 5 )
// JAVA 기초 문법임
a = 75
b = 1220
// 삼항 연산자
console.log( a > b ? 500 : 900 )

if(a > b){
    console.log("A가 B보다 크다.")
}else{
    console.log("B가 더 크다.")
}

a = 100
if(a == 30){
    console.log("1.")
}else if(a == 50){
    console.log("2.")
}else{
    console.log("100.")
}

// 1번 학생의 점수가 83점 입니다. 
// 다음의 조건문을 작성하시오. 
//점수가 0보다 작거나 100보다 크면, "그런점수 없음"출력
//점수가 80 이상이면 "A학점입니다"출력
//점수가 80점 미만이면,"B학점입니다"

a == 83
if( a > 100 || a < 0 ){
    console.log("그런점수없음.")
}else if(a >= 80 ){
    console.log("A학점 입니다.")
}else if(a <= 80){
    console.log("B학점 입니다.")
}

//함수 functions 정의 

function addNum(a, b){
    let result = a + b
    return result
}
// 함수의 호출 fuction call
let ret = addNum(3, 4)
console.log(ret)

var addNum2 = function(a, b){
    let result = a + b
    return result
}

ret = addNum2(5, 6)
console.log(ret)

// es6 최신 자바스크립트 문법 es6 문법 집에서 확인해 보자
let addNum3 = (a, b) => {
    let result = a + b
    return result
}
ret = addNum3(10, 20)
console.log(ret)

// 객체 : 클래스가 메모리로 올라온 상태 

let cook = new Object();
cook.name = "홍길동"
cook.age = 27
cook.make = ()=>{
    return "빵을 만든다"
}
console.log(cook.name + "  " + cook.age + cook.make())
//JSON : Javascript object notation
let cook2 = {
    name : "김나나",
    age : 24,
    make : ()=>{
        return "한식을 만든다"
    }
}
console.log(cook2.name + "  " + cook2.age + cook2.make())

let football = {
    color : 'Blue'
    

}
// 자바에서 
//class football {
//    String color;
//    public football(){
//        color = "blue";
//    }
//}

// Array (배열) : 데이터를 여러개 ! 저장하기 위해서 사용. 

names[0]
names[1]
names[2]

console.log(names[0])
let employee = [
    {name : 'james', age :24},
    {name : 'John', age :25},
    {name : 'Michael', age :30}]
    

















