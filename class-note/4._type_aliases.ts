interface person {
    name:string,
    age: number
}

type Person2 = {
    name:string,
    age:number
}

let Seho:person = {
    name: "wonjae",
    age:25
}

let SSeho:Person2 = {
    name: "wonjae",
    age:25
}

type MyString = string
const str:MyString = "123"

type toDo = {id:string; title:string; done:boolean}
function getToDo(todo:toDo){}