//1 -  Get the square value of the Remainder from Two numbers. Two numbers are passed as parameters.
//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value's square.

function square(num1, num2) {
  let remainder = num1 % num2;
  let remainder1 = remainder ** 2;
  
  if (remainder1 === 0) {
    console.log("Values are square.");
  } else {
    console.log("Values are not square.");
  }
}

square(20, 3);

//2 -Create a function that takes an array containing only numbers and returns the sum, 
//the product of the first and last elements. Keep the array index at 5.

const arr11 = [2,'string',8,null,4,5]
 const NumberArr= arr11.filter(Element=>typeof Element ==='number');
 reduce = NumberArr.reduce((a,b)=>
 a+b)
 product = NumberArr[0]*NumberArr[NumberArr.length-1]

 console.log("2 - product1",product
 );
 

//3 -Given two numbers, swap the numbers without using the temp variable.

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
let a = 17;
let b = 22;

console.log("3 - before swap", [a, b]);
console.log("3  - after swap", swap(a, b));

//4 - Create a function that takes an array of numbers and 
//returns both the minimum and maximum numbers, in that order.

function minMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return [min, max];
}
let numbers = [2, 4, 1, 6, 3, 9];
result = minMax(numbers);
console.log("4 - min-max", result);

//5 - Create a function that takes an array of non-negative integers and 
//strings and returns a new array without the strings.

 function nonNegative(arr) {
let arrnns= arr.filter(Element=>typeof Element ==='string'||'number'&& Element>=0);
  console.log(arrnns);
  if(arrnns.length!==arr.length){
    return arr.filter(Element=>typeof Element ==='number'&& Element>=0);
  }
  else{
    console.log(arrnns);
  }
 }
 let array11=[0,1,'string','no',4,6,8,'*',-4,-9]
 result3=nonNegative(array11);
 console.log("5 - nonNegative",result3);

//6 - Create a function that takes two numbers as arguments (num and length) and
//returns an array of multiples of num until the array length reaches length. 
 // example: (7, 5) ➞ [7, 14, 21, 28, 35]

function Multiple(num, length) {
  const multiArray = [];
  for (let i = 1; multiArray.length < length; i++) {
    multiArray.push(num * i);
  }
  return multiArray;
}
console.log("6 - multiple", Multiple(7, 5));

//7 - Considering the above array, write logic to return the value that is incremented by 5.
//Result array: [12, 19, 26, 33, 40]


function incrementLogic(num) {
  const Array = [];
  for (let i = 12; Array.length < 5; i++) {
    Array.push(num += 7);
  }
  return Array;
}
console.log("7 - incrementLogic", incrementLogic(5));

//8 - Write a function to reverse the array and string.

//normal array
let arr = ["tamil" ,"english" ,"maths" ,"science" ,"social"];
console.log("8 - normal array", arr);
// reversed array
let newArr = arr.reverse();
console.log("8 - reversed array",newArr);

//normal string
let string= "dinesh, kumar"
newString= string.split('').reverse().join('');
console.log("8 - string reverse =",newString);

//9 - Copy the reverse array values to another array without using predefined functions.
//[12, 19, 26, 33, 40] to [40, 33, 26, 19]

const array = [12, 19, 26, 33, 40]
const reversedArray = []
for(let i = array.length - 1; i >= 1; i--) {
  valueAtIndex = array[i]
  reversedArray.push(valueAtIndex)
}
console.log("9 - reverseArray2",reversedArray);

//10 Write a program to count the array without using functions.
var size = [12,19,26,33,40]
 function arrayCount(a) {
var count = 0;
while (a[count]!==undefined) {
  count++
}
  return count;
 }
 console.log("10 - arrayCount",arrayCount(size));
