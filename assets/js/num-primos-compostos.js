function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

function showScreen(type) {
    let screen = document.querySelector(`#${type}`).style
    if(screen.display == 'none') {
        screen.display = 'flex'
    } else {
        screen.display = 'none'
    }
}

let pushNumberNPC = document.querySelector('#getNPC')

pushNumberNPC.addEventListener('click', ()=>{
    let display = document.querySelector('#execute-NPC')
    let number = setValueRandom(100, 1)
    let divisible = []
    let given = ''

    for(let i = 0; i <= number; i++) {
        if(number % i == 0) {
            divisible.push(i)
        }
    }

    if(divisible.length > 2) {
        given = "Composto"
    } else {
        given = 'Primo'
    }

    display.style.display = 'flex'
    display.innerHTML = `O número sorteado é: ${number}. <br>`
    display.innerHTML += `O número é: ${given}. <br>`
    display.innerHTML += `Seus divisores são: [ ${divisible.join(', ')} ]`
})

let showCodeNPC = document.querySelector('#showNPC')
let showFluxoNPC = document.querySelector('#fluxoNPC')

showCodeNPC.addEventListener('click', ()=>{
    showScreen('code-NPC')
})    

showFluxoNPC.addEventListener('click', ()=>{
    showScreen('fluxo-NPC')
})


