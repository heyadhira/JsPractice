let arr1 = [2,6,8,9]
let arr2 = [1,3,5,7]
let margeArr = []

let a = 0
let b = 0
let c = 0
while(a<arr1.length && b<arr2.length){
    if(arr1[a]<arr2[b])
    {
        margeArr[c]=(arr1[a])
        a++
    }
    else{

        margeArr[c] = (arr2[b])
        b++
    }
    c++
}

while(a<arr1.length){
    margeArr[c]=(arr1[a])
        a++
        c++
}
console.log(margeArr)
