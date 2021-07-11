// 타입 추론 기본 1

// var a = 10

// function getB(b=10){
//     var c = 'hi'
//     return b + c
// }

// 타입 추론 기본 2
// interface dropDown <T> {
//     value: T;
//     title: string;
// }

// var shoppingItems: dropDown<string> = {
//     value:"hee",
//     title:"hello"
// }

// 타입 추론 기본 3
// interface dropDown <T> {
//     value:T;
//     title:string;
// }

// interface detailedDropDown<K> extends dropDown<K> {
//     description:string;
//     tag:K;
// }

// var detailedItems: detailedDropDown<string> = {
//     description:"hello",
//     tag:"tag",
//     value:"value",
//     title:"title"
// }

// // Best Common Type
// var arr = [1,2,true,'a']