let queue = []

let matriz3x3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let pushNumberEx5 = document.querySelector('#getEx5')

pushNumberEx5.addEventListener('click', ()=>{
    let screen = document.createElement('div')
    
    screen.setAttribute('id', 'execute-ex5')
    screen.setAttribute('class', 'screen')
    screen.style.display = 'flex'
    
    screen.innerHTML = ``
    
    for (let i = 1; i <= 9; i++) {
        setTimeout(()=>{
            queue.push(i)
            screen.innerHTML += `[ ${queue.join(', ')} ] <br>`
        }, 1000 * i)
    }
    
    setTimeout(()=>{
        let count = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matriz3x3[i][j] = queue[count]
                count++
            }
        }
        
        screen.innerHTML += `<br>`
    }, 9000)

    for(let i = 0; i < matriz3x3.length; i++) {
        setTimeout(()=>{
            screen.innerHTML += `[ ${matriz3x3[i].join(', ')} ] <br>`
        }, 9000 + (i*1000))
    }
        
    let existingScreen = document.querySelector('#execute-ex5')
    if(existingScreen) {
        document.querySelector('#ex5').removeChild(existingScreen)
    }
    document.querySelector('#ex5').appendChild(screen)
})