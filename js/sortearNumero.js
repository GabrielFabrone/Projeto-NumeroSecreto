const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatório();


function gerarNumeroAleatório () {
    return parseInt(Math.random() * maiorValor)        //Função Math random, dá um número aleatório entre 0 e 1.
}

console.log(numeroSecreto)

//Trocando os valores de maior e menor valor apresentados no html
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor