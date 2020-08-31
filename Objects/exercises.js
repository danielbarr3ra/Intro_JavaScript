//1. Given the following code, how can you access the name 
//of the person?

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name)

/*
Which of the following values are valid keys for an object?

1 valid
'1' valid
undefined valid
'hello world' valid
true valid
'true' valid
all valid but when assign them it will coerced them
to string so
myObj[true]='hello'
is the same as
myObj['true']='hello'
so be caerful


//3 Use object literal syntax (e.g., { key: value, ... } 
notation) to create an object that behaves as an array 
in a for statement. The object should contain at least 3 
elements. You should place your code between the braces in
 the let statement:

*/
let myArray = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
//4
/*
Create an array from the keys of the object obj 
below, with all of the keys converted to uppercase. 
Your implementation must not mutate obj.
*/
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let arr=Object.keys(obj).map((index)=>index.toUpperCase())
console.log(arr)

//5 Create a new object named myObj that uses myProtoObj as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj2=Object.create(myProtoObj)

//6 Add a qux property with value 3 to the myObj 
//object we created in the previous
myObj2.qux=3;
//exercise. Now, examine the following code snippets:
//snipet 1
console.log('=======')
Object.keys(myObj2).forEach(function(key) {
  console.log(key);
});
// Snippet 2
console.log('==========')
for (let key in myObj2) {
  console.log(key);
}
/*snipet one produces only the keys specified in the
obj2 since object.keys(obj) returns those only spcified
aka its OWN properties (not inherited)

snippet 2 will include the previous + the prototype
properties since for let in loop includes propertis
inherited


//7 Create a function that creates and returns a copy of 
an object. The function takes two arguments: the object 
to copy and an array of the keys that you want to copy. 
You can omit the array of keys, in which case you should 
copy all the keys of the object.

Here are some examples for your reference:

*/
function copyObj(obj,keys=Object.keys(obj)) {
  let CopiedObject={}
  keys.forEach(property=>{
    CopiedObject[property]=obj[property]
  })
  return CopiedObject
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
//8 what does the following program log to cosnole why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
//since objects are mutable foo.a becomes 'hi'
//the primitive values are not
// so line 130 does not mutate original string of'hi'
