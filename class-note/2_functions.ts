// 함수의 파라미터의 타입을 정의하는 방식
// const sum = (a:number,b:number) => a+b
// sum(10,20)

// 함수의 반환 값의 타입을 정의하는 방식
const add = ():number=> 10

// 함수의 타입을 정의하는 방식
const sum = (a:number, b:number):number => a+b

sum(10,30)

// 함수의 옵셔널 파라미터
const log = (a:string, b?:string) => {
    console.log(a,b)
}

log("hello world")
log("hello world", "abc")