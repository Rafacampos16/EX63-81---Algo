let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrNumero = []

function calcular(){
    let numero = document.getElementById('numero').value

    arrNumero.push(numero)

    for(let i = 0; i < arrNumero.length; i++){
        div.innerHTML += arrNumero[i]
    }
}

btn.addEventListener('click', calcular)