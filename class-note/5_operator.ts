function logMessage(value:any){
    if(typeof value === "string"){
        value.toString()
    }
}

logMessage("hello")
logMessage(10)

function logMMessage(value: string | number){
    if(typeof value === "number"){
        value.toLocaleString()
    }
    if(typeof value === "string"){
        value.toString()
    }

    throw new TypeError('value must be string or number')
}

logMMessage("hello")
logMMessage(20)

interface Person3 {
    name:string,
    age:number
}

interface developer {
    name:string,
    skill:string
}

function askSomeone(someone: Person3 | developer){
    someone.name
}

function askSomeone2(someone: Person3 & developer){
    someone.age
    someone.name
    someone.skill
}

askSomeone({name:"wonjae", age:25})
askSomeone({name:"wonjae", skill:"node"})

askSomeone2({name:"wonjae", skill:"node", age:25})