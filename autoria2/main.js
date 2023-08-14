const numeroSecreto = Math.round(Math.random() * 100);
const numeroDisplay = document.querySelector('.numero_misterioso');
const chute = document.querySelector('.input_chute');
const botao = document.querySelector('.botao_chute');

botao.addEventListener('click', (e) => {
    e.preventDefault();
    verificaChute(parseInt(chute.value)); // Convertendo o valor do chute para um número inteiro
});

function verificaChute(chute) {
    if (chute > 100 || chute < 1) {
        numeroDisplay.innerHTML = "Insira um número entre 1 e 100!";
    } else if (chute > numeroSecreto) {
        numeroDisplay.innerHTML = "O Chute é maior que o número secreto";
    } else if (chute < numeroSecreto) {
        numeroDisplay.innerHTML = "O Chute é menor que o número secreto";
    } else if (chute === numeroSecreto){
        numeroDisplay.innerHTML = `Parabéns! O número era ${numeroSecreto}!`;
        botao.innerHTML = "Tentar de novo";
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }
    else{
        numeroDisplay.innerHTML = `Insira um número válido!`;    
    }
}
