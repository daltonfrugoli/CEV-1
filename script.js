function verificar()
{
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var bom = window.document.getElementById('bd')
    var data = new Date()
    var hora = data.getHours()

    //Exibição do horário adquirido pelo sistema
    msg.innerHTML = `Agora são exatamente ${hora} horas`

    //Verificação de horário para definir aparência do site
    if(hora >= 0 && hora < 12)
    {
        img.src = 'manha.png' 
        document.body.style.background = '#4b6681' 
        bom.innerHTML = '<p><strong>Bom dia!</strong></p>'
    }
    else if (hora >= 12 && hora <= 18)
    {
        img.src = 'tarde.png'
        document.body.style.background = '#ff9f46'  
        bom.innerHTML = '<p><strong>Boa tarde!</strong></p>'
    }
    else
    {
        img.src = 'noite.png'
        document.body.style.background = '#4c1e5c'   
        bom.innerHTML = '<p><strong>Boa noite!</strong></p>'
    }


}