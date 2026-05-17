

logger("======== Start OF TERM ======")

function getTypeOfValue(valueToGetTypeOf){
    logger(valueToGetTypeOf)
    const logMsg = `Its a ${typeof valueToGetTypeOf}`
    logger(logMsg)
}

const value = undefined; 
// Else-If chain
if(typeof value === "string"){
    getTypeOfValue(value)
}
else if(typeof value === "number"){
    getTypeOfValue(value)
}
else if(typeof value === "object"){
    getTypeOfValue(value)
}
else{
    logger("Its outside our difined types")
}


logger("======== END OF TERM ======")
// Type conversion (Manually)
// String to Number
logger("String to Number")
let s = "2"

logger(`before conversion ${s} is ${typeof s}`)

let n = Number(s);  // Converts string to number
logger(`after conversion ${n} is ${typeof n}`);

logger("\n")

// Number to String
logger("Number to String")
let s2 = null;
logger(`before conversion ${s2} is ${typeof s2}`)

let n2 = String(s2);  // Converts string to number
logger(`after conversion ${n2} is ${typeof n2}`);
logger("\n")


// String to Boolean
logger("String to Boolean")
let s3 = "true";
logger(`before conversion ${s3} is ${typeof s3}`)

let n3 = Boolean(s3);  // Converts string to number
logger(`after conversion ${n3} is ${typeof n3}`);
logger("\n")

// Dynamic Strings
console.log("this is s3:%s and this is n3:%s", s3, n3)
console.log("before conversion %s is %s", s3, typeof s3)


console.log("Spreading Objects in JS:\n")

const obj1 = {
name:"ahmad",
class:12
}

const obj2 = {
grade:"B",
city:"Lahore"
}

const combinedObject = {
...obj1,
...obj2
}
console.log(combinedObject, "\n")

console.log("Spreading Arrays in JS:\n")
const arr1 = ["A","B","C"];
const arr2 = ["D","E","F"];

const combinedArr = [...arr1, ...arr2]

console.log(combinedArr)