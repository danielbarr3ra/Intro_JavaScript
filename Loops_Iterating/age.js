let rlSync = require('readline-sync')
let age = Number(rlSync.question("how old are you? "));
console.log(`You are ${age} years old.`)
for (let index = 1; index < 5; index++) {
  console.log(`In ${index*10}, you will be ${index*10+age} year old`);
}