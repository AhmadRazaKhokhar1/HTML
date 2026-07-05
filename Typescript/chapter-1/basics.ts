const studentName:string = "Ahmad";
const age:number = 12;
const date:Date = new Date();
const functionAbc = (name:string, age:number, isAdult:boolean) => {
    return `Name:${name}\n Age:${age}\n ${isAdult?"Is An Adult":"Is Under Aged"}`
}
const canMakeJuice:boolean = true
console.log(studentName)


const outputOfFunctinoAbc = functionAbc("Ahmad", 23, true);

console.log(outputOfFunctinoAbc);

class ABC {
    private num:number;
    public age: number; 
    constructor(num:number, age:number) {
        this.num = num;
        this.age = age;
    }
}