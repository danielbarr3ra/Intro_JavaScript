/*
primitive data types

string-list of characters on specific sequecne
  be ware of double and single quotes
  you can use the scape character \
  
  template literals
  use the backtil and enclose code in ${ code }
  enables string interpolation

number- all kinds of numbers, no floating, no fixed
  point no integers they are all the same
  (real numbers at least)

undefined-absence of a value

null-intentional absence of value

bolean-true false

ES6
symbol and bigInt

type of operator:
*/
typeof 1;
typeof 'foo';
typeof true;
typeof undefined;
typeof null;
/*
why is it an object?
this is an error and cant fix it since it would break
subsequent code
Operators you know this


NaN not a number 0/0 ex.
NaN type is anumber

YOU CANT COMPARE NaN to ITSELF
*/
let value = NaN;
value === NaN;
NaN === NaN;

//you should use Number.isNaN or Object.is
let bvalue = NaN;
Number.isNaN(bvalue);

Object.is(bvalue,NaN);

/*Infinity
it will show up if you divie 1/0
inf*inf=inf
inf+inf=inf
inf-inf=inf
inf/inf=NaN !!!!!!!!
number/inf = 0

 but -1/0= -inf
*/

//concatanation
'foo'+'barr'
//'foobar'

'1'+'2'
//12

'1'+2
//'12'
/* it coerces the 2 into a string
then concatanets the ruslt
IMPLICIT TYPE COERCION */
'5'-3
//2
//beware of coercion
//explicit you gootta inclued the converison of the type
// into before dodoing the coercion
Number('1')
//1
Number('foo')
//NaN

parseInt('12')
//12
//it will stop converting when a nonnumeric character
//shows up
parseInt('12xys')
//12
parseFloat('12.5foo')
//12.5
// will not stop after floating point
//the other way aroudn
String(20)

//Arrays you know these
//Objects
/*
dictionary-like data structure
that matches keys with specifi values
collection of key value paiirs
you can use object lieterals {}
*/
let ob={ dog: 'barks', cat: 'meows', pig: 'oinks' }
console.log(ob['cat'])
//'meows'


/*
expressions anything java can evaluate
experssion evaluate to itselff 
ivoking conosle.log method:
write something on console
console.log returns nothing it just
makes the console do something
let a = console.log('hello;)
a has a value of undefined

Statements evaluate to undefined all the time
you cannnot use statements as part of another
expression.
a statement si a syntactic unit that expresses 
an operation to be carried out. Such as an Assigment

You can usually refer to any single line of code as 
a statement, regardless of whether MDN mentions it as 
a permissible statement.
*/