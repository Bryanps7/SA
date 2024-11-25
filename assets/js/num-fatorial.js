function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

let pushNumberFat = document.querySelector('#getFat')

pushNumberFat.addEventListener('click', ()=>{
    let screen = document.createElement('div')
    
    screen.setAttribute('id', 'execute-fat')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex'

    let number = setValueRandom(50, 1)
    let arrayFatorial = []
    let fatorial = 1

    let cont = number
    while(cont > 0) {
        arrayFatorial.push(cont)
        fatorial *= cont
        cont--
    }

    screen.innerHTML = `O número sorteado é: ${number}! <br>`
    screen.innerHTML += `Seu fatorial é: ${fatorial}. <br>`
    screen.innerHTML += `Cálculo: ${number}! = ${arrayFatorial.join(' * ')} = ${fatorial}`

    let existingScreen = document.querySelector('#execute-fat')
    if(existingScreen) {
        document.querySelector('#page2').removeChild(existingScreen)
    }
    document.querySelector('#page2').appendChild(screen)
})