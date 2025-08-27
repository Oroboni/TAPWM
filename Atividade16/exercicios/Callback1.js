const prompt = require('prompt-sync')();

function saudacao(nome){
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

function entradaNome(callback){
    const nome = prompt('Digite seu nome: ');
    callback(nome);
}

entradaNome(saudacao);