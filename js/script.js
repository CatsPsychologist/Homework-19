function summo(){
    let counter = 0;

       return  function count (argument){
         counter += argument;
         return counter;

    }

    function reset(){
          return counter = 0
    }

    return{count,reset} ;

}

let sum = summo();

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
console.log(sum.reset())

function sum1(counter = 0;)


