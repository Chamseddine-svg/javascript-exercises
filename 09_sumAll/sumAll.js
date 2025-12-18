const sumAll = function(a , b) {
    let sum = 0
    if(typeof(a) =='number' && typeof(b) == 'number'){
        for (let i = a ; i <=b ; i++){
            sum+=i
        }
        return sum  
    }else{
         return "Error"
    }

};

// Do not edit below this line
module.exports = sumAll;
