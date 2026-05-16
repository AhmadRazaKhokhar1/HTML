

console.log("======== Start OF TERM ======")

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


console.log("======== END OF TERM ======")

// Type conversion (Manually)
// String to Number
let s = "undefined";
console.log("before conversion", s, typeof s)

let n = Number(s);  // Converts string to number
console.log("after conversion", n, typeof n);

console.log("\n")

// Number to String
let s2 = 123;
console.log("before conversion", s2, typeof s2)

let n2 = String(s2);  // Converts string to number
console.log("after conversion", n2, typeof n2);


// String to Boolean
let s3 = "true";
console.log("before conversion", s2, typeof s2)

let n3 = Boolean(s2);  // Converts string to number
console.log("after conversion", n2, typeof n2);