"use strict";
console.log('app.ts');
console.log('TS compiler watch');
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person("Maxim");
const button = document.getElementById('btn');
console.log(button);
button.addEventListener('click', () => {
    const book = "green";
    console.log('clicked');
});
const map = new Map();
function toDo(a, b) {
    if (a && b) {
        return a * b;
    }
    return;
}
