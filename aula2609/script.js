document.getElementById('somar').addEventListener('click',function(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;

    document.getElementById('resultado').innerText = resultado;
});

document.getElementById('subtrair').addEventListener('click',function(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;

    document.getElementById('resultado').innerText = resultado;
});

document.getElementById('multiplicar').addEventListener('click',function(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;

    document.getElementById('resultado').innerText = resultado;
});

document.getElementById('dividir').addEventListener('click',function(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 / num2;

    document.getElementById('resultado').innerText = resultado;
});