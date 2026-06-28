// recursion
let count = 0;
function countToTen(){
    console.log(count)
    
    if(count !== 10 || count < 10){
        count += 1;
       countToTen()
    }
}

countToTen();

console.log("next function execution..");

// closure
function incrementPreviousCounter(){
    let counter =0;
    return function(){
        return counter +=1;
    }
}

const increment1 = incrementPreviousCounter();

console.log(increment1())
console.log(increment1())

console.log("exec 1 ========")

const increment2 = incrementPreviousCounter();

console.log(increment2())
console.log(increment2())

console.log("exec 2 ========")

console.log(increment1())