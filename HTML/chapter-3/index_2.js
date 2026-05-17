const logger = (msg) => {
    console.log(msg)
}


const obj = {}
function calculateResult(obj) { }

// Conditions in JS
/*
= Assignment operator e.g. const subj = "english"
== Double Equality Operator e.g. 5 == "5" ... 5 == "5" (Loose Equality Check)
=== Triple Equality Operator e.g. 5 === 5 ... 5 === "5" (Strict Equality Check)
*/

// Loose Equality (type can be different but the value should be same)
console.log(5 == 5, "Loose eq check")
console.log(5 == "53", "Loose eq check")
console.log(5 == "5", "Loose eq check")
console.log(true == "true", "Loose eq check")
console.log(true == true, "Loose eq check")

console.log('\n')

// Strict Equality (type and value should be same)
console.log(5 === 5, "Strict eq check")
console.log(5 === "53", "Strict eq check")
console.log(5 === "5", "Strict eq check")
console.log(true === "true", "Strict eq check")
console.log(true === true, "Strict eq check")




if (5 === 4) {
    logger("Condition has met")
} else {
    logger("Condition didn't met")
}
