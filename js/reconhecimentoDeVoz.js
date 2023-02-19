const elementoChute = document.getElementById('chute'); 

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //Importando a Api web speech

//Iniciando o web Speech na página para reconhecimento vocal
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//Evento que retorna o que foi falado como uma string
recognition.addEventListener('result', onSpeak)

//Função que busca o que foi falado e retorna para o evento
function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    gameOver(chute)
    verificaChuteValorValido(chute);
}

//Função que reescreve o que foi falado no Html
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())  //Evento para que o microfone continue funcionando em loop

