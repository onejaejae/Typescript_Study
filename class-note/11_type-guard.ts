// interface Developer {
//     name : string;
//     skill: string
// }

// interface Person {
//     name: string;
//     age: number;
// }

// function introduce(): Developer | Person {
//     return { name : "wonjae", skill : "ts", age:20}
// }
// var tony = introduce()
// console.log(tony.name)

// function isDeveloper(target: Developer | Person): target is Developer{
//     return (target as Developer).skill !== undefined;
// }

// if(isDeveloper(tony)){
//     console.log(tony.skill)
// }else{
//     console.log(tony.name)
// }