export default class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

export function printName(person) {
    console.log(person.name);
}

export function printAge(person) {
    console.log(person.age);
}