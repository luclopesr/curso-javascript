var num = []
var res = document.getElementById('res')
var n = document.getElementById('numero')

function adicionar() {
    var numero = Number(n.value)

    if (n.value.length == 0) {
        alert('Para adicionar, por favor, digite um número.')
    } else if (num.indexOf(numero) != -1 || !(numero <= 100 && numero >= 1)){
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        var sel = document.getElementById('sel')

        num.push(numero)
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        sel.appendChild(item)

        res.innerHTML = ''
    }
    n.value = ''
    n.focus()
}


function calcular() {
    if (num.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        var soma = 0
        var maior = num[0]
        var menor = num[0]

        for (let pos in num) {
            soma = soma + num[pos]

            if (num[pos] > maior) {
                maior = num[pos]
            }
            if (num[pos] < menor) {
                menor = num[pos]
            }
        }

        var media = soma/(num.length)

        res.innerHTML = `Ao todo, temos <strong>${num.length}</strong> números cadastrados.<br>O maior valor informado foi <strong>${maior}</strong>.<br>O menor valor informado foi <strong>${menor}</strong>.<br>Somando todos os valores, temos <strong>${soma}</strong>.<br>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>`
    }
    
}

function limpar() {
    sel.innerHTML = ''
    res.innerHTML = ''
    num = []
}