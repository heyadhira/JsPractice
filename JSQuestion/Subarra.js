// let arr = [1,2,3,4,5]
// let n = 3
// let result = []
// for(let i = 0; i<arr.length; i++){
//     let subArr = []
//     let sum = 0
//     for(let j = i; j<arr.length; j++){
//         subArr.push(arr[j])
//         sum += arr[j] 
//         if(n==sum){
//             result.push(...subArr)
//         }
//     }
// }
// console.log(result)


//count sub Array

// let subArr = [1,2,3,4]
// let count = 0;
// for(let i = 0; i<subArr.length; i++){
//     for(let j = i; j<subArr.length; j++){
//         count++
//     }
// }
// console.log(count)

// 🧩 3. Print all subarrays of a fixed length
// Question:
// Print all subarrays of length 2 in arr = [10, 20, 30, 40].

// let arr = [10,20,30,40]
// for(let i = 0; i<arr.length-1; i++){
//     console.log(arr[i], arr[i+1])
// }


//  4. Subarrays with a specific sum
// Question:
// Print all subarrays from [1, 2, 3, 4, 5] that sum to 5.

// let arr = [1,2,3,4,5]
// let n = 5
// let subArr = []
// for(let i = 0; i<arr.length; i++){
//     let sum = 0;
//     let temp = []
//     for(let j = i; j<arr.length; j++){
//         sum += arr[j]
//         temp.push(arr[j])
//         if(n == sum){
//             subArr.push([...temp])
//         }
//     }
// }
// console.log(subArr)


// 5. Find maximum subarray sum (brute force)
// Question:
// Find the subarray with the maximum sum in [1, -2, 3, 4, -1].

let arr = [1, -2, 3, 4, -1]
let maxSum = -Infinity

for(let i = 0; i<arr.length; i++){
    let sum = 0
    for(let j = i; j<arr.length; j++){
        sum += arr[j]
        if(sum>maxSum){
            maxSum = sum
            
        }
    }
}
console.log(maxSum)