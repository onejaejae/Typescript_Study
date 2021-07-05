// ES2015 (ES6)
class Person {
  constructor(name, age) {
    // 클래스 로직
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 24);
console.log(seho);
