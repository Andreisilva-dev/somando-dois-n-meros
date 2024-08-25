

var somar = document.querySelector('.res')
somar.addEventListener('click',clicar)


function clicar(){
    var tx1 = document.querySelector('.tx1')
    var tx2 = document.querySelector('.tx2')
    var n1 = Number(tx1.value)
    var n2 = Number(tx2.value)
    var somar = n1 + n2
    var tresultado = document.querySelector('.resultado')
    tresultado.innerHTML= `${n1} + ${n2} é ${somar}`
}

