function coletarVotos() {
    const numeroEleitores = parseInt(document.getElementById('numeroEleitores').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação para garantir que o número de eleitores é válido
    if (isNaN(numeroEleitores) || numeroEleitores < 1) {
        alert("Por favor, insira um número válido de eleitores.");
        return;
    }

    // Inicializa os contadores de votos
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;

    // Coleta os votos
    for (let i = 0; i < numeroEleitores; i++) {
        let voto = prompt(`Eleitor ${i + 1}, digite o número do candidato (1, 2 ou 3):`);

        // Valida o voto
        if (voto === '1') {
            votosCandidato1++;
        } else if (voto === '2') {
            votosCandidato2++;
        } else if (voto === '3') {
            votosCandidato3++;
        } else {
            alert("Voto inválido! Por favor, vote apenas nos candidatos 1, 2 ou 3.");
            i--; // Decrementa o contador para repetir a votação
        }
    }

    // Exibe os resultados
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <h3>Resultados da Eleição:</h3>
        <p>Candidato 1: ${votosCandidato1} votos</p>
        <p>Candidato 2: ${votosCandidato2} votos</p>
        <p>Candidato 3: ${votosCandidato3} votos</p>
    `;
}