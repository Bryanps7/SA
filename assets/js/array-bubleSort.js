function setArrayRandom(max, min, tam) {
    let randomArray = []
    for(let i = 0; i < tam; i++) {
        const random = Math.floor(Math.random() * (max - min + 1) + min)
        randomArray.push(random)
    }
    return randomArray;
}

let pushNumberBub = document.querySelector('#getBub')

function bubbleSort (array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                let swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap
            }
        }

    }
    return array
}

pushNumberBub.addEventListener('click', ()=>{
    let display = document.querySelector('#execute-Bub')
    let array = setArrayRandom(50, 1, 10)
    display.innerHTML = `A Array Sorteada é: ${array}!. <br>`
    let arrayOrganized = []

    arrayOrganized = bubbleSort(array)

    display.style.display = 'flex'
    display.innerHTML += `Organizada: ${arrayOrganized}.`
})

let showCodeBub = document.querySelector('#showBub')
let showFluxoBub = document.querySelector('#fluxoBub')

showCodeBub.addEventListener('click', ()=>{
    showScreen('code-Bub')
})    

showFluxoBub.addEventListener('click', ()=>{
    showScreen('fluxo-Bub')
})

function showScreen(type) {
    let screen = document.querySelector(`#${type}`).style
    if(screen.display == 'none') {
        screen.display = 'flex'
    } else {
        screen.display = 'none'
    }
}