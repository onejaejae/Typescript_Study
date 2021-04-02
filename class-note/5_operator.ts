const logMessage = (value: string) => {
    console.log(value)
}
logMessage("hello")

const logMessage2 = (value: string | number) => {
    if(typeof value === "number"){
        // 이 시점에서는 value의 type을 number로 인식하여 number와 관련된 method를 제공해준다
        // 이것이 union을 사용했을 때 장점이다
        value.toLocaleString()
    }
    if(typeof value === 'string'){
        value.toLocaleLowerCase()
    }
    throw new TypeError('value must be string or number')
}
logMessage2("hello")
logMessage2(10)

interface Person {
    name : string;
    age : number;
}

interface Developer {
    name : string;
    skill : string;
}

const askSomeone = (someone: Person | Developer) => {
    // 타입가드 밖에서는 공통된 특성만 사용가능하다
    someone.name = "원제"
}

const askSomeone2 = (someone: Person & Developer) => {
    someone.name = "wonjae"
    someone.age = 25
    someone.skill = "TS"
}

