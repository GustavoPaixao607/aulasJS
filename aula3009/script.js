document.getElementById('Enviar').addEventListener('click', function() {

    let classificacao = "";

    let idade = Number(document.getElementById('txtIdade').value);

    classificacao = (idade >= 0 && idade <= 5) ? "Bebê"
                  : (idade >= 6 && idade <= 11) ? "Criança"
                  : (idade >= 12 && idade <= 17) ? "Adolescente"
                  : (idade >= 18 && idade <= 59) ? "Adulto"
                  : (idade >= 60) ? "Idoso"
                  : "Inválido";
document.getElementById('Faixa').innerText = classificacao;

});
