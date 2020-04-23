let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('Exemplo 2!')
let num = [4, 5, 6, 7, 8, 9]
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`Achei o número 7 na posição ${num.indexOf(7)}!`)