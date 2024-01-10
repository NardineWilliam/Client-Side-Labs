/***************************************************************************************************************************************/
//1.Object.create()
//It creates a new object, using an existing object as the prototype of the newly created object.
const person = {
    isHuman: false,
    printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  const me = Object.create(person);
  me.name = 'Nardine';
  me.isHuman = true; 
  me.printIntroduction(); // Expected output: "My name is Nardine. Am I human? true"
/***************************************************************************************************************************************/
//2.Object.defineProperty()
//It defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
});
console.log(object1.property1); // Expected output: 42  
/***************************************************************************************************************************************/
//3.Object.freeze()
/*freezes an object. A frozen object can no longer be changed: new properties cannot be added, 
existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, 
and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.*/
const obj = {
    prop: 42,
  };
  Object.freeze(obj);
  obj.prop = 33;
  console.log(obj.prop); // Expected output: 42
/***************************************************************************************************************************************/
//4.Object.getOwnPropertyNames()
//returns an array of all properties 
//(including non-enumerable properties except for those which use Symbol) found directly in a given object.
const object1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  console.log(Object.getOwnPropertyNames(object1)); // Expected output: Array ["a", "b", "c"]
/***************************************************************************************************************************************/
//5.Object.is()
//It determines whether two values are the same value.
console.log(Object.is('1', 1)); // Expected output: false
console.log(Object.is(NaN, NaN)); // Expected output: true
console.log(Object.is(-0, 0)); // Expected output: false
const obj = {};
console.log(Object.is(obj, {})); // Expected output: false
/***************************************************************************************************************************************/
//6.Object.entries()
//returns an array of a given object's own enumerable string-keyed property key-value pairs.
const object1 = {
    a: 'somestring',
    b: 42,
  };
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  } 
  // Expected output:
  // "a: somestring"
  // "b: 42"
/***************************************************************************************************************************************/
//7.Object.isFrozen()
//determines if an object is frozen.
const object1 = {
    property1: 42,
  };
  console.log(Object.isFrozen(object1)); // Expected output: false
  Object.freeze(object1);
  console.log(Object.isFrozen(object1)); // Expected output: true
/***************************************************************************************************************************************/
//8.Object.keys()
//returns an array of a given object's own enumerable string-keyed property names.
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
console.log(Object.keys(object1)); // Expected output: Array ["a", "b", "c"]
/***************************************************************************************************************************************/
//9.Object.values()
//returns an array of a given object's own enumerable string-keyed property values.
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
console.log(Object.values(object1)); // Expected output: Array ["somestring", 42, false]
/***************************************************************************************************************************************/
//10.Object.assign()
//copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // Expected output: true
/***************************************************************************************************************************************/