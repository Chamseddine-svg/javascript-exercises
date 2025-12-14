const repeatString = function(string,times) {
    let finalString=""
    if (times <= 0){
        return "Enter positive number grater than 0"
    }else{
        for (let i=1;i<=times;i++){
            finalString += string
        }
    return finalString
    }
};

// Do not edit below this line
module.exports = repeatString;
