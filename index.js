function calculo() {
    let numero1 = Number(document.getElementById('primeiroNumero').value)
    let numero2 = Number(document.getElementById('segundoNumero').value)
    let total = 0

    if (document.getElementById('box1').checked)
        total = numero1 + numero2
    else if (document.getElementById('box2').checked)
        total = numero1 - numero2
    else if (document.getElementById('box3').checked)
        total = numero1 * numero2
    else
        total = numero1 / numero2
    document.getElementById('areaResultado').innerHTML = 'Resultado é: ' + String(total)
}