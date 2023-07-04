//1
function square(num1, num2) {
  remainder = num1 % num2;
  result = remainder ** 2;
  return result;
}

console.log("1 - square", square(17, 3));

//2
const arr11 = [2,'string',8,null,4,5]
 const NumberArr= arr11.filter(Element=>typeof Element ==='number');
 reduce = NumberArr.reduce((a,b)=>
 a+b)
 product = NumberArr[0]*NumberArr[NumberArr.length-1]

 console.log("2 - product1",product
 );
 

//3
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

//4
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

//5
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

//6
function Multiple(num, length) {
  const multiArray = [];
  for (let i = 1; multiArray.length < length; i++) {
    multiArray.push(num * i);
  }
  return multiArray;
}
console.log("6 - multiple", Multiple(7, 5));

//7

function incrementLogic(num) {
  const Array = [];
  for (let i = 12; Array.length < 5; i++) {
    Array.push(num += 7);
  }
  return Array;
}
console.log("7 - incrementLogic", incrementLogic(5));

//8
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

//9
const array = [12, 19, 26, 33, 40]
const reversedArray = []
for(let i = array.length - 1; i >= 1; i--) {
  valueAtIndex = array[i]
  reversedArray.push(valueAtIndex)
}
console.log("9 - reverseArray2",reversedArray);

//10
var size = [12,19,26,33,40]
 function arrayCount(a) {
var count = 0;
while (a[count]!==undefined) {
  count++
}
  return count;
 }
 console.log("10 - arrayCount",arrayCount(size));
