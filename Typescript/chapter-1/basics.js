"use strict";
const studentName = "Ahmad";
const age = 12;
const date = new Date();
const functionAbc = (name, age, isAdult) => {
    return `Name:${name}\n Age:${age}\n ${isAdult ? "Is An Adult" : "Is Under Aged"}`;
};
const canMakeJuice = true;
console.log(studentName);
const outputOfFunctinoAbc = functionAbc("Ahmad", 23, true);
console.log(outputOfFunctinoAbc);
class ABC {
    num;
    age;
    constructor(num, age) {
        this.num = num;
        this.age = age;
    }
}
