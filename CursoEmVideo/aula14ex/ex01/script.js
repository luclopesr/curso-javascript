function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        if (passo.value <= 0) {
            passo.value = 1
            alert('Passo igual a 0. Considerando passo igual a 1!')
        }

        if (Number(inicio.value) < Number(fim.value)) {
            for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`

    }
}