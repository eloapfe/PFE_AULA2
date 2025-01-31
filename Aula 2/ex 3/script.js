function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Por favor, insira um número inteiro maior que 0.";
        return;
    }

    let ehPrimo = true;

    if (numero < 2) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        resultado.innerHTML = `${numero} é um número primo.`;
    } else {
        resultado.innerHTML = `${numero} não é um número primo.`;
    }
}