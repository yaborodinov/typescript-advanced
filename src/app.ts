console.log('app.ts');
console.log('TS compiler watch');

class Person {
    constructor(private name: string) {}
}

const max = new Person("Maxim");

const button = document.getElementById('btn')!;

console.log(button);

button.addEventListener('click', ()=> {
    const book = "green";
    console.log('clicked');
    
})

const map = new Map();



// ====
function toDo (a: number, b: number) {
    if(a && b) {
    return a * b
    }
    return
}
