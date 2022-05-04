// Декораторы - один из паттернов проектирования

function Log(constructor: Function) {
    console.log(constructor);
    
}

function Log2(target: any, propName: string | Symbol){
    console.log(target);
    console.log(propName);
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Log3', target);
    console.log('Log3', propName);
    console.log('Log3', descriptor);
}

@Log
class Component {

    @Log2                         // применение декоратора
    name: string

    @Log3
    get componentName() {
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }

    @Log3
    logName(): void {
        console.log(`Component name ${this.name}`);
        
    }
}



//  Example 1 ====================================================================