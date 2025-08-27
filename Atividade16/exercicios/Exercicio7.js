let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url;
    if(opcao === '/historia'){
        res.end("<html><body>Historia da fatec sorocaba</body></html>");
    }else if(opcao === '/cursos'){
        res.end("<html><body>Cursos da fatec sorocaba</body></html>");
    }
    else if(opcao === '/localizacao'){
        res.end("<html><body>Localizacao da fatec sorocaba</body></html>");
    }else{   
        res.end("<html><body>Site da fatec sorocaba</body></html>");
    }
});

server.listen(3000)