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

    let cont = number
    while(cont > 0) {
        arrayFatorial.push(cont)
        fatorial *= cont
        cont--
    }

    display.style.display = 'flex'
    display.innerHTML = `O número sorteado é: ${number}! <br>`
    display.innerHTML += `Seu fatorial é: ${fatorial}. <br>`
    display.innerHTML += `Cálculo: ${number}! = ${arrayFatorial.join(' * ')} = ${fatorial}`
})