// 1. First Non-Repeating Character
// Return the first character in a string that doesn’t repeat.

// Input: "javascript"
// Output: "j"

// const firstNonRepeatingChar = (str) =>{
//   let freq = {}
//   for(char of str){
//     if(freq[char]){
//       freq[char] = freq[char]+1
//     }

//     else{
//       freq[char] = 1
//     }
//   }

//   for(char of str){
//     if(freq[char] == 1){
//       return char
//     }
//   }

// }

// console.log(firstNonRepeatingChar("javascript"))


// 2. Reverse a String

// const reversString = (str) =>{
//   revStr = ''
//   for(char of str){
//     revStr = char + revStr
//   }
//   return revStr
// }

// console.log(reversString("javaScript"))

// function revString(str){
//   let revStr = ''
//   for(let i = str.length-1; i>=0; i--){
//     revStr += str[i]
//   }
//   console.log(revStr)
// }

// revString("javaScript")



// 3. Check for Palindrome

// const checkPalindrome = (str) => {
//     let si = 0;
//     let ei = str.length-1
//     str = str.toLowerCase()
//     while(si<ei){
//         if(str[si]!= str[ei]){
//             return "Not a Palindrome"
//         }
//         si++
//         ei--
//     }
//     return "Palindrome"
// }

// console.log(checkPalindrome("Madam"))


// 4. Find Duplicates in Array

// const findDuplicates = (arr) => {
//     let freq = {}
//     let duplicates = []

//     for(let i = 0; i<arr.length; i++){
//         let value = arr[i]
//         if(freq[value] == 1){
//             duplicates.push(value)
//             freq[value]++
//         }

//         else{
//             freq[value] = 1
//         }
//     }
//     return duplicates

// }

// console.log(findDuplicates([1, 2, 2, 3, 1]))

// function duplicatesArr(arr){
//     let freq = {}
//     let duplicateArr = []
//     for(char of arr){
//         if(freq[char]){
//             freq[char]++
//             if(!duplicateArr.includes(char))
//             duplicateArr.push(char)
//         }

//         else{
//             freq[char] = 1
//         }

//     }
//     return duplicateArr
    
// }

// console.log(duplicatesArr([1, 2, 2, 3, 1, 2]))

// 5. Flatten a Nested Array
// let arr = [1, [2, [3, 4], 5], 6]
// console.log(arr.flat(2))

//  6. Fibonacci Series (Iterative)

// const fibonacciSeries = (n) =>{
//     let fib = [0,1]
//     for(let i = 2; i<n; i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib
// }

// console.log(fibonacciSeries(5))


//  7. Anagram Check

// const checkAnagram = (str1, str2) => {
//     if(str1.length !== str2.length){
//         return "not a Anagram"
//     }
//     let arrStr1 = []
//     let arrStr2 = []
//     for(let i = 0; i<str1.length; i++){
//         arrStr1[i] = str1[i]
//         arrStr2[i] = str2[i]
//     }
//     arrStr1.sort()
//     arrStr2.sort()

//     for(let j = 0; j<arrStr1.length; j++){
//         if(arrStr1[j]!==arrStr2[j]){
//             return "not a Anagram"
//         }
//     }

//     return "isAnagram"
// }

// console.log(checkAnagram("listen", "silent"))

//  8. Count Vowels in a String

// function countVowels(str) {
//   let count = 0;
//   const vowels = 'aeiouAEIOU';

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("Hello World"));

// const countVowels = (str) =>{
//     let count = 0
//     str.toLowerCase()

//     for(let i = 0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             count++
//         }
//     }

//     return count
// }
// console.log(countVowels("Hello Sudhir"))

// 9. Array Chunking

const arrChunk = (arr,size) =>{
    let result = []

    for(let i = 0; i<arr.length; i+=size){
        let chunk = []
        
        for(let j = i; j<i+size && j<arr.length; j++){

            chunk.push(arr[j])
        }
        result.push(chunk)
    }
    return result
}

console.log(arrChunk([1,2,3,4,5],2))



// 10. Debounce Function Implementation


