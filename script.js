function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.sayName = function () {
    console.log(name);
  };
}

const person1 = new Person("Mae", 29, "CSR");
const person2 = new Person("Ellen", 29, "Web Developer");

console.log(person1.sayName());
