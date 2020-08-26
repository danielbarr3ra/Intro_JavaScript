/*
false || (true && false); f
true || (1 + 2);  t
(1 + 2) || true; 3 first one to be evaluated!
true && (1 + 2); 3 has to evaluate to the end!

false && (1 + 2); f
(1 + 2) && true; t
(32 * 4) >= 129; f
false !== !true; f

true === 4; f
false === (847 === '847');  t
false === (847 == '847'); f
(!true || (!(100 / 5) === 20) ||... T
*/
/*
Write a function, evenOrOdd, that determines
 whether its argument is an even number. If 
 it is, the function should log 'even' to the
  console; otherwise, it should log 'odd'. 
  For now, assume that the argument is always an integer.
*/
function evenOrOdd (arg) {
  if (Math.floor(arg) === arg) { //there is an 
    if (arg % 2 === 0){ //Number.isInteger(number) method
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('non integer')
  }
}
evenOrOdd(3);
evenOrOdd(10);
evenOrOdd(3.4);
evenOrOdd(2.3);
evenOrOdd(1.9);

/*
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}
barCodeScanner('113');

product2 product3 product not foudn!
there are no breaks
so basically starts in product 113

if ( foo() ) {
  return'bar'
} else {
  return qux()
}

6. What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Arra
it is not part of the falsy values so it
evaluates to not empty
*/
function foo(arg) {
  if (arg.length > 10) {
    return arg.toUpperCase()
  } else {
    return arg
  }
}
/* function foo(string){
  return ((string.length > 10) ? string.toUpperCase() : string)
}
*/

console.log(foo('hey im really sad help'))
console.log(foo('hi'))

//8
function numberRange(number) {
  if (0 > number) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100){
    console.log(`${number} is between 50 and 100`);
  } else if (100 <= number){
    console.log(`${number} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
