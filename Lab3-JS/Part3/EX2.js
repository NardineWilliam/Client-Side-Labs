/***************************************************************************************************************************************/
//1.Array.pop()
//removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]
/***************************************************************************************************************************************/
//2.Array.push()
//adds the specified elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // Expected output: 4
console.log(animals); // Expected output: Array ["pigs", "goats", "sheep", "cows"]
/***************************************************************************************************************************************/
//3.Array.reverse()
//reverses an array in place and returns the reference to the same array
//It changes the original array
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // Expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed); // Expected output: "reversed:" Array ["three", "two", "one"]
console.log('array1:', array1);     // Expected output: "array1:" Array ["three", "two", "one"]
/***************************************************************************************************************************************/
//4.Array.slice()
/*returns a shallow copy of a portion of an array into a new array object
selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified.*/
const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animal.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
console.log(animal.slice(2, 4)); // Expected output: Array ["camel", "duck"]
console.log(animal.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animal.slice(-2)); // Expected output: Array ["duck", "elephant"]
console.log(animal.slice(2, -1)); // Expected output: Array ["camel", "duck"]
console.log(animal.slice()); // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
/***************************************************************************************************************************************/
//5.Array.sort()
/* sorts the elements of an array in place and returns the reference to the same array, now sorted
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values.
It changes the original array.*/ 
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array); // Expected output: Array [1, 100000, 21, 30, 4]
/***************************************************************************************************************************************/
//6.Array.concat()
//used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arrray1 = ['a', 'b', 'c'];
const arrray2 = ['d', 'e', 'f'];
const arrray3 = arrray1.concat(arrray2);

console.log(arrray3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]
/***************************************************************************************************************************************/
//7.Array.find()
//returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
const array11 = [5, 12, 8, 130, 44];
const found = array11.find((element) => element > 10);
console.log(found); // Expected output: 12
/***************************************************************************************************************************************/
//8.Array.join()
//creates and returns a new string by concatenating all of the elements in this array
//separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // Expected output: "Fire,Air,Water"
console.log(elements.join('')); // Expected output: "FireAirWater"
console.log(elements.join('-')); // Expected output: "Fire-Air-Water"
/***************************************************************************************************************************************/
//9.Array.includes()
//determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array9 = [1, 2, 3];
console.log(array9.includes(2));// Expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));// Expected output: true
console.log(pets.includes('at')); // Expected output: false
/***************************************************************************************************************************************/
//10.Array.indexOf()
//returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // Expected output: 1
// Start from index 2
console.log(beasts.indexOf('bison', 2)); // Expected output: 4
console.log(beasts.indexOf('giraffe')); // Expected output: -1
/***************************************************************************************************************************************/