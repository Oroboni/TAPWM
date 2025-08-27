const { Z_ERRNO } = require('zlib');

function parte1(){
    for(let i = 1; i <= 10; i++){
        console.log("Primeira parte: ",i);
    }
}

setTimeout(parte1, 2000);
const fs = require('fs').promises;
fs.readFile('file.txt', 'utf-8')
    .then(data => {
        const registro = data.split('\n');
        registro.forEach((registro, index) =>{
            console.log("Segunda Parte: ", registro, " ", index)
        })
    })
    .catch(err =>{
        console.error("Erro ao ler arquivo: ", err)
    });