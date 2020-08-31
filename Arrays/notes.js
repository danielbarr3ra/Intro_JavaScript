/*
an array ORDERED list of elements (any type)
define it by placing elements between []

heterogenuus array = different types
unique index number attached to values

modifing array
*/
let array=[1,2,3]
array[1]=4;
console.log(array)

//ading with []
array[array.length]=10
console.log(array)

//arrays declared with constant will
// you will not change what array its referencing
// ut its ccontents are fair game1

const MyArray=[1,2,3]
MyArray[1]=5
console.log(MyArray)
//MyArray=[1,2,3] error Assignment to constant variable
/*
const declaration prohibts
chaning what thing the const points to 
*/
//adding with push method
array.push('a');
array.push('xyz',null);
console.log(array)
let a=array.push('push') // a=8 woow 
console.log(a)
//apeindng elements to caller and its mutated
//IT RETURNS LENGTH of mutate array

//adding with concat
//it does not mutat the caller it returns new array
//containint og array + new element passed as args

array.concat(34,'abc');
console.log(array)
let newArray=array.concat(34,'abc','d')
console.log(newArray)

//removing with pop
//returns last element of the array mutating the caller
console.log(array.pop())

//splice
//remove one or more leements from an array even if its
//not on array (in that case it adds null)
//splice(n,m) takse out n up to but not n+m
array=[0,1,2,3,4,5,6,7,9];
array.splice(4,3);
console.log(array);
/*iteration methods
forEach needs a callback function (a function
that you pass to another function as argument)
the called function subsequently invokes the
callack function at certain times while it runs.

you can use arrow functions or use function keyworkd
*/
array=[1,2,3,4];
array.forEach(function (index){console.log(index)});
//or arrow
array.forEach((index)=>console.log(index*2));

/*
map
creating new array with dependency on a given array
(you could use a for eachEach() method, but this is
a burner once it is used .push() will modify the
result array by adding extra elements. map() is a better
alternative)

callback doesnt update the resulting array
the return value of map does that
and we dont have to reset the variable if we run the same
code
*/

let square=[]
squares=array.map(num=>num*num);
console.log(squares)

/*
for each perform simple iteration and returns UNDEFINED
map transforms an array elements and returns A NEW ARRAY
with TRANSFORMED ELEMETNS
*/

//filter
/*
returns a new array that incluedes all alements from the
calling aray for which the callback returns a
truthy value. DOES NOT mutate caller
*/

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
/*
console.log(numbers.filter(
  function(num){
    if(num%2===0){
      return true
    }
  }
  ));
/*
you can simplify it by using arrow notation
*/
console.log(numbers.filter(num => num%2===0))
//                         (param) {return expression}
console.log(numbers)
//reduce
/*
two args: callback, initializer of something called accumulator
the callbac takes two args: en element of array, and current
    accumulator value

returns a value that will be used as the accumulator
in next invocationn of callback
*/

let example=[2,3,5,7]
console.log(example.reduce((acc,el)=>acc+el,0))

let string=['a','b','c','d']
console.log(string.reduce((acc,el)=>(acc+el).toUpperCase(),'START'));
//reduce  DOES NOT MUTATE CALLER

//Diferences between other langauges
/*
-Arrays are objects, typeof(arr) = 'object'
Array.isArray(arr) //returns true you can use this method
-changing length to smaller current value, it will
TRUNCATE the array
-changing it to larger, then the array is increased
but values DO NOT GEt INITIALIZED

let arr = []
> arr.length = 3
> arr             // returns [ <3 empty items> ]
> arr[0]          // returns undefined
> arr.filter(element => element === undefined) // returns []
> arr.forEach(element => console.log(element)) // no output, but returns undefined
> arr[1] = 3
> arr             // returns [ <1 empty item>, 3, <1 empty item> ]
> arr.length      // 3
> arr.forEach(element => console.log(element)) // outputs 3
> Object.keys(arr) // ['1']


unset elements are treated as missing, but length property
includes the unset elements
-you can use negative indexes or non integer
(using object arrays)
thse will not be treu elements and will not count to
lenght of array, they are properties on the array object
*/
let arr=[1,2,3]
arr[-3]=4
console.log(arr)
arr[32.23]='hi'
console.log(arr)
arr['h']='m'
console.log(arr)
/*
since arrays are objects
you can use the object.keys
method to reutnr arrays
keys (index values) as array of string

*/

console.log(Object.keys(arr))
//unset values are set to undefined
//as an after effect of callinga another method
//while explicit undefined ones are purporelsy set in an array

// unset values
let a1 = new Array(3);
let b = [];
b.length = 3;

// undefined
let c = [undefined, undefined, undefined]

a1;                      // [ <3 empty items> ]
b;                      // [ <3 empty items> ]
c;                      // [ undefined, undefined, undefined ]

a1[0] === undefined;     // true
b[0] === undefined;     // true

a1.length;                //  3
b.length;                //  3
c.length;                //  3

console.log(Object.keys(a1).length);   //  0
Object.keys(b).length;   //  0
console.log(Object.keys(c).length);   //  3

/*
the c array was set explicetly and whent .length
property was used it shows that the keys method
counts only the keys that were set explicetly
*/
//nested array
//same as python

//array equality
console.log([1,2,3]===[1,2,3]) //false
let a2=[1,2,3]
let b2=a2
console.log(a2===b2) //true

/**
arrays have to point to same memroy spot to be seen
as equal, this rule holds for objects 



other array methods
includes
cant use it to check for nested arrys
*/
let arr2=[1,2,3,[4,5]]
arr2.includes(3) //TRUE
arr2.includes([4,5]) //FALSE

//sort is desctructiv and mutates caller
arr1=[5,3,123,56,1]
console.log(arr1.sort())
//arr1 becomes [1,123,3,5,56]
//is not math sort more like a abc sort
//slice extracts aand returns a portion of array
//(index at which extracoint begins, where extraction ends)
//if you dont provide arguments slice returns copy of entire
//array

//revers reverses order of array and is dstructive
// you can use slice without arguments
//to make a copy and avoid mutating original[123,56,5,3,1]

let array3=arr1.slice().reverse()
console.log(array3) //