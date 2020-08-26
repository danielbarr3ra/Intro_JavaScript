let rlSync = require('readline-sync');
//let fname = rlSync.question("What is your first name? ");
//let lname = rlSync.question("what is your last name? ");
//console.log(`Hello, ${fname+' '+lname}!`);

function giveName(prompt) {
  if (prompt ==='first name'){
    return rlSync.question(`What is your ${prompt}`);
  } else if (prompt === 'last name') {
    return rlSync.question(`what is your ${prompt}`) ;
  } else {
  }
}
//let fname = giveName('first name');
//let lname = giveName('last name');
//console.log(`Hello, ${fname+' '+lname}!`);

// too specific of a prompt solution should be something like
// this

//lot shorter
function getName(prompt) {
  let name = rlSync.question(prompt)
  return name
}
let fname=getName('what is your first name? ');
let lname=getName('what is your last name');
console.log(`Hello, ${fname} ${lname}`);