function showScreen(type) {
    let screen = document.querySelector('#'+type).style
    if(screen.display == 'none') {
        screen.display = 'flex'
    } else {
        screen.display = 'none'
    }
}