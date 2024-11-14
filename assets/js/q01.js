let matriz7 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let matriz5 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let matrizSum = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

function setMatriz(arrayP, numP, arrayS, numS) {
    for (let i = 0; i < arrayP.length; i++) {
        for (let j = 0; j < arrayP.length; j++) {
            if (i == j) {
                arrayP[i][j] = numP
            }
            if (i + j == arrayS.length - 1) {
                arrayS[i][j] = numS
            }
        }
    }
}

function sumMatriz(arraySum, array1, array2) {
    for (let i = 0; i < arraySum.length; i++) {
        for (let j = 0; j < arraySum.length; j++) {
            arraySum[i][j] = array1[i][j] + array2[i][j]
        }
    }
}

let pushNumberEx1 = document.querySelector('#getEx1')

pushNumberEx1.addEventListener('click', () => {
    let screen = document.createElement('div')

    screen.setAttribute('id', 'execute-ex1')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex'

    setMatriz(matriz7, 7, matriz5, 5)
    console.table(matriz7)
    console.table(matriz5)
    sumMatriz(matrizSum, matriz7, matriz5)

    screen.innerHTML = `Soma das Matrizes: <br>`

    for (let i = 0; i < matrizSum.length; i++) {
        screen.innerHTML += `[ ${matrizSum[i].join(', ')} ] <br>`
    }

    let existingScreen = document.querySelector('#execute-ex1')
    if (existingScreen) {
        document.querySelector('#ex1').removeChild(existingScreen)
    }
    document.querySelector('#ex1').appendChild(screen)
})