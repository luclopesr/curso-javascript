function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#foto')
    var data = new Date()
    var hora = corrigirHorario(data.getHours())
    var min = corrigirHorario(data.getMinutes())
    var sec = corrigirHorario(data.getSeconds())

    msg.innerHTML = `Agora são ${hora}:${min}:${sec}!`

    if (hora >= 0 && hora <12) {
        img.innerHTML = '<img src="manha.png" alt="Foto do dia">'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="tarde.png" alt="Foto da tarde">'
        document.body.style.backgroundColor = '#fe7202'
    } else {
        img.innerHTML = '<img src="noite.png" alt="Foto da noite">'
        document.body.style.backgroundColor = '#013e3e'
    }
}

function corrigirHorario(num) {
    if (num < 10) {
        num = '0' + num
    }

    return num
}

setInterval(carregar, 100)