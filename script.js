        //---------- começo ----------//

var data = new Date()
var hora = data.getHours()
var msgDay = document.getElementById('msgDay') //mensagem de saudação
var ima = document.getElementById('ima') //foto que muda quando a página é carregada


function load(){
        //quando for manhã
    if (hora >= 5 && hora < 12){
        msgDay.innerHTML = `Agora são ${hora} horas. Que tu tenhas um dia maravilhoso!`
        document.body.style.background = '#fdb762'
        
        //quando for tarde
    } else if(hora >= 12 && hora < 18){
        msgDay.innerHTML = `Agora são ${hora} horas. Que tu tenhas uma tarde maravilhosa!`
        ima.src = "afternoon.png"
        document.body.style.background = '#b16b2f'

        //quando for noite
    } else if(hora >=18 && hora <=23){
        msgDay.innerHTML = `Agora são ${hora} horas. Que tu tenhas uma noite maravilhosa!`
        ima.src = 'evening.png'
        document.body.style.background = '#2d0400'

        //quando for madrugada
    } else {
        msgDay.innerHTML = `Agora são ${hora} horas. Que tu tenhas uma madrugada maravilhosa!`
        ima.src = 'madrugada.png'
        document.body.style.background = '#3f352b'
    }
}

        //---------- fim ----------//
