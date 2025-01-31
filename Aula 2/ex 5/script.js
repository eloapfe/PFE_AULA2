function encontrarPrimos() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let divisoes = document.getElementById('divisoes');

    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Por favor, insira um número inteiro maior que 0.";
        return;
    }

    let primos = [];
    let contDivisoes = 0;

    for (let i = 2; i <= numero; i++) {
        let ehPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            contDivisoes++;
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(i);
        }
    }
    resultado.innerHTML = `Números primos entre 1 e ${numero}: ${primos.join(', ')}`;
    divisoes.innerHTML = `Número de divisões realizadas: ${contDivisoes}`;
}