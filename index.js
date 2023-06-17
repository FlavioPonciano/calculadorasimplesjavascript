//Montando a função de acordo com o onclick do html sendo do mesmo nome
function calculo() {
    //puxando as vareiais do html e denominando elas
    let numero1 = Number(document.getElementById('primeiroNumero').value)
    let numero2 = Number(document.getElementById('segundoNumero').value)
    let total = 0 // variavel zerada para receber o total

    //fazendo verificador de escolha com if e else
    if (document.getElementById('box1').checked)
        total = numero1 + numero2
    else if (document.getElementById('box2').checked)
        total = numero1 - numero2
    else if (document.getElementById('box3').checked)
        total = numero1 * numero2
    else
        total = numero1 / numero2
    document.getElementById('areaResultado').innerHTML = 'Resultado é: ' + String(total) // mostrando o resultado no html
}