/*
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]

*/

/*
[ 1,7 , 9 , 45, ]

["Str" ,"alex","moh"]

['the','fox', 'over','lazy', 'dog',  ]


*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
/*
"Banana"=1
"Tomato"=0

var fruits=["Tomato","Banana","Watermelon"]
fruits.sort();
fruits.splice(2)
console.log(fruits);
*/
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var favoriteFood = [ 'Pasta' ,'Pizza' ,'Fish and seafood ','Chicken' ,' burgers']
var favoriteSport = ['basketball' ,'Monopoly','Chess']
var favoriteMovie =[ 'Tom & Jerry' ,'Harry Potter','Simba','Fast and Furious' ]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

/*
function firstOfArray(arr) {
    return arr[0];
}
console.log(firstOfArray([1, 4, 5]));
console.log(firstOfArray(["t", "u", "g", "x"]));
*/
/*
let firstOfArray =["t","u","g","x"];
let firstElement = firstOfArray[firstOfArray.length - firstOfArray.length ];

console.log(firstElement);
*/

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
/*
function lastOfArray(arr) {
    return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));
*/
/*
let lastOfArray = [2, 4, 6, 8, 10, 12, 14, 16];
let lastElement = lastOfArray[lastOfArray.length - 1];

console.log(lastElement);
*/

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


/*
var array = [0,5,7,9]

array.push( 10)
for (i=0 ;i<3 ;i++)
array.shift()
array.unshift(1,3,4,6,8)
console.log(array)
*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
/*
var array2 = [5,9,-7,3.5]
array2.push(6)
console.log(array2)
array2.unshift(2)
console.log(array2)
array2.shift(0)
console.log(array2)
array2.pop(5)
console.log(array2)
*/
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

/*
function doubleValues(arr){
    const newArr = [];
    arr.forEach((x) => {
        newArr.push(x * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));
*/

/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
/*
function onlyEvenValues(arr){
    const arr2 = [];
    arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
    });
return arr2;
}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));
*/
/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
/*
function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']))
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']))
*/
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
/*
function middleOfArray(arr) {
    if (!arr.length)
    return;
    const mid = arr.length / 2;
    if (arr.length % 2 === 1) {
        return arr[Math.floor(mid)];
    } else {
        return [
        arr[mid - 1],
        arr[mid],
    ];
    }
}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));
*/

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
/*
var animals = ['cat', 'ele', 'bird'] 
animals=['zebra', 'elephant']
console.log(animals)

var nums= [1,2,3,8,9]
nums = [5,-22,3.5,44,98,44]
console.log(nums)

*/

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
/*
function indexOfArray(array, index) {
    return array[index];
}
var nums= [1,2,3,8,9]
console.log(indexOfArray(nums,3))
console.log(indexOfArray(nums,1))
console.log(indexOfArray(nums,4))
*/

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
/*
function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1);
}
var nums = [1, 2, 3, 8, 9]
console.log(arrayExceptLast(nums));
*/
/*
var nums= [1,2,3,8,9]
var lastItem =  nums.pop()
console.log(nums)

*/

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
/*
function addToEnd(arr, value) {
    arr.pop(value)
    arr.push(value)
    return arr;
}
var nums = [1, 2, 3, 8, 9]
console.log(addToEnd(nums, 55));
*/
/*
var nums = [1,2,3,8,9];
var numsLength = nums.pop();
var numsLength = nums.push(55);
console.log(nums);

*/
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum ;
}
var nums= [1,2,3,8,9]
console.log(sumArray(nums))
*/
/*
var nums= [1,2,3,8,9]
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);
*/
/*
function sumArray() {
    var nums= [1,2,3,8,9];
    let len = nums.length - 1;
    let sum = 0;
    while (len >=0) {
    sum += nums[len--];
    }
    console.log(sum);
}
sumArray();
*/
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/*
var nums =  [1,2,3,8,9]
let min = Number.POSITIVE_INFINITY
for (const value of nums) {
min = Math.min(min, value)
}
console.log(min)
*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function removeFromArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
nums = [1, 2, 3, 8, 9]
console.log(removeFromArray(nums, 8));
*/
/*
function removeFromArray(nums, value) {
    var i = 0;
    while (i < nums.length) {
        if (nums[i] === value) {
        nums.splice(i, 1);
    } else {
        ++i;
    }
    }
    return nums;
}
console.log(removeFromArray([1,2,3,8,9], 8))
*/
/*
Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
        this.splice(i, 1);
        i--;
    }
    }
    return this;
}
var nums= [1,2,3,8,9]
nums.removeByValue(8);
console.log(nums);
*/

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
nums= [1,2,3,8,9];
function oddArray(arr){
    let result = [] ;
    for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
    }
    return result;
}

console.log(oddArray(nums))
*/
/*
function oddArray(arr){
    let result = [];
    let i = 0 ;
    while (i < arr.length){
        if(arr[i] % 2 !== 0){
            result.push(arr[i])
        }
        i++
    }
    return result;
}
var nums= [1,2,3,8,9];
console.log(oddArray(nums))
*/
/*
var nums= [1,2,3,8,9];
function isOdd(array, oddArr = []) {
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        oddArr.push(array[i]);
    }
}
return oddArr;
}
const oddArray = isOdd(nums);
console.log(oddArray);
*/
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function aveArray(arr){
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum / arr.length
}
var nums= [1,2,3,8,9]
console.log(aveArray(nums))
var nums2= [1,2,3,8,9,77]
console.log(aveArray(nums2))
*/

/*
var nums= [1,2,3,8,9]

var sum = 0;
for (var number of nums) {
    sum += number;
}
average = sum / nums.length;
console.log(average);
*/

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(
strings.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
})
)
*/
/*
function shorterInArray(arr){
    let shorter = arr[0] ;
    for(let i = 0 ; i < arr.length ; i++){
        if (shorter.length > arr.length) {
            shorter=arr[i];
        }
    }
    return shorter;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings))
*/
/*
function shorterInArray(arr){
    let shorter = arr[0] ;
    let i = 0 ;
    while (i < arr.length){
        if (shorter.length > arr[i].length) {
            shorter=arr[i];
        }
        i++ ;
    }
    return shorter
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings))
*/
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function repeatChar(string ,char){
    let repeat = 0 ;
    for( let i = 0 ; i < string.length ;i++){
        if (string[i] == char ){
            repeat++;
        }
    }
    return repeat
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string ,'a'))
console.log(repeatChar(string ,'z'))
*/
/*
function  repeatChar(string ,char){
    let repeat = [0] ;
    let i = 0 ;
    while (i < string.length){
        if (string[i] == char ){
            repeat++;
        }
        i++ ;
    }
    return repeat
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string ,'a'))
console.log(repeatChar(string ,'z'))
*/

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/*
function evenIndexOddLength(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i].length % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));
*/
/*
function evenIndexOddLength(arr){
    let result = []
    let i = 0;
    while ( i < arr.length){
        if (i % 2 == 0 && arr[i].length % 2 == 1) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));
*/

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function powerElementIndex(arr){
    let result=[]
    for (let i = 0 ; i < arr.length ; i++){
        result.push(arr[i] ** i);
    }
    return result;
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums))
*/
/*
function powerElementIndex(arr){
    let result=[]
    let i = 0;
    while( i < arr.length){
        result.push(arr[i] ** i);
        i++;
    }
    return result;
}

var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums))
*/
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function evenNumberEvenIndex(arr){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        if (i % 2 == 0 && arr[i] % 2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums))
*/
/*
function evenNumberEvenIndex(arr){
    let result = [];
    let i = 0;
    while( i < arr.length){
        if( i % 2 == 0 && arr[i] % 2 == 0){
            result.push(arr[i])
        }
        i++;
    }
    return result;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums))
*/

/*
While Exercises
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
/*
function subtract(n){
    let result = n ;
    let i = n - 1 ;
    while ( i >= 0){
        result -=i;
        --i;
    }
    return result;
}
console.log(subtract(2))
console.log(subtract(5))
console.log(subtract(9))
*/
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
/*
function factorial(n){
    let i = n ;
    while ( i > 2 ){
        i = i - 1 ;
        i--;
    }
    return i;
}
console.log(factorial(2))
console.log(factorial(4))
*/

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
/*
function repeatStr(string, number) {
    var repeatedString = "";
    while (number > 0) {
        repeatedString += string;
        number--;
    }
    return repeatedString;
}
console.log(repeatStr("to ", 2))
console.log(repeatStr("to ", 4))
*/

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
/*
function sum2 ( p1 , p2 ){
    let sum  = 0 ;
    while ( p1 <= p2 ){
        sum += p1++ ;
    }
    return sum;
}
console.log(sum2(4,5))
console.log(sum2(3,6))
*/

/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
/*
function multiOf( p1 , p2 , p3){
    let i = 0;
    let number = 1;
    while ( i < p3) {
        number *= p2 ;
        i++;
    }
    return p1 * number;
}
console.log(multiOf(4,10,3))
console.log(multiOf(6,3,2))
console.log(multiOf(6,2,3))
*/

/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
/*
function muti2(p1 , p2){
    let muti = 1 ;
    while (p1 <= p2){
        muti *= p1++;
    }
    console.log(muti)
}
muti2(4, 5);
muti2(3, 6);
*/
/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
/*
var lowEnd = 2;
var highEnd = 8;
var list = [];
var i = lowEnd + 1;
while ( i < highEnd  ) {
    list.push(i);
    i++
}
console.log(list);
*/
/*
function numberBetweenUs(n1 , n2){
    var list = [];
    var i = n1 + 1
    while( i < n2 ){
        list.push(i)
        i++;
    }
    console.log(list)
}
numberBetweenUs(2,8);
numberBetweenUs(1,3);
*/

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
/*
function countDown (p1){
    let i = p1;
    let text = ' '
    while (i >= 0){
        if (i != 0){
            text += i+ ' , ';
        }
        else{
            text +='done'
        }
        i--;
    }
    console.log(text)
}
countDown(5)
countDown(7)
*/

//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

/*
function doubleValues (array){
    let double = []
    for (let i = 0 ; i < array.length ; i++){
        double.push(array[i]*2);
    }
    console.log(double)
}
doubleValues([1,2,3])
doubleValues([5,1,2,3,10])  
*/

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
/*
function onlyEvenValues(arr){
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i]) ;
        } 

        
    }
    console.log(arr2)
}
onlyEvenValues([1,2,3]) 
onlyEvenValues([5,1,2,3,10]) 

*/
/*function onlyEvenValues(arr){
    const arr2 = [];
    arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
    });
return arr2;
}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));
*/

/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
/*
function showFirstAndLast(arr) {
    //Your Code Here
    let firstAndLast = [];
    for (let i = 0; i < arr.length; i++)
        firstAndLast.push(arr[i][0] + arr[i][arr[i].length - 1]);

    return firstAndLast;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']))
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']))
*/

/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
/*
function addKeyAndValue(arr, key, value) {
    for (i = 0; i < arr.length; i++) {
    obj = arr[i];
    obj[key] = value;
    }
    return arr;
    }
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))
*/

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

/*

function vowelCount(string){
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        switch(true){

            case string[i] == 'a' || string[i] =='A':
            obj.a= obj.a?obj.a++:1;
            break;
            case string[i] == 'e' || string[i] =='E':
            obj.e= obj.e?obj.e++:1;
            break;
            case string[i] == 'i' || string[i] =='I':
            obj.i= obj.i?obj.i++:1;
            break;
            case string[i] == 'o' || string[i] =='O':
            obj.o= obj.o?obj.o++:1;
            break;
            case string[i] == 'u' || string[i] =='U':
            obj.u= obj.u?obj.u++:1;
            break;
        }
    }
    console.log(obj)
}
vowelCount('Elie') 
vowelCount('Tim') 
vowelCount('Matt') 
vowelCount('hmmm') 
vowelCount('I Am awesome and so are you')*/
