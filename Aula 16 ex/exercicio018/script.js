let lista = document.querySelector('#flista')
let res = document.querySelector("#res")
let valores = []

function adicionar(txtn){
    let num = Number(txtn.value)
    res.innerHTML = ""
    if(isNumero(num) && !inLista(num, valores)){
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    txtn.value = ''
    txtn.focus()
}
function isNumero(n){
    if(n > 0 && n < 101){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function resultado(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        valores.sort(function(a, b){return a-b})//sort com função pra numeros em vez de string
        let x = 0 //usado pra fazer a soma e a média
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        for(let pos in valores){
            x += valores[pos]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${x}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${x / valores.length}.</p>`
    }
}




















/* Minha suloção funciona na lógica e em quase tudo, mas deixa adicionar numero repetido
na lista visual, na lista valores[] funciona corretamente!
function adicionar(txtn){
    n = Number(txtn.value)

    if(n > 0 && n < 101){
        valores.push(n)//adiciona o valor de (n) ao ultimo elemento da (valores)
        
        for (let pos = 0; pos < valores.length-1; pos++){
        //lenght-1 testa todos menos o da vez, pois se testar com ele mesmo
        //sempre vai dar como repetido pois ele ta se comparando com ele mesmo
            if(n == valores[pos]){//testa se o da vez tiver no valores 
                valores.pop()//remove
                alert(`Número ${n} já adicionado`)//e alerta
            }
        }//se n repetir (for) não faz nada

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
    }else{
        window.alert("Número invalido!")
    }

    res.innerHTML = ""
}

*/