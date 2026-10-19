function calcularMedia(notas){
    let soma = 0;

    for (let i = 0; i < notas.length; i++){
        soma += notas[i];
    }

    return soma / notas.length;
}

function verificarSituacao(notas){
    if(notas >= 7){
        return "Aprovado";
    } else if(notas >= 5){
        return "Recuperação"
    } else {
        return "Burro pra caramba, reprovado!!"
    }
}

function encontrarMaiorNota(notas){
    let maior = notas[0];

    for (let i = 1; i < notas.length; i++){
        if (notas[i] > maior){
            maior = notas[i];
        }
    }

    return maior;
}

function encontrarMenorNota(notas){
    let menor = notas[0];

    for (let i = 1; i < notas.length; i++){
        if (notas[i] < menor){
            menor = notas[i];
        }
    }

    return menor;
}

function gerarRelatorio(
    quantidade,
    media,
    maiorNota,
    menorNota,
    aprovados,
    recuperacao,
    reprovados
){
    document.getElementById('resultado').innerHTML = `
        <p><strong>Quantidade de alunos:</strong> ${quantidade}</p>
        <p><strong>Média da turma:</strong> ${media.toFixed(2)}</p>
        <p><strong>Maior nota:</strong> ${maiorNota}</p>
        <p><strong>Menor nota:</strong> ${menorNota}</p>
        <p><strong>Aprovados:</strong> ${aprovados}</p>
        <p><strong>Recuperação:</strong> ${recuperacao}</p>
        <p><strong>Reprovados:</strong> ${reprovados}</p>
    `;
}

document.getElementById('enviar').addEventListener('click', function (){
    let quantidade = parseInt(document.getElementById('txtQuantidade').value);

    let alunos =[];
    let notas = [];

    for (let i = 0; i < quantidade; i++){

        let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
        let nota = parseFloat(prompt(`Digite a nota de ${nome}:`));

        alunos.push(nome);
        notas.push(nota);
    }

    let media = calcularMedia(notas);
    let maiorNota = encontrarMaiorNota(notas);
    let menorNota = encontrarMenorNota(notas);

    let aprovados = 0;
    let recuperacao = 0;
    let reprovados = 0;

    for (let i = 0; i < notas.length; i++) {
        
        let situacao = verificarSituacao(notas[i]);

        if (situacao === "Aprovado") {
            aprovados++;
        } else if (situacao === "Recuperação") {
            recuperacao++;
        } else {
            reprovados++;
        }
    }

    gerarRelatorio(
        quantidade,
        media,
        maiorNota,
        menorNota,
        aprovados,
        recuperacao,
        reprovados
    );
});