function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.innerHTML = "Por favor, insira notas válidas.";
        return;
    }

    const media = (nota1 + nota2) / 2;

    let mensagem;
    if (media === 10) {
        mensagem = "Aprovado com Distinção";
    } else if (media >= 7) {
        mensagem = "Aprovado";
    } else {
        mensagem = "Reprovado";
    }

    resultado.innerHTML = `Média: ${media.toFixed(2)} - ${mensagem}`;
}