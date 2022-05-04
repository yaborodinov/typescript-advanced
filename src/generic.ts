const cars: string[] = ["Ford", "Mazda"];                    //массив строк 
const cars2: Array<string> = ["Ford", "Mazda"];               // идентично массив строк

// const promise = new Promise<string>(resolve => {           // variant 1
//     setTimeout(()=> {
//         resolve("promise resoved")
//     }, 2000)
// })

const promise: Promise<string> = new Promise(resolve => {         // variant 2
    setTimeout(()=> {
        resolve("promise resolved")
    }, 2000)
})


promise.then(data => console.log(data.toLocaleUpperCase()))





//   Example 1     =================================================================================

// const mergeOjects = (a: object, b: object) => {   
//     return Object.assign( {}, a, b)
// }

// const merged = mergeOjects({name: "Alex"}, {age: 22})
// console.log(merged.name);                                    // ошибка поля name. потому что оно не указано


// решение ==

// function mergeOjects<T, R> (a: T, b: R): T & R {                  // указываем generic типы
//     return Object.assign( {}, a, b)
// }

// const merged = mergeOjects({name: "Alex"}, {age: 22})
// const merged2 = mergeOjects({model: "X6"}, {make: "BMW"})
// console.log(merged.name);                                          // ошибка пропадает



// тоже самое но arrow function  =====

const mergeOjects = <T extends object/* мы явно указываем что наследуется для №3 */, R extends object> (a: T, b: R): T & R /* это возвращаемый тип */=> {                  
    return Object.assign( {}, a, b)
}

const merged = mergeOjects({name: "Alex"}, {age: 22})
const merged2 = mergeOjects({model: "X6"}, {make: "BMW"})
// const merged3 = mergeOjects("sdsd", {make: "BMW"})                // №3 в начале функции явно указали тип принимаемого параметра. Любой другой вызовет ошибки

console.log(merged2.model);           
console.log(merged.name);         




//     Example 2 ====================================================================================


interface ILength {          // интерфейс для того чтобы показать что есть поле length
    length: number
}

const withCount = <T extends ILength> (value: T): {value: T, count: string} => {
    return {
        value,
        count: `this object has ${value.length} symbols`                   
    }
}

console.log(withCount("Приет Медвед!"));
// console.log(withCount(23);                             // ошибка потому что number не имеет свойства length
console.log(withCount(["apple", "pear"]));
console.log(withCount({length: 133}));




// Example 3 ==================================================================================

const getObjectValue = <T extends object, R extends keyof T /* расширяем для ключей любых типов */> (obj: T, key: R) => {   
    return obj[key]
} 

const person = {
    name: 'Ivan',
    age: 23,
    job: 'developer',
}

console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'job'));





// функция с изначчально пустым объектом   ========================================================================

interface ICar {
    model: string,
    year: number,
}

const createAndValidateCar = (model: string, year: number): ICar => {
    const car: Partial<ICar> = {}                                                     //  "мы временно создаем объект и в нем временно не хватает ключей "

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year
    }
    return car as ICar                                                  // (as ICar) типа заглушки в этом случае "все хорошо" 
}


// сделать массив или объект только для чтения ==========================================================================================


const week: Readonly <Array<string>> /* readonly обертка */ = ['Sunday', 'Monday', 'Thursday'];

// week.shift()      // изменение массива не возможно

console.log(week[1])


// =====

const mercedes : Readonly <ICar> = {
    model: 'S-class',
    year: 2022,
}

// mercedes.model = 'Raptor';              // в режиме Readonly невозможно изменить значение ключа объекта
console.log(mercedes);
