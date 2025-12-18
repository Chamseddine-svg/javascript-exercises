const reverseString = function(str) {
    let arr = str.split("")
    let reversedArr = []
    let len = arr.length
    for(let i = 0 ; i <= arr.length-1 ; i++){
        reversedArr[i] = arr[arr.length-1-i]
    }
return reversedArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
