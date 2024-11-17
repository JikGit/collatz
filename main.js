function creaArray(A){
    arr = []
    for(i of A){
        num = []
        while(i > 1){
            num.push(i)
            if(i % 2){
                i = i*3 + 1
            }else{
                i =i/2
            }
        }
        num.push(1)
        arr.push(num)
    }
    return arr
}

console.log(creaArray([24,21,40]))


function TransAlbero(){
    
}