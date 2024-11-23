function setArrayRandom(max, min, tam) {
    let randomArray = []
    for(let i = 0; i < tam; i++) {
        const random = Math.floor(Math.random() * (max - min + 1) + min)
        randomArray.push(random)
    }
    return randomArray;
}

function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

let pushNumberSort = document.querySelector('#getSort')

function bubbleSort(array) {
    let cont = 0
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let guard = array[i]
                array[i] = array[i + 1]
                array[i + 1] = guard
            }
            cont++
        }
    }
    return cont++
}

function bubbleInvert(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                let guard = array[i]
                array[i] = array[i + 1]
                array[i + 1] = guard
            }
        }
    }
    return array
}

function selectionSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let menor = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = array[i]
            array[i] = array[menor]
            array[menor] = guard
        }
    }
    return cont
}

function selectionInvert(array) {
    for (let i = 0; i < array.length; i++) {
        let menor = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[menor]) {
                menor = j
            }
        }
        if (i != menor) {
            let guard = array[i]
            array[i] = array[menor]
            array[menor] = guard
        }
    }
    return array
}

function insertSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        let guard = array[i]
        while (j >= 0 && guard < array[JSON]) {
            array[j + 1] = array[j]
            j--
        }
        cont++
        array[j + 1] = guard
    }
    return cont
}

function insertInvert(array) {
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        let guard = array[i]
        while (j >= 0 && guard > array[JSON]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = guard
    }
    return array
}

pushNumberSort.addEventListener('click', ()=>{
    let screen = document.createElement('div')
    
    screen.setAttribute('id', 'execute-sort')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex' 

    let array = setArrayRandom(50, 1, 10)
    screen.innerHTML = `A Array Sorteada é: [ ${array.join(', ')} ]. <br>`
    
    let bubble = array, selection = array, insert = array

    let bubbleCont = bubbleSort(bubble)
    let selectionCont = selectionSort(selection)
    let insertCont = insertSort(insert)

    screen.innerHTML += `Array Organizada crescente: [ ${array.join(', ')} ]. <br>`
    screen.innerHTML += `Array Organizada descrescente: [ ${bubbleInvert(array).join(', ')} ]. <br>`
    screen.innerHTML += `Voltas com bubble: ${bubbleCont}. <br>`
    screen.innerHTML += `Voltas com selection: ${selectionCont}. <br>`
    screen.innerHTML += `Voltas com insert: ${insertCont}. <br>`

    let existingScreen = document.querySelector('#execute-sort')
    if (existingScreen) {
        document.querySelector('#page3').removeChild(existingScreen)
    }
    document.querySelector('#page3').appendChild(screen)
})