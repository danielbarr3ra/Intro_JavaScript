let rlSync = require('readline-sync');
/*
built in rqurie fucntion to import realinde-sync
with variable name rlSync object
then use the method .question()
and then assign the string name
*/
let name = rlSync.question('Whats your name?\n');
console.log(`Good Morning ${name}!`)