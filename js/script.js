function summo(){
    let counter = 0;

      return function count(argument){
         counter += argument;
         return counter

    }

}

let sum = summo();

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))

