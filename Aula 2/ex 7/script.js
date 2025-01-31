function coletarIdades() {
    const numeroPessoas = parseInt(document.getElementById('numeroPessoas').value);
    const idadesContainer = document.getElementById('idadesContainer');
    const idadesInputs = document.getElementById('idadesInputs');

    idadesInputs.innerHTML = '';

    if (isNaN(numeroPessoas) || numeroPessoas < 1) {
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    for (let i = 0; i < numeroPessoas; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Idade da pessoa ${i + 1}`;
        input.required = true;
        idadesInputs.appendChild(input);
    }

    idadesContainer.style.display = 'block';
}

function calcularMediaIdade() {
    const idadesInputs = document.getElementById('idadesInputs').children;
    let soma = 0;
    let quantidade = 0;

    for (let input of idadesInputs) {
        const idade = parseFloat(input.value);
        if (!isNaN(idade)) {
            soma += idade;
            quantidade++;
        }
    }

    const media = soma / quantidade;

    let classificacao;
    if (media >= 0 && media <= 25) {
        classificacao = "jovem";
    } else if (media > 25 && media <= 60) {
        classificacao = "adulta";
    } else {
        classificacao = "idosa";
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `A média de idades é: ${media.toFixed(2)}. A turma é ${classificacao}.`;
}