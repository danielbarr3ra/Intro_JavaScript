/*
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
 
1 because the second bar variable is locked in the function 
code block and thus the bar outside is a different scope

Compare this result to the following code:

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

in this case the bar is accesed inside the funciont block
code and it is reasigned and it is within the original bar
scope

2. check greeter.js
3. see multiply.js
4. see factorial
5.What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

return terminates the function before it gets logged
in console

6.What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
does not log anything but the value is mutated to
Yipeee!!!!
*/