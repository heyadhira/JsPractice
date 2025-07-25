// check prime number

// function checkPrimeNumberr(){
//     for(let i = 2; i<50; i++){
//         let count = 0
//         for(let j = 2; j<50; j++){
//             if(i%j==0){
//                 count++
//             }
//         }
//         if(count == 1){
//             console.log(i)
//         }
//     }
// }


// function checkPrimeNumbers() {
//   for (let i = 2; i < 50; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// checkPrimeNumbers();


// Q find missing element 

// let arr = [1,0,3]

// console.log(arr)    

function findMissing(arr) {
    let n = arr.length + 1; 
    let total = 0
    let sum = 0

    for(let i = 1; i<=n; i++){
        total += i
    }

    for(let j = 0; j<arr.length; j++){
        sum += arr[j]
    }

    return total - sum
}

console.log(findMissing([5,6,8]));

