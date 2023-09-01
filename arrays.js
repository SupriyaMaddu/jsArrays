let array1 = [4,3,"javascript",60.3,true];
let array2 = [7,20,"value"];

//array size 

let array1Length = array1.length;
console.log("The size of array1 is", array1Length);

let array2Length = array2.length;
console.log("The size of array2 is", array2Length);

//popping an item

array1.pop();
console.log("The size of array1 is", array1.length);
console.log(array1)

//pushing item
let pushItem = array1.push(6,"string");
console.log("The size of array1 is", array1.length);
console.log(array1)

//slicing an Array

var slicedArray = array1.slice(1,4)
console.log("The size of array1 is", array1.length);
console.log(slicedArray);

//Removing elements from array1 until the length of array1 and array2 are equal

for (let i=0; i <= array1.length; i++) {
    if (array1.length > array2.length) {
        array1.pop();
        console.log("The size of array1 is", array1.length);
        console.log("The size of array2 is", array2.length);
    }
}

// Replacing array items 

let tempArray = array1;
array1 = array2;
array2 = tempArray;

console.log(array1);
console.log(array2);

console.log("The size of array1 is", array1.length);
console.log("The size of array2 is", array2.length);

//Indexing 

let firstItem = array1[0];
console.log(firstItem);

var lastItem = array1[array1.length - 1];
console.log(lastItem);

//Updating exisiting item 

array2[1] = "Hello";
console.log(array2);