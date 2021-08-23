// function summo(){
//     let counter = 0;
//
//        return  function count (argument){
//          counter += argument;
//          return counter;
//
//     }
//
//
// }
//
// let sum = summo();
//
// console.log(sum(3))
// console.log(sum(5))
// console.log(sum(20))


function closure(staticNumber = 0, step = 1){
    let number = staticNumber;

    function counter(){
        return  number += step;
    }
    function reset(){
        return  number = 0;
    }


    return {counter, reset};
}

let count = closure();
let count1 = closure(2,3)
let count2 = closure(4,5)



console.log(count1.counter());

console.log(count1.counter())
count1.reset();
console.log(count1.counter())

count2.counter();
console.log(count2.counter());













