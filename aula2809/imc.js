document.getElementById('enviar').addEventListener('click',function(){
    let peso = parseFloat(document.getElementById('txtPeso').value);
    let altura = parseFloat(document.getElementById('txtAltura').value);
    let imc = peso/ (altura*altura);

    document.getElementById('resultado').innerText = imc;
    
});