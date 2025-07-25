// Sum of several arrays
// You will be given an array of several arrays that each contain integers and
// your goal is to write a function that will sum up all the numbers in all 
// the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then 
// your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22

// let arr = [[3,2], [1],[4,12]]

// function sumArray(arr){
//     let sum = 0
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j<arr[i].length; j++){
//             sum +=arr[i][j];
//         }
//     }
//     console.log(sum)
// }

// sumArray(arr)

// let arr = [1, 2, 3, 4, 5]
// let target = 3;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//         for (let j = i; j < arr.length; j++) {
//             arr[j] = arr[j + 1]
//         }
//     }

// }
// arr.length = arr.length - 1
// console.log(arr)

// let arr = [1,3,4,7,5,9,10]
// let add = 45
// let idx = 3

// for (let i=arr.length-1; i>idx; i--) {
//     arr[i+1] = arr[i]
// }
// arr[idx] = add
// console.log(arr)


// function delay_counting(num){
//     for(let i = 1; i<=num; i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }

// }
// delay_counting(5)



// Longest String
// You want to implement a function that takes an array of strings and 
// returns the longest string in the array.

// Input Format
// An array of strings arr such that 1 <= arr.length <= 10^5. Each string in
// arr has length 1 <= str.length <= 100.

// Output Format
// A string representing the longest string in arr.


// let arr = ["ant", "mant","santa", "rent"]

// function longestString(arr){
//     let ans = arr[0]
//     for(let i = 0; i<arr.length; i++){
//         if(ans.length<arr[i].length){
//             ans = arr[i+1]
//         }
//     }
//     console.log(ans)
// }

// longestString(arr)



// Implement getObjKeys() which only takes one argument which will be a object.
// Input Format
// Function will take one argument which will be an object.
// Output Format
// Function will print string which contain all the keys from the input object seperated by a ', '.

// function getObjKeys(obj){
//     for(key in obj){
//         console.log(key)
//     }
// }

// getObjKeys({name:"Sudhir", age:"23"})

// const user = {
//     name: "Sudhir",
//     age: 24,
//     city: "Delhi"
// };

// const keys = Object.keys(user);
// return keys;


// Find Digit Sum
// Given the number n, find out and return the sum of digits present in a number recursively.
// Input Format
// Input consists of single line which has the integer n.
// Output Format
// Return the sum of digits present in n.

// let n = 1256
// function sumofDigit(n){
//     let ans = 0
//     while(n>0){
//         ans += n%10
//         n = Math.floor(n/10)
//     }
//     console.log(ans)
// }
// sumofDigit(n)


// function searchSortedMatrix(matrix, target) {
//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (row < matrix.length && col >= 0) {
//     if (matrix[row][col] === target) {
//       return true;
//     } else if (matrix[row][col] > target) {
//       col--;
//     } else {
//       row++; 
//     }
//   }

//   return false;
// }

// const sortedMatrix = [
//   [1, 3, 5],
//   [7, 9, 11],
//   [13, 15, 17]
// ];

// console.log(searchSortedMatrix(sortedMatrix, 11));


