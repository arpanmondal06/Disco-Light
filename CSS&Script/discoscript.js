function randomcolor(){
    const hex = '0123456789ABCDEF'
    let colorcode = '#'
    for (let i = 0; i < 6; i++) {
        colorcode += hex[Math.floor(Math.random()*16)]
        
    }
    return colorcode
}
let interval
document.querySelector('#start').addEventListener('click', () => {
    function changebgcolor(){
        document.body.style.backgroundColor = randomcolor()
    }
    if(!interval){
        interval = setInterval(changebgcolor, 100)
    }
})

document.querySelector('#stop').addEventListener('click', ()  => {
    clearInterval(interval)
    interval = null
})

document.getElementById('refresh').addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})