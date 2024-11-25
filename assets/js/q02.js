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

function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

function createMatriz(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = setValueRandom(50, 1)
        }
    }
}

function sum(array) {
    let aux = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] % 2 == 1) {
                aux += array[i][j]
            }
        }
    }
    return aux
}

let pushNumberEx2 = document.querySelector('#getEx2')

pushNumberEx2.addEventListener('click', ()=>{
    let screen = document.createElement('div')
    
    screen.setAttribute('id', 'execute-ex2')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex'
    
    createMatriz(matriz)
    console.table(matriz)
    let soma = sum(matriz)

    screen.innerHTML = ``

    for(let i = 0; i < matriz.length; i++) {
        screen.innerHTML += `[ ${matriz[i].join(', ')} ] <br>`
    }
    screen.innerHTML += `<br> Soma dos Elementos Ímpares: ${soma}`
    
    let existingScreen = document.querySelector('#execute-ex2')
    if(existingScreen) {
        document.querySelector('#page5').removeChild(existingScreen)
    }
    document.querySelector('#page5').appendChild(screen)
})