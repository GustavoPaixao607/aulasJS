document.getElementById('enviar').addEventListener('click',function(){
    let peso = parseFloat(document.getElementById('txtPeso').value);
    let altura = parseFloat(document.getElementById('txtAltura').value);
    let imc = peso/ (altura*altura);

    document.getElementById('resultado').innerText = imc.toFixed(2);

    let classificacao;
    
    if(imc < 16){
        classificacao = 'Magreza Extrema'
    }else if(imc < 17){
        classificacao = 'Magreza Moderada'
    }else if(imc < 18.5){
        classificacao = 'Magreza Leve'
    }else if(imc < 24.9){
        classificacao = 'Peso Normal'
    }else if(imc < 29.9){
        classificacao = 'Sobrepeso'
    }else if(imc < 34.9){
        classificacao = 'Obesidade Grau I'
    }else if(imc < 39.9){
        classificacao = 'Obesidade Grau II'
    }else if(imc >= 40){
        classificacao = 'Obesidade Grau III'
    }

    document.getElementById('classificacao').innerText = classificacao;
});