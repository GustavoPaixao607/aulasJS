const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const notaTexto = document.getElementById("nota").value.replace(",",".");
    const nota = Number(notaTexto);

    if(nome === "" || notaTexto === ""){
        resultado.className = "resultado erro";
        resultado.innerHTML = `
            <h2>Resultado:</h2>
            <p>Preencha o nome e a nota do aluno.</p>
        `;
        return;
    }

    if(nota < 0 || nota > 10 || Number.isNaN(nota)){
        resultado.className = "resultado erro";
        resultado.innerHTML = `
            <h2>Resultado:</h2>
            <p>A nota deve estar entre 0 e 10.</p>
        `;
        return;
    }

    if(nota >= 7){
        resultado.className = "resultado aprovado";
        resultado.innerHTML = `
            <h2>Resultado: APROVADO! 🎉</h2>
            <p>Aluno: <strong>${nome}</strong> - Nota: <strong>${nota.toFixed(1).replace(".",",")}</strong></p>
        `;
        return;
    }else{
        resultado.className = "resultado reprovado";
        resultado.innerHTML = `
            <h2>Resultado: Reprovado</h2>
            <p>Aluno: <strong>${nome}</strong> - Nota: <strong>${nota.toFixed(1).replace(".",",")}</strong></p>
        `;
    }
});