// function logText(text){
//     console.log(text)
//     return text
// }

// logText(10)
// logText("hello")

// function logText<T>(text:T):T {
//     console.log(text)
//     return text
// }

// logText<string>("10")

// function logText(text:string){
//     console.log(text)
//     return text
// }

// function logNumber(num:number){
//     console.log(num)
//     return num
// }

// logNumber(12)

// function logText(text: string | number){
//     console.log(text)
//     return text
// }

// const a = logText('hello')
// logText(10)

// function logText <T>(text:T):T{
//     console.log(text)
//     return text
// }

// const str = logText<string>("hello")
// str.split("asd")

// 인터페이스에 제너릭을 선언하는 방법
// interface dropDown{
//     value: string;
//     selected:boolean
// }

// const obj:dropDown = {value : 10, selected:true}

// interface dropDown<T> {
//     value : T;
//     selected:true
// }

// const obj:dropDown<number>= { value:10, selected:true}

// 제너릭의 타입 제한
// function logTextLength<T>(text:T[]): T[] {
//     console.log(text)
//     return text
// }
// logTextLength<string>(["asd","SAd"])

// interface LengthType {
//     length:number
// }

// function logTextLength<T extends LengthType>(text:T):T{
//     text.length
//     return text
// }


// logTextLength("a")

// 제너릭 타입 제한 3 - keyof

