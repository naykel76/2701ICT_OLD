class Person {
  name: string;
  age: number;
  constructor(name:string, age: number = 21) {
      this.name = name;

      this.age = age;

  }

}



var person:Person = new Person('Jill', 18);

console.log('Hello ' + person.name);
