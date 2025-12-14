const myText = "I am a string";
const newString = myText.replace("string", "sausage");

console.log(newString)
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string


const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


function myFunction() {
  console.log("hello");
}

myFunction();