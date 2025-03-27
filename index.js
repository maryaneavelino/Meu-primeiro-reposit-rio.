let titulo = document.querySelector('h1')
let ultimo_paragrafo = document.querySelector('#p')

titulo.addEventListener('mouseover', () => {
    ultimo_paragrafo.innerHTML = '<button>Mude o título</button>'
})

ultimo_paragrafo.addEventListener('click', () => {
    titulo.style.color = "white"
    titulo.style.textAlign = 'center'
    titulo.style.fontFamily = 'cursive'
    titulo.style.fontSize = '480%'
    titulo.style.webkitTextStroke= '4px pink'
    titulo.style.border = '4px solid pink'
    titulo.style.borderRadius = '16px'
    titulo.style.backgroundImage = 'url(strawberry.WEBP)'
    titulo.style.padding = 'px30'
})


