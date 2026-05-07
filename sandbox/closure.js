function outer(){
    const outerVar = "Hey I am outer var"
    function inner(){
        const innerVal = "Hi I am inner var"
        console.log(innerVar)
        console.log(outerVar)
    }
}