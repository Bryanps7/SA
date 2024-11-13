let fila = []
let matriz = [[0,0,0],
              [0,0,0],
              [0,0,0]]

function gerarFila(){
    let cont = 0
    for(let i = 0; i < 9; i++){
        cont++
        fila.push(cont)
        console.log(fila)
    }
}

function converter(){ // converter a fila em uma matriz 
    for(let i=0; i < 3; i++){
        for(let j=0; j< 3; j++){
           matriz[i][j] = fila.shift()
           console.table(matriz) 
        }
    }    
}

gerarFila()
converter()
