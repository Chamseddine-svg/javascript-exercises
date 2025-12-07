/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

const { firstName, lastName, thisYear, birthYear, greeting } = require("./joinStrings-example")

// Add your code right below, good luck!
lastName = "boukeri"
firstName = "ahmed"
let fullName = firstName + " " + lastName
thisYear = 2025
birthYear = 2000
greeting = "hello my name is " + fullName

console.log(greeting)
// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
