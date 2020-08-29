//while
let counter=1;
while (counter <= 10){
  console.log(counter);
  counter += 1;
}
//arrays
let names=['a','b','c','d'];
let upperNames=[];
let index=0;
while (index<names.length){
  let upperCaseName=names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}
console.log(upperNames);

//do/while loop
let rline = require('readline-sync')
//always executes the code in thee block at least once
let answer;
do {
  answer = rline.question("Do you want to do that again?");
} while (answer === 'y');


//for loops
//for (initialization; condition;increment)
/*
the difference is the scope
in the while loop the scope includes the
code that surrounds the loop

in the for statement the scope
is the fro statement and its body
*/

let moreNames=['chris','kevin','Naveed','daniel'];
let uppNames=[];
for (let index=0; index<moreNames.length; index += 1){
  uppNames.push(moreNames[index].toUpperCase());
}

console.log(uppNames);

//controling loops
//continue and break more control
//contiune lets you start a new iteration
// break terminates loop earl

uppNames=[];
for (let index=0; index < moreNames.length; index +=1){
  if(moreNames[index]==='Naveed'){
    continue;
  }
  uppNames.push(moreNames[index].toUpperCase());
}

console.log(uppNames);
//you know how to use break, maybe I can go a bit faster

//Array iteration

//arry looping abstractions
let lists=['hello', 'world', 'this', 'an', 'array']
lists.forEach(function (item){ //anonymus function
  console.log(item);
})
/*
first class function, functions are values
and can assign them to variables, pass them around
as arguments to toher function
and use them as return values
*/

//recursion
/*function doubler(number){
  console.log(number*2);
}
for (let index=1; index < 50; index++) {
  doubler(index);
}
*/

function doubler(number) {
  console.log(number);
  if (number <=50 ) {
    doubler(number *2)
  }
}

doubler(1);

function fibo(number) {
  if (number < 2) return number;
  return fibo(number-1)+fibo(number-2);
}
for (let index = 1; index < 10; index++) {
  console.log(fibo(index));
}
//every recursive function has a baseline condition
//that marks the end of the recursion
