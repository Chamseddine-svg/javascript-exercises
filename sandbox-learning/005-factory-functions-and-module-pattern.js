//constructor :
function user(name){
    this.name = name
    this.userName = name + '@User'
}

const user1 = user('alex') //undefined 
const user2 = new user('beta')  //user { name: 'beta', userName: 'beta@User' }

//factory function :
function userFactory(name){
    const userName = name + '@@user'
    return {name , userName}  // {short form of object ifff arg and variable name are the same in the function}
}                             // console.log({ name, age, color }) to see name:name 

const user3 = userFactory('Adolf')  //{ name: 'Adolf', userName: 'Adolf@@user' }

//Private variables and functions :

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;     
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});

/* {
  name: 'josh',
  discordName: '@josh',
  getReputation: [Function: getReputation],
  giveReputation: [Function: giveReputation]
} */

// reputation is private variable not accessible in josh element
//usage:
//In this case, we did not need control of the reputation variable itself.
//To avoid foot guns, like accidentally setting the reputation to -18000,
//we expose the necessary details in the form of getReputation and giveReputation


//Prototypal inheritance with factories:
//needs more metric for player from createuser fn
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);
//manual propreties selected from createuser equivalent of :
//const getReputation = user.getReputation;
//const giveReputation = user.giveReputation;
  const increaseLevel = () => { level++; };
  return { name, getReputation, giveReputation, increaseLevel };
}



function createPlayer(name, level) {
  const user = createUser(name);  
  //create full obj user all properties

  const increaseLevel = () => { level++; };
  return Object.assign({}, user, { increaseLevel });
}


//Destracting : creating variable from object properties
const obj = { a: 1, b: 2 }; //objects
// equivalent of doing
// const a = obj.a;
// const b = obj.b;
const { a, b } = obj;


const array = [1, 2, 3, 4, 5]; //arrays
// equivalent of doing
// const zerothEle = array[0];
// const firstEle = array[1];
const [zerothEle, firstEle] = array;


//The module pattern :
//IIFEs : Immediately Invoked Function Expressions
/* 
Usage:
create function and call it with no name
so its not scooped so it stay privet 

This is a function expression
() => console.log("foo");

The function expression is now an IIFE!
(() => console.log("foo"))();
 */


