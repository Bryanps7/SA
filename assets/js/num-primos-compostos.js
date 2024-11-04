function setValueRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
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