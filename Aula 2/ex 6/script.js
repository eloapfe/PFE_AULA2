function coletarNotas() {
    const numeroNotas = parseInt(document.getElementById('numeroNotas').value);
    const notasContainer = document.getElementById('notasContainer');
    const notasInputs = document.getElementById('notasInputs');

    notasInputs.innerHTML = '';

    if (isNaN(numeroNotas) || numeroNotas < 1) {
        alert("Por favor, insira um número válido de notas.");
        return;
    }

    for (let i = 0; i < numeroNotas; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Nota ${i + 1}`;
        input.required = true;
        notasInputs.appendChild(input);
    }

    notasContainer.style.display = 'block';
}

function calcularMedia() {
    const notasInputs = document.getElementById('notasInputs').children;
    let soma = 0;
    let quantidade = 0;

    for (let input of notasInputs) {
        const nota = parseFloat(input.value);
        if (!isNaN(nota)) {
            soma += nota;
            quantidade++;
        }
    }
    const media = soma / quantidade;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `A média aritmética das notas é: ${media.toFixed(2)}`;
}