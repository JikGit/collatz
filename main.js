
function creaArray(A){
    let arr = []
    for(let i of A) {
        let num = []
        while(i > 1){
            num.push(i)
            if(i % 2)   i = i*3 + 1
            else        i =i/2
        }
        num.push(1)
        arr.push(num)
    }
    return arr
}

// console.log(creaArray([24,21,40]))

function transAlbero(A){
    let graph = {} 
    
    for (let arr of A) {

        let i = arr.length;
        //aggiunge elementi dell'array in un albero
        var createGraph = (graph) => {
            if (i-- < 0)    return
            if (graph.val) {
                if (graph.dx)
                    if (graph.dx.val === arr[i-1])
                        createGraph(graph.dx)
                    else{
                        graph.sx = {}
                        createGraph(graph.sx)
                    }
                else{
                    createGraph(graph.dx)
                    graph.dx = {}
                }
            }else {
                graph.val = arr[i]
                graph.dx = {}
                createGraph(graph.dx)
            }
        }
        createGraph(graph)
    }

    return graph;
}

console.log(JSON.stringify(transAlbero([[40,20,10,5,16,8,4,2,1], [24,12,6,3,10,5,16,8,4,2,1], [21,64,32,16,8,4,2,1]]), null, 4))
// console.log(JSON.stringify(transAlbero([[5,4,3,2,1], [4,3,2,1], [3,2,1]]), null, 4))
