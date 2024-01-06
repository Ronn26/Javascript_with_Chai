const name ="Roshan"
const repoCount = 40

// console.log(name + repoCount +"Chachire");

console.log(`My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Rosh-anC')
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Roshan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://roshan.com/roshan@#Chachire"
console.log(url.replace('@#','_'));

console.log(url.includes('Rohit'));

console.log(gameName.split('_'));