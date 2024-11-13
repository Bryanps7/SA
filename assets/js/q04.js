let pilha = []

function gerarPilha(){
    let cont = 0
    for(let i = 0; i < 5; i++){
        cont++
        pilha.push(cont)
        console.log(pilha)
    }
}

function desfazerPilha(){
    let cont = 0
    for(let i = 0; i < 5; i++){
        cont++
        pilha.pop()
        console.log(pilha)
    }
}

gerarPilha()
desfazerPilha()
