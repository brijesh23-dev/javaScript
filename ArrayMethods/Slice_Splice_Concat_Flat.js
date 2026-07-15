// this method is used to create a new array from the existing array.
// slice() method is used to create a new array from the existing array.
// slice(start, end)
// start is the index of the first element to include in the new array.
// end is the index of the first element to exclude from the new array.
// if end is not provided, it will include all the elements from start to the end of the array.
// if start is not provided, it will include all the elements from the beginning of the array to end.
// if start and end are not provided, it will include all the elements from the beginning of the array to the end of the array.
// if start is negative, it will include the elements from the end of the array to the start of the array.
// if end is negative, it will include the elements from the beginning of the array to the end of the array.
// if start and end are negative, it will include the elements from the end of the array to the start of the array.
// if start and end are negative, it will include the elements from the end of the array to the start of the array.

// Splice() method is used to add or remove elements from the existing array.
// splice(start, deleteCount, items)
// start is the index of the first element to add or remove.
// deleteCount is the number of elements to remove.
// items is the elements to add.
// if deleteCount is not provided, it will remove all the elements from start to the end of the array.
// if items is not provided, it will add the elements at the start of the array.
// if start and deleteCount are not provided, it will add the elements at the beginning of the array.
// if start and deleteCount are negative, it will add the elements at the end of the array.
// if start and deleteCount are negative, it will add the elements at the end of the array.

// concat() method is used to create a new array from the existing array.
// concat(array1, array2, array3, ...)
// array1, array2, array3, ... are the arrays to concatenate.
// if array1, array2, array3, ... are not provided, it will return a new array with the same elements as the existing array.
// if array1, array2, array3, ... are not provided, it will return a new array with the same elements as the existing array.

// flat() method is used to create a new array from the existing array.
// flat(depth)
// depth is the depth of the array to flatten.
// if depth is not provided, it will flatten the array to the depth of 1.
// if depth is negative, it will flatten the array to the depth of 0.
// if depth is negative, it will flatten the array to the depth of 0.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1));
console.log(fruits.slice(-1));
console.log(fruits.slice(1, -1));
console.log(fruits.slice(-1, 1));
console.log(fruits.slice(1, -1));
console.log(fruits.splice(1, 2));
console.log(fruits.splice(1, 2, "banana", "cherry"));
console.log(fruits.splice(0,1))
console.log(fruits.splice(0,1, "banana", "cherry"));
console.log(fruits.concat(fruits));
console.log(fruits.flat());
console.log(fruits.flat(2));
console.log(fruits.flat(3));
console.log(fruits.flat(4));
console.log(fruits.flat(5));
console.log(fruits.flat(6));
console.log(fruits.flat(7));
console.log(fruits.flat(8));
console.log(fruits.flat(9));
console.log(fruits.flat(10));