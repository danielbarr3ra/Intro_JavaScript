let rlSync = require('readline-sync');
let fname = rlSync.question("What is your first name? ");
let lname = rlSync.question("what is your last name? ");
console.log(`Hello, ${fname+' '+lname}!`);