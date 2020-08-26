// valid conditional statements
let x = 2

if (x===3) {
  console.log('x is 3');
}

if (x===3) {
  console.log('x is 3');
} else {
  console.log('x is not 3');
}

if (x===3) console.log("x is 3");

if (x===3)
  console.log('x is 3');
else
  console.log("x is not 3");


if (x===3){
  console.log('x is 3');
} else {
  if (x===4) {
    console.log('x is 4')
  } else {
    console.log('x is not 3 or 4')
  }
}

if (x===3) {
  console.log('x is 3');
} else if (x === 4) {
  console.log('x is 4');
} else {
  console.log('x is not 3 or 4')
}

/*
the brackets are called single
clause: blocks, statements, or
expression that execute
wehn the condition is tre.
when the condition is false, execution resumes with
the first expression after the if statement without
running the code inside the clause
*/

if (x === 3)
  console.log('x is 3');
  console.log('x is an odd number');// this line is NOT
  //Part of the CLUASE IS NOT PART OF THE CLAUSE


/*
strict equality operator
aka identity operator ===
same type and value

strick inequality !==
false when have same type and value
true otherwise, inverse of ===


non strinct equality
aka loose equalityoperator
== diferenty types, they are
cperced to one of the operands
and thus it is true
so 5=='5' is true

non strict inequality
!=
false when valeus are
are the same
5!=5 false
5!='5' false

avoid these and stick to === or !==

not operator
!true === false
!(4===4) false
!(4!==4) true

!!coerce non-bolean value into bolean

short ciruits && ||
work with truthiness too
the return value is always the value of the opperand
evaluated lastt 
3&&'foo'
='foo'

0&&'foo'
=0

'foo' || 0
='foo'

0||''
=''


truthiness
javascript coerse any value to boolean 

*/
let xi;

if (xi = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
/*
here the x variable is being assigned 5 in the expression
(x=5) is evaluated as bolean true since it is coerce

only the following are corce to false
false
0
-0
0n
'' empty string
undefined
null
NaN
everything else is evaluated as treu

precedence
comparasion
equlaity
logical and
logical or

ternary operator
? :
entire strutcture is an expression
so no return value
we can assign it to variable
(gets undefined in console)
*/
1==1? 'this is true' : 'this is not true';
1==1? 'this is true' : 'this is not true';

/*
switch statement
compares a single value agains multiple values for
strict equlaity

if statement can test multiple expressions wiht any
condition
without break the execution falls through the next case clause
fall throuhgs are apropriated in certain cases
*/
let a=5;
switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
}
//good use of fallthrough

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}