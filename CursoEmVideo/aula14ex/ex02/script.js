function gerar() {
    var num = document.getElementById('numero')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `num${c}`
            res.appendChild(item)

        }
    }
}