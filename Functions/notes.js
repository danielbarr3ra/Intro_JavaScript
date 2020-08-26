/*
there is a function body associated with it after {}

you pass arguments into the function
inside ( parameters )
the arguments are the values of those parameters

function names and parameters are also considered 
variables

invoke=call invoking=callling


retrun values:
all calls evelauate to a value, the default is undefined
when you use the return statem you speficy a specific value

returning evaluates the experssion, terminates function
and returns the expressions value location were we called
it.

the code that calls the function is called a caller.
predicates functions that call true or false

default parameters just add an equal sign to the 
parameter when setting up the function
*/
function say(words='hello'){
  console.log(words+'!');
}
/*
nested function
aka private functions since they are out of the scope
when trying to run it outside of the parent function block
*/
function foo() {
  function bar() {
    console.log("BAR");
  }
  bar();
  bar();
}

foo();
//bar(); wont work here

//variable scope
/* 
local vas global
global all thorughout the program,
local are confined to a function
keyword and location of declaration
tell you the scope.
let and const
*/

//function vs methods
/*
method invocation is when you have to prepend a variable
to the function being invoced through a .
not an easy way to determine wehter you need
to use a function or method call, you must read the
documentation

mutating the caller
the pop() method removes an element of array
and the change is destructive (permanent)

some fnction can mutate their arguments!
*/
function changeFirstElement(array) {
  array[0]=9;
}

let onetofive=[1,2,4,5];
changeFirstElement(onetofive);
console.log(onetofive);

// some dont alter argument
function addToArray(array){
  return array.concat(0);
  //creates copy of array and mutates the copy
}
let onetosix=[1,2,3,4,5,6];
console.log(addToArray(onetosix));
console.log(onetosix);

/*
muatation is a concern when dealing with arrays
and objects, but not with primiteve values
like numbers, strings, and booleans.
primitvie vales are immutable,
opeartoin on mutable values (arrays and objects)
may or may not return mutated data 
not an easy way of telling tho gotta memorize it :(
*/

function add(a,b){
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

//let sum = add(20,45);
//console.log(sum);
console.log(add(20,45));

//let difference = subtract(80,10);
//console.log(difference);
console.log(subtract(80,10));

//using function composition a function becomes an
//argument

//Function declaration
//call it before you declare it O.o
function a_name(arguments) { 
  //body
  return arguments
}

//Function expression;
let greet=Poeple=function(){
  console.log('Good Morning');
};
greetPeople();