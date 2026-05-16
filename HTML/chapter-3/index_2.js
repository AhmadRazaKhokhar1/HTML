const logger = (msg) => {
    console.log(msg)
}


const obj = {}
function calculateResult(obj) { }

/*
urdu 100/55    %Age: 55%.     Grade: D
english 100/66    %Age: 66%.     Grade: C
computer 100/88    %Age: 88%.     Grade: A
pak std 45/33    %Age: 73%.     Grade: B

Total 345/242 70.14% B
*/


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
