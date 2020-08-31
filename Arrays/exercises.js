/*
In the following code, what are the final length
values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];
//4

let array2 = [1];
array2.length = 5;
//5

let array3 = [];
array3[-1] = [1];
//0 index positions must be non-neg integers to be
counted in, if not they will not be in the lenght
but still be axcesed through object keys
let array4 = [1, 2, 3, 4, 5];

array4.length = 3;
//3 array will get truncated

let array5 = [];
array5[100] = 3;
//101
he length of array5 is 101. As already noted, the 
length is the highest index position that has a value,
plus 1. In this case, the highest in position that has
a value is 100, so the length is 101.


2.
*/
let myArray=[1,3,6,11,4,2,4,9,17,16,0];
myArray.forEach(index=>{
  if (index%2===0){
    console.log(index)
  }
})
console.log("-----------------")

//3.
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray.forEach(index =>{
  index.forEach(subIndex=>{
    if (subIndex%2===0){
      console.log(subIndex)
    }
  })
})

//3
myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
function evenOdd(number){
  if (number%2===0){
    return "even"
  }
  return "odd"
}

let newArray=myArray.map(evenOdd);
console.log(newArray)

//5
function removeNonInteger(array) {
  return array.filter(number=>Number.isInteger(number))
}

array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

//6
arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(arr) {
  return arr.map(index => index.length)
  .filter(index => ((index%2===0) ? false: true ));
}

console.log(oddLengths(arr)); // => [1, 5, 3]

//7
function sumOfSquares(arr) {
  return (arr.reduce((acc,cur)=>acc+cur**2,0));
}
let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

//8
arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function OddLemgth(arr) {
  return arr.reduce((acc,curr)=>{
    if (curr.length%2 !== 0){
      acc.push(curr.length)
    }
    return acc;
  },[])
}
console.log(OddLemgth(arr))
//I was so close the brackets were outside of the reduce() mehtod :(
// make sure to return the accumulator :)

//9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function threeInside(arr){
  return arr.reduce((acc,curr)=>{
    if (curr===3){
      acc=true
    }
    return acc
  },false)
}

console.log(threeInside(numbers1))
console.log(threeInside(numbers2))
console.log(threeInside(numbers3))

//lmfao you didn have to use thta function
//use includes lol
console.log(numbers1.includes(3))
console.log(numbers2.includes(3))
console.log(numbers3.includes(3))

//10
arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
console.log(arr[1][2])