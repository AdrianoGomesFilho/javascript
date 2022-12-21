var agora = new Date()
var diaSem = agora.getDay()
/*
    dom = 0
    seg = 1
    ter = 2
    qua = 3
    qui = 4
    sex = 5
    sab = 6
*/

switch (diaSem) {
    case 0:
        console.log('DOM')
        break
    case 1:
        console.log('SEG')
        break
    case 2:
        console.log('TER')
        break
    case 3:
        console.log('QUA')
        break
    case 4:
        console.log('QUI')
        break
    case 5:
        console.log('SEX')
        break
    case 6:
        console.log('SAB')
        break
    default:
        console.log('Inválido')
        break
}