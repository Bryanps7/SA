function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

let pushNumberNPC = document.querySelector('#getNPC')

pushNumberNPC.addEventListener('click', ()=>{
    let screen = document.createElement('dive')
    
    screen.setAttribute('id', 'execute-NPC')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex'

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

    screen.innerHTML = `O número sorteado é: ${number}. <br>`
    screen.innerHTML += `O número é: ${given}. <br>`
    screen.innerHTML += `Seus divisores são: [ ${divisible.join(', ')} ]`

    if(document.querySelector('#execute-NPC')) {
        document.querySelector('#npc').removeChild(screen)
    }
    document.querySelector('#npc').appendChild(screen)
})