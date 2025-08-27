function parte1(){
    for(let i = 1; i <= 10; i++){
        console.log("Primeira parte: ",i);
    }
}

setTimeout(parte1, 2000);
const fs = require('fs');
fs.readFile('file.txt', function(err, data){
    if(err) throw err;{
        const registros = data.toString().split('\n');
        registros.forEach((registro, Index) => {
            console.log("Segunda parte: ", registro, " ", Index);
        });
    }
});