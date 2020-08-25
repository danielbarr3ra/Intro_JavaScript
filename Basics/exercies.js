//1.
console.log('Daniel'+" Barrera");
//2.
number=4936;
ones = number % 10;
number -= ones;
number /= 10
tens = number % 10;
number -= tens;
number /= 10
huns = number % 10;
number -= huns;
number /= 10;
thou = number % 10;
console.log(`${ones} ${tens} ${huns} ${thou}`)
// 3.
/*
string
bolean
number
number
undefined
object
*/

//4
/*
statement are
let foo
expressions
foo = 5 assignemnt wont be treated as expression
foo
*/

//5
/*
its using coercion
since the operator + is used for
string concanation it is using it to convert number 10
to string '10'
*/
//6
console.log(Number('5')+10);
console.log(`The value of 5 + 10 is ${Number('5')+10}.`)

//8
//no it returns undefined

//9 10
let Names=['asta','butterscotch','pudding','neptune','darwin']
let pets = {
  asta: 'dog',
  butterschot: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwing: 'lizard'
}
//11
//no
//12
//3
//true
// it is comparing charectre by charecter so
// '1'<'9' is true so '12'<'9' is true