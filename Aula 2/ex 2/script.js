function calculoimc() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensagem = document.getElementById('mensagem');


    if (peso < 0 || peso > 1000) {
        mensagem.innerHTML = "Por favor, insira um peso entre 0 e 1000.";
        return;
    }

    if (altura < 0 || altura > 1000) {
        mensagem.innerHTML = "Por favor, insira uma altura entre 0 e 1000.";
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        mensagem.innerHTML = "Você está abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = "Você está com o peso ideal!";
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem.innerHTML = "Você está com sobrepeso!";
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = "Você está com obesidade grau I!";
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem.innerHTML = "Você está com obesidade grau II!";
    } else {
        mensagem.innerHTML = "Você está com obesidade grau III!";
    }
}