// let arr1 = [2,6,8,9]
// let arr2 = [1,3,5,7]
// let margeArr = []

// let a = 0
// let b = 0
// let c = 0
// while(a<arr1.length && b<arr2.length){
//     if(arr1[a]<arr2[b])
//     {
//         margeArr[c]=(arr1[a])
//         a++
//     }
//     else{

//         margeArr[c] = (arr2[b])
//         b++
//     }
//     c++
// }

// while(a<arr1.length){
//     margeArr[c]=(arr1[a])
//         a++
//         c++
// }
// console.log(margeArr)



function marge(a,b){
    let res = []
    let i = 0
    let j = 0
    
    while(i<a.length && j<b.length){
        if(a[i] <= b[j]){
            res.push(a[i])
            i++
        }

        else{
            res.push(b[j])
            j++
        }
    }
    while(i<a.length)
    {
        res.push(a[i])
        i++
    }

    while(i<b.length)
    {
        res.push(a[i])
        j++
    }
    return res
}


function mergeSort(a)
{
    if(a.length <= 1)
    {
        return a
    }

    let mid = Math.floor((a.length -1 )/2)
    let left = mergeSort((a.slice(0,mid+1)))
    let right = mergeSort((a.slice(mid+1)))

    return mergeSort(left, right)
}

let ans = mergeSort((9,5,1,2,8,99,100,0,-999))
console.log(ans)