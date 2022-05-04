"use strict";
const cars = ["Ford", "Mazda"];
const cars2 = ["Ford", "Mazda"];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 2000);
});
promise.then(data => console.log(data.toLocaleUpperCase()));
const mergeOjects = (a, b) => {
    return Object.assign({}, a, b);
};
const merged = mergeOjects({ name: "Alex" }, { age: 22 });
const merged2 = mergeOjects({ model: "X6" }, { make: "BMW" });
console.log(merged2.model);
console.log(merged.name);
const withCount = (value) => {
    return {
        value,
        count: `this object has ${value.length} symbols`
    };
};
console.log(withCount("Приет Медвед!"));
console.log(withCount(["apple", "pear"]));
console.log(withCount({ length: 133 }));
const getObjectValue = (obj, key) => {
    return obj[key];
};
const person = {
    name: 'Ivan',
    age: 23,
    job: 'developer',
};
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'job'));
const createAndValidateCar = (model, year) => {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
};
const week = ['Sunday', 'Monday', 'Thursday'];
console.log(week[1]);
const mercedes = {
    model: 'S-class',
    year: 2022,
};
console.log(mercedes);
