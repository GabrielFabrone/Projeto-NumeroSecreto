// Função para terminar o jogo caso diga a palavra game over.
function gameOver (chute) {
    if (chute == 'game over' || chute == 'Fim de jogo' || chute == 'Game over') {
        document.body.innerHTML = `
        <h2> Game over! </h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente <i class="fa-solid fa-rotate"></i> </button>
        `
    }
}

//Transformando o valor falado em número e fazendo o tratamento de excessões
function verificaChuteValorValido(chute) {
    const numero = +chute
    console.log(numero)

    if(chuteForInvalido(numero) && numero != 'game over') {   //Se oque for falado for diferente de um número
        elementoChute.innerHTML += '<div> valor inválido </div>'
    }

    if(numeroMaiorOuMenorQueOValorPermitido(numero)) {      //Se o valor falado for menor ou maior do que o valor escopo:
        elementoChute.innerHTML += `<div> Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
    }

    if (numero === numeroSecreto) {   // Se o número falado for o número correto
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente <i class="fa-solid fa-rotate"></i> </button>
        `
    } else if (numero > numeroSecreto && numero < maiorValor) { //Se o número falado for maior que o número Secreto
        elementoChute.innerHTML = `
        <div>O número secreto é menor <i class="fa-regular fa-circle-down"></i></div>
        `
    } else if (numero < numeroSecreto && numero < menorValor){
        elementoChute.innerHTML = `
        <div>O número secreto é maior <i class="fa-regular fa-circle-up"></i></div>
        `
    }
}

//função que realiza a verificação de que oque foi falado é diferente de um número
function chuteForInvalido(numero) {
    return isNaN(numero);
}

//Função que verifica se o número falado é maior ou menor que os números de refêrencia
function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})