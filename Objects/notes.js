/*
objects have behavior (perform actions) and state 
(distinguished characteristics that make them different
from other objects )

objects: collection of key-value pairs
each item has akey and associated value
(arrays associate value through indexes)
values can be other objects
create object by using
Object literal syntax
*/

let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'geneology'],
}
// you can wite it one line too
//acces using dot or bracket notation
person.name;
person['age']

//devs preffer dot, but if you use a variable to get a key
//you gotta use bracket
let aKey='name'
person[aKey]

//ading more keys
person.height='5 ft'
person['gender']='female'
console.log(person)

//removing keys
//delete removes key and returns true if it was successful
//pairs aka properits
delete person.age
delete person['gender']
delete person['hobbies']
console.log(person)

//declared with const will modify properties
//but cant change the object its refering

const MyObj = {foo: 'bar', qux: 'xyz'}
MyObj.qux="hey there"
console.log(MyObj)

//MyObj={} //cannot change the object
//object vs primities
//obj: simple objects, arrays,date objects, functions
//arrays use integer indexes instead of keys

//objects mutable,
//primitive values are immutable (atomic)
//you can only use them in expression or reasign them
//all operation on primitive valeus evaluate as new
/**
using a property of an object in an operation
will change the object
in the other hand using a value in an opeation with 
a value doesnt not muatate it just
reasings it to a new variable 


Prototypes
objects inherit if a inherits from b then b is prototype of a
a has acces to propeties on b

static method object.create provides a simple
way to creat a new object that inherits from
an exisiting object
*/

let bob = {name: 'Bob', age: 22};
let studentBob = Object.create(bob);
studentBob.year='senior'
console.log('--------')
console.log(studentBob.name)
//.name property is not explicityl
//defined in the studentBob object
//but can acces it since there is inheritance
/*
iteration
for/in loop
*/
console.log('--------')
let person2 = {
  name: 'Daniel',
  age: 30,
  height: '6 ft'
};
//cant use dot notation within loop, since prop
//is variable that contains propety name
for (let prop in person2) {
  console.log(person2[prop]);
}

//for loop will loop in the object properties' properties
//as well!!!!! so it will show a and b even though
// they are not explicitly in obj2

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

console.log(obj2)

//get around by using hasOwnProperty method
//it takes the name of property and returns true
//if name of one of the calling objects OWN propeties
//false if not

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)){
    console.log(obj2[prop]);
  }
}

//object.keys
//returns array with the keys and you can
//iterate using this array
//it does not include prototype keys
let danielKeys=Object.keys(person2);
danielKeys.forEach(key=>console.log(person2[key]))

//DONT ASSUME SEQUENCE OF ITERATION IN OBJECT KEYS
// no specific standard

//common operation
//object values extract the values from every property to an array
let person3={name:'Bach', age: 23, height:'5 8ft'};
let person3Values=Object.values(person3);
console.log(person3Values)
//will not be able to predict order of values returned
//OBJECT ENTRIES returns array of nested arrays
//each nested arrya has two elements, the kye and value
console.log(Object.entries(person3))
//Object.assign
//merges two or more objects into single objecct
let ObjA={a:'foo'}
let ObjB={b: 'bar'}
console.log(Object.assign(ObjA,ObjB))
//it mutates the first object!!!!!!!!!
console.log(ObjA)
//thus use an empty object to do your assignemnts {}
ObjA={a:'foo'}
let ObjC=Object.assign({},ObjA,ObjB)
console.log(ObjC)
console.log(ObjA)

//Object vs Arrays
//if values use name labels objects
//if values are ORDERED use ARRAYS
//stack or queue? use ARRAY