interface User {
    age : number;
    name : string;
}

// 변수에 인터페이스 활용
let seho : User = {
    age : 33,
    name : "세호"
}

// 함수에 인터페이스 활용
const getUser = (user: User) => {
    console.log(user)
}
const capt = {
    name : "캡틴",
    age : 10
}
getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용  
interface sumFunction {
    (a: number, b: number): number
}

let sum1: sumFunction;
sum1 = (a: number, b: number): number => {
    return a+b
}

// 인덱싱 
interface StringArray {
    [index: number]: string
}

let arr: StringArray = ['a','b','c']
arr[0] = "c"

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

const obj: StringRegexDictionary = {
    cssFile : /\.css$/,
    jsFile : /\.js$/
}

// 인터페이스 확장
interface person {
    name: string;
    age: number
}

interface developer extends person {
    language: string
}

const wonjae: developer = {
    name : "캡틴",
    age : 25,
    language : "TS"
}