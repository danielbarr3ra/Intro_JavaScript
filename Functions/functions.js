
//function declaration!
greetPeople();

//a property of delcaration
// ist that you can call a function before declaring it
function greetPeople(){
  console.log('Good Morning');
  }

//function expression
//you are saving it to a variable so it is an 
//expression instad cannot invoke before it appaers
//in your program
let greeter=function () {
  console.log('hello there');
};
greeter();

/*
save the function (first class function) as a vraibal
you can pass them as argument to ther functions
and return them ffrom a function call.
any function that does not Function infront of it is an
expression even if its wrapped in parenthesis
*/
// also a function expression
(function greets(){
  console.log('good day')
})

function upgrater(name) {
  return function an_g(){
    console.log(`Hello ${name}`);
  }  
}

//arrow function
let arrowGreet = () => console.log('hello my goo');
arrowGreet();
/*
let arrowGreet = () => console.log('hello my goo');
arrowGreet();

let rlSync = require('readline-sync');
let adding = (a,b) => a+b;
let getNumber = text => {
  let input = rlSync(text);
  return Number(input)
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter number 2: ');
console.log(add(number2,number1));
not sure why the readline is not working
*/


