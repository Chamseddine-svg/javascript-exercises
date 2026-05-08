const Formatter = (function(){
    let timerun = 0
    
    const log = (message)=> console.log(`[${Date.now()}] Logger : ${message}`)

    const makeUpperCAse = (text) => {
        log ('Making upper case')
        return text.toUpperCase()
    }

    const setTimeRun = () =>{
        log('setting times running')
        ++timerun
    }
    return {
        makeUpperCAse,
        timerun,
    }


})()

Formatter.makeUpperCAse('hello')  //output : cannot read properties of undefinend log make upper case without the return
//to solve this we return functions and the stuff we want to be accessible and return objct  return {...}to have as many as we want ecause return return only one thing 
//as used in factory functions to hide code and return what needed
//IIFE runs once at creation no longer exist only returned stuff do

console.log(Formatter.makeUpperCAse('testing'))
console.log(Formatter.timerun)

//////////////////////////////Declaring module dependencies
const documentMock = (() => ({          //facke dom : moc nodejs no dom tests no doom vs no doom
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Formatter = (function(doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  }

  return {
    makeUppercase,
    writeToDOM,
  }
})(document || documentMock);
// IIFE runs once immediately and creates a private scope.
// `doc` is injected from outside:
// - in browser => real document
// - in testing/node => documentMock
//
// Functions inside the module keep access to `doc` through closure.
//
// Only returned methods are public:
// - makeUppercase
// - writeToDOM
//
// Private helpers like `log` stay inaccessible outside the module.

