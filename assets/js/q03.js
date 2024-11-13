let matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

let soma = 0

function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

function createMatriz() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            matriz[i][j] = setValueRandom(50, 1)
        }
    }
    console.table(matriz)
}

function sum() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 1) {
                soma += matriz[i][j]
            }
        }
    }
    console.log('soma os elmentos das colunas ímpares = ', soma)
}