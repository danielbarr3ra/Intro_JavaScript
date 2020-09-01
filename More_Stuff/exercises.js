//What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//[1,4,3] the assignment mutate the arrya,
//so the aliases pointing the same hash were also
//affected

/*
in line 4 the console.log() method
cannot log greeting because it has not been defined
*/

//4
console.log(Math.sqrt(37))

let list=[1,6,3,2]
let list2=[-1,-6,-3,-2]
let list3=[2,2]
function major(arr){
  return arr.reduce((acc,curr)=>{
    if (curr>acc){
      acc=curr
    }
    return acc
  },arr[0])
}

console.log(major(list))
console.log(major(list2))
console.log(major(list3))
//could have used Math.max(1,2,4,5) lmfao


//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
returns an array of the length of words in a sentence in 
reverses order
*/

/*
Write a function that searches an array of strings for 
every element that matches the regular expression given 
by its argument. The function should return all matching 
elements in an array.
*/
function allMatches(arr,exp) {
  return arr.filter(element=>exp.test(element)) 
}
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/))

/*
what is an exception handling and what problem
does it solve

if there is an exceptional error you
can use try/catch to handle potential bugs in your
code
*/

//8
function isNotANumber(value) {
  if (value !== value) return true
  else return false
}
console.log(isNotANumber(NaN))

//
function isZero(num){
  if (num === num * -1) {
    if (1/num===-Infinity){
      return true
    }
  }
  return false
}
console.log('----')
console.log(isZero(-0))
console.log(isZero(0))
console.log(isZero(-3))
console.log(isZero(3))

//10
//x++ will coerce it a number so the first implementation
//will just return the string into number with no increment
//x+1 when x=string ccoreces 1 to string