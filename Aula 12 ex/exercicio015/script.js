function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique o ano novamente! ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/menino.png')
            }else if(idade < 21){
                
                img.setAttribute('src', 'img/garoto.png')
            }else if(idade < 50){
                img.setAttribute('src', 'img/homem.png')
            }else{
                img.setAttribute('src', 'img/velho.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'img/garota.png')
            }else if(idade < 50){
                img.setAttribute('src', 'img/mulher.png')
            }else{
                img.setAttribute('src', 'img/velha.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}