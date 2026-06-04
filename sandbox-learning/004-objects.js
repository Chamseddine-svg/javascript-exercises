//////////////////////////////////////
//objects
//////////////////////////////////////

const personObject = {
    name : "person_1" ,
    'identification number' : 111, //use "" to have space in naming 
    date_of_birth : "11/05/1998" ,
    is_id_bigger_than_100(){
         console.log(100>this["identification number"] ? "Not greater than 100" : "yess its greater than 100")
    } , 
    is_is_pair(){
        return this["identification number"]%2===0 ? "yes pair" : "Not pair"
    }
}

console.log(personObject.name)  //person_1
console.log(personObject.is_is_pair())
console.log(personObject["identification number"])  //111
console.log(personObject.is_id_bigger_than_100())  //undefined  - console.log returns undefined
console.log("--------------------------------------------")



//////////////////////////////////////
//constructor
//////////////////////////////////////
function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() { //anounymous function
    console.log(this.name);
    return this.name
  };
  this.sayNameNamed = function sayName() {  // Named function
        console.log(this.name);
        return this.name;
    };

}

let player_1 = new Player('alex' , 5)
let player_2 = new Player('bexy' , 10)
console.log(player_1)  //{name: 'alex', marker: 5, sayName: [Function (anonymous)]}
console.log(typeof(player_1)) //object
console.log(player_1.sayName) //[Function (anonymous)]
//When you assign a function without a name to a property, it remains anonymous.
// The property name (sayName) is NOT the function's name.
console.log(player_1.sayNameNamed)
console.log("--------------------------------------------")


console.log(Object.getPrototypeOf(player_1) === Player.prototype) // returns true
console.log(Object.getPrototypeOf(player_2) === Player.prototype) // returns true
console.log(player_1.prototype)  // undefined since player_1 is instance not class or constructor
console.log(Object.getPrototypeOf(Player)) //[Function (anonymous)] Object 
console.log("--------------------------------------------")



//add method when using constructor functions  we access prototype and edit that new methode
Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player named " + this.name);
};
player_1.sayHello();
player_2.sayHello();

Object.getPrototypeOf(player_1).sayHello2 = function() {
  console.log('Hello second time ' + this.name )
}
player_1.sayHello2()
player_2.sayHello2()
console.log("--------------------------------------------")



// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player_1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

player1.hasOwnProperty("valueOf"); // false
Object.prototype.hasOwnProperty("valueOf"); // true

///////////////////////////////////////////////////////////////////
//prototype chain
player1.valueOf()
// JavaScript searches in this order:

// 1️⃣ Check player1 object itself for value of 

// 2️⃣ Check Player.prototype (player1's [[Prototype]])

// 3️⃣ Check Object.prototype (Player.prototype's [[Prototype]])

// 4️⃣ If still not found, check null (end of chain) → undefined
//Is the .valueOf function part of the player1 object? No, it is not. (Remember, only the name, marker and sayName properties are part of the Player objects.)
//Is the function part of the player1’s [[Prototype]] (the Object.getPrototypeOf(player1) value, i.e., Player.prototype)? No, only the .sayHello function is a part of it.
//Well, then, is it part of Object.getPrototypeOf(Player.prototype) (=== Object.prototype)? Yes, .valueOf is defined on Object.prototype!