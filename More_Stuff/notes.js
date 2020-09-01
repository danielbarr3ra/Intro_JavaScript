/*
pointers and references
term used interchangiable in java

variables that
hava a primitive value store those values
in the variable
when you assign a new value to a variable
javascript changes the varaible's content to the new
value. theat a simple operation
that doesnt affect other variables even those with
same value

if its an object, mutating it will
change all the aliases that the object is being pointed by


The takeaway of this section is that JavaScript stores 
primitive values in variables, but it uses pointers 
for non-primitive values like arrays and other objects. 
Pointers can lead to surprising and unexpected behavior 
when two or more variables reference the same object in 
the heap. Primitive values don't have this problem.

When using pointers, it's also important to keep in mind
that some operations mutate objects, while others don't.
For instance, push mutates an array, but map does not. 
In particular, you must understand how something like 
x = [1, 2, 3] and x[2] = 4 differ: both are reassignments, 
but the second mutates x while the first does not.


Method Chaining
you can call a method on the returnvalue of another methd

Regex
regular expression
A regular expression—a regex—is a sequence of characters 
that you can use to test whether a string matches a given 
pattern. They have a multitude of uses:

> /o/.test('bobcat')
= true

> /l/.test('bobcat')
= false
*/

if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}

/*
// No match
> "bobcat".match(/x/)
= null

// Global match
> "bobcat".match(/[bct]/g)
= [ 'b', 'b', 'c', 't' ]

// Singular match with groups
> "bobcat".match(/b((o)b)/)
= [ 'bob', 'ob', 'o', index: 0, input:
 'bobcat', groups: undefined ]

 function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // We have a match! a,e,a
has_a_or_e("football");   // We have a match! a
has_a_or_e("hockey");     // We have a match! e
has_a_or_e("golf");       // No match here.

try to use test since mathc generates information above
and beyond simple boolean value

g flag passed to the regex; JavaScript is going to look
for every match in the string. However, test only 
consumes one of the matches at a time.


Math Object
have some functions and predetrmined variables

DATES
javascript has Date constructor crates objects that represent
time and date
.getDay()method gets the date of the week 0-6 (sun-sat)


Exceptions
try/catch
catch block ir sun when an error is raised
The throw keyword raises an exception of the type specified 
as an argument, which is usually given as new followed by 
one of the Error types described on this page. In this 
case, we use a TypeError to indicate that we were expecting 
a different type for the number argument.


A SyntaxError is special in that it occurs immediately 
after loading a JavaScript program, but before it begins 
to run.
cant use try/catch

stack trace it reports the type of error occured
The takeaway is that JavaScript uses it to display the 
stack trace when an exception occurs. Knowing how to use 
this information is invaluable when you have to debug a 
program.
*/