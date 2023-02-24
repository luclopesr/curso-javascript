function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length < 4 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (sex[0].checked) {
            genero = 'HOMEM'
            document.body.style.backgroundColor = 'lightblue'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }

        } else if (sex[1].checked){
            genero = 'MULHER'
            document.body.style.backgroundColor = 'lightpink'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} ANOS`
        res.appendChild(img)
    }

}