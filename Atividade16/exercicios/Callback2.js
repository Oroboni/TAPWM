function exibemenssagemnaordem(messagem, callback) {
    console.log(messagem);
    callback();
}

exibemenssagemnaordem('Primeira mensagem',
    function() { console.log('Segunda mensagem'); });