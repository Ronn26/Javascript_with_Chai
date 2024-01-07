// function sayMyName(){
//     console.log("R");
//     console.log("o");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("n");
// }
// sayMyName()

// function addTwoNumbers(number1 ,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 ,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(4,5)
// console.log("Result:",result);

function loginUserMessage(username ="ronny"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Roshan"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(100,300,500,6000))
const user ={
    username :"Roshan",
    prices : 499
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
handleObject({
    username :"ronny",
    price :299
})

const myNewArray = [200,400,50,700]
function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,300,1500]));










