interface User {
    age:number;
    name:string;
}

// 변수에 활용하는 인터페이스
const seho: User ={
    age : 10,
    name:"세호"
}

// 함수에 인터페이스 활용
function getUser(user:User){
    console.log(user)
}

const capt = {
    age:10,
    name:"wonjae"
}
getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a:number, b:number):number;
}

let sum:sumFunction
sum = function(a:number, b:number):number {
    return a+b
}

sum(1, 2)

// 인덱싱
interface StringArray {
    [index:number]: string
}

let arr:StringArray= ['a','b','c']
arr[0] = '1'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string]: RegExp;
}

let obj:StringRegexDictionary = {
    cssFile:/\.css$/,
    jsFile:/\.js$/
}

Object.keys(obj).forEach((value) => {})

// 인터페이스 확장
interface Person {
    age: number,
    name:string
}

interface Developer extends Person {
    skill:string
}

let captin: Developer = {
    skill : "node",
    name:"wonjae",
    age:25
}