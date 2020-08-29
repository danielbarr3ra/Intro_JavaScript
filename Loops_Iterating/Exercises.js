//1. check age.js
//2.
function factorial(number){
  if (number <= 1) return 1;
  return factorial(number-1)*number
}
for (let index = 0; index < 8; index++) {
  console.log(factorial(index));
}
/*3.
The following code causes an infinite loop
 (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
 the (exprssion) is assignig
 the counter a new value it is NOT
 a logical statemnet
it is seen as truthy
inside the block the value is increase to 2
once the loop is completed the counter is set to
1 once again

//4. Does the following code produce an error? Why or
 why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}
no error the 3 par are optional and
the increment is set up in the for bloc

for (let i=0;;) {
  if (i>5) {
      break;
    } 
  else {
      console.log(i+=1)
    }
}
preferebly set the variables within the 
for block scope to avoid issues

//5
The following code uses a randomNumberBetween function
to generate a number between its first and second arguments.
It uses a while loop to try to generate a number greater 
than 2. Refactor the code so that you don't need to call 
randomNumberBetween from two different locations, lines 67
and 71. Do not change the arguments you pass to 
randomNumberBetween.


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
Solution
*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries=0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1
} while (result <=2);

console.log('It took ' + String(tries) + 
' tries to get a number greater than 2');
