// const factorial = (n) => {
//     let fact = n
//     for(let i = n; i>1; i--){
//         fact *=(i-1)
//     }
//     return fact
// }

// console.log(factorial(5))

// 1️⃣ Factorial of a Number
// Write a function to calculate the factorial of a number using recursion.

// 📥 Input: 5
// 📤 Output: 120 (because 5×4×3×2×1 = 120)

// function factorial(n){
//     if(n===0||n===1){
//         return 1
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// 2️⃣ Fibonacci Number
// Return the nth Fibonacci number using recursion.

// 📥 Input: 6
// 📤 Output: 8

// const fibonacci = (n) =>{
//     if(n===0) return 0;
//     if(n===1) return 1;

//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(6))


// 3️⃣ Sum of Digits
// Find the sum of all digits of a number using recursion.

// 📥 Input: 1234
// 📤 Output: 10 (1+2+3+4)
// function sumOfDigit(n){
//     if(n<10) return n
//     return (n%10) + (sumOfDigit(Math.floor(n/10)))
// }

// console.log(sumOfDigit(1234))


// 4️⃣ Count Digits
// Count the number of digits in a number using recursion.

// 📥 Input: 1256
// 📤 Output: 4

// function count(n){
//     if(n<10) return 1

//     return 1 + count(Math.floor(n/10))
// }

// console.log(count(1234))


// 5️⃣ Print Numbers from N to 1
// Print numbers from n to 1 using recursion.

// 📥 Input: 5
// 📤 Output: 5 4 3 2 1

// function NtoOne(n){
//     if(n===0) return;
//     console.log(n)
//     return NtoOne(n-1)
// }
// NtoOne(5)

// 6️⃣ Print Numbers from 1 to N
// Print numbers from 1 to n using recursion.

// 📥 Input: 5
// 📤 Output: 1 2 3 4 5

// function oneToN(n){
//     if(n===0)return 
//     oneToN(n-1)
//     console.log(n)
// }
// oneToN(5)


// 7️⃣ Reverse a String
// Reverse a string using recursion.

// 📥 Input: "hello"
// 📤 Output: "olleh"

// function revString(str){
//     revStr = ''
//     for(let char  of str) {
//         revStr = char+revStr
//     }
//     console.log(revStr)
// }
// revString('hello')

// function revStr(str){
//     if(str.length === 0) return ""
//     return revStr(str.slice(1))+str[0]
// }
// console.log(revStr("Hello"))

// 8️⃣ Check Palindrome String
// Check if a string is a palindrome using recursion.

// 📥 Input: "madam"
// 📤 Output: true

function isPalindrome(str, si=0, ei=str.length-1){
    if(si>ei) return true
    if(str[si]!==str[ei]) return false

    return isPalindrome(str,si+1,ei-1)
}

console.log(isPalindrome("madam"))

// 9️⃣ Power of a Number
// Calculate a^b using recursion.

// 📥 Input: 2^4
// 📤 Output: 16

// 🔟 Find GCD (Greatest Common Divisor)
// Find the GCD of two numbers using recursion.

// 📥 Input: GCD(48, 18)
// 📤 Output: 6