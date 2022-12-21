function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro, verifique os dados informados.')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute ('src', 'menino.webp')
            } else if (idade <21) {
                //Jovem
                img.setAttribute ('src', 'jovem m.webp')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'homem.webp')
            } else {
                //Idoso
                img.setAttribute ('src', 'idoso.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute ('src', 'menina.webp')
            } else if (idade <21) {
                //Jovem
                img.setAttribute ('src', 'jovem f.webp')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'mulher.webp')
            } else {
                //Idoso
                img.setAttribute ('src', 'idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}