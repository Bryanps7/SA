
function melhora(path, size) {
    let scren = document.createElement('div')
    scren.setAttribute('id', 'melhorVisu')

    scren.style.position = 'fixed'
    scren.style.top = '0'
    scren.style.left = '0'
    scren.style.width = '100%'
    scren.style.height = '100%'
    scren.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    scren.style.display = 'flex'
    scren.style.justifyContent = 'center'
    scren.style.alignItems = 'center'

    
    let img = document.createElement('img')
    img.setAttribute('src', path)
    img.setAttribute('class', 'img-none')
    img.setAttribute('onclick', 'sair()')
    img.setAttribute('title', 'Clique novamente para sair')
    img.style.width = size + '%'

    scren.appendChild(img)

    document.querySelector('body').appendChild(scren)
}

function sair() {
    document.querySelector('body').removeChild(document.querySelector('#melhorVisu'))
}