// const person = {
//     name: "John",
//     age: 30,
//   };
  

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   const person = new Person("John", 30);
// /  

const person = Object.create(null);
person.name = "John";
person.age = 30;



class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person = new Person("John", 30);
  
