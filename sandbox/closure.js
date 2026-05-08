function outer(){
    const outerVar = "Hey I am outer var"
    function inner(){
        const innerVar = "Hi I am inner var"
        console.log(innerVar)
        console.log(outerVar)
    }
    return inner
}

const innerFn = outer()

console.log(innerFn())

//other examples
function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}