let inputNumero = document.querySelector('#numeros')
let select = document.querySelector('#select')
let divResultado = document.querySelector('#divResultado')

let valores = []

function isNumber(numero){
    if(numero >= 1 && numero <=100){
        return true
    }else{
        return false
    }
}

function inList(array, index){
    if(array.indexOf(Number(index)) == -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    divResultado.innerHTML = ''
    if(isNumber(inputNumero.value) && inList(valores, inputNumero.value)){
        valores.push(Number(inputNumero.value))
        let option = document.createElement('option')
        option.text = `${inputNumero.value}`
        select.appendChild(option)
        alert('Valor Adicionado')
        inputNumero.value = ''
        inputNumero.focus()
    }else{
        alert('Numero invalido ou já existe na lista')
    }
}

function finalizar(){
    let maior = valores[0]
    let menor = valores[0]
    let total = valores.length//quantidade de elementos (numeros)
    let soma = 0
    let media = 0

    for(let x in valores){
        if(valores[x] > maior){
            maior = valores[x]
        }
        if(valores[x] < menor){
            menor = valores[x]
        }
        soma += valores[x]
    }
    media = soma / total

    divResultado.innerHTML += `<p>O menor número é: ${menor}</p>`
    divResultado.innerHTML += `<p>O maior número é: ${maior}</p>`
    divResultado.innerHTML += `<p>A quantidade de número é: ${total} </p>`
    divResultado.innerHTML += `<p>A soma dos números é: ${soma}</p>`
    divResultado.innerHTML += `<p>A media dos números é: ${media}</p>`
    
}

