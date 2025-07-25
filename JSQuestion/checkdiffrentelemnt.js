let arr = ["danish", "adhira", "sudhir", "modiji"]

let target = "adhera"

for(item of arr){
    let count = 0
    for(let i = 0; i<target.length; i++){
        if(item[i] !=target[i] ){
            count++
        }
    }
    if(count == 1){
        console.log(item)
    }
}