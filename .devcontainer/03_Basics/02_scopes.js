let a =300
if(true){
    let a = 10
    const b = 30
    console.log("INNER: ",a);
}

console.log(a);
// console.log(b)
// console.log(c)

function one(){
    const username ="Roshan"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
// one()
if(true){
    const username = "Roshan"
    if(username === "Roshan"){
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++ intresting +++++++++++
console.log(addone(5))

function addone(num){
    return num+1
}


const addTwo = function(num){
    return num+2
}
addTwo(5)