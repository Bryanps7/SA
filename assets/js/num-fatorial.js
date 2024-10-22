function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

let pushNumberFat = document.querySelector('#getFat')

pushNumberFat.addEventListener('click', ()=>{
    let display = document.querySelector('#execute-Fat')
    let number = setValueRandom(50, 1)
    let arrayFatorial = []
    let fatorial = 1

    for(let i = number; i >= 1; i--) {
        arrayFatorial.push(i)
        fatorial *= i
    }

    display.style.display = 'flex'
    display.innerHTML = `O número sorteado é: ${number}!. <br>`
    display.innerHTML += `Seu fatorial é: ${fatorial}. <br>`
    display.innerHTML += `Cálculo: ${number}! = ${arrayFatorial.join(' * ')} = ${fatorial}`
})

let showCodeFat = document.querySelector('#showFat')
let showFluxoFat = document.querySelector('#fluxoFat')

showCodeFat.addEventListener('click', ()=>{
    showScreen('code-Fat')
})    

showFluxoFat.addEventListener('click', ()=>{
    showScreen('fluxo-Fat')
})

function showScreen(type) {
    let screen = document.querySelector(`#${type}`).style
    if(screen.display == 'none') {
        screen.display = 'flex'
    } else {
        screen.display = 'none'
    }
}