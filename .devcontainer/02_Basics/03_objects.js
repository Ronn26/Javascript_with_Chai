//singleton
// Object.create

//Object literals
const mySym = Symbol("key1")

const JsUser ={
    name : "Roshan",
    "full name": "Roshan Chachire",
    [mySym] :"mykey1",
    age:22,
    location :"Nagpur",
    email:"roshanc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["location"])
// console.log(JsUser["full name"])
// console.log(JsUser["isLoggedIn"])
// console.log(JsUser["lastLoginDays"])
// console.log(JsUser[mySym])

JsUser.email ="roshan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="roshan@facebook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Front End");
}
JsUser.greeting2 = function(){
    console.log(`Hello Front End,${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greeting2());




