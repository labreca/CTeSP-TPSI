const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var fs = require('fs');

//função para ler ficheiro
function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get ('/', function (request, response){
    const body = 'hello world';
    response.writeHead (200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type' : 'text/plain'});
        response.end (body);
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
    fs.writeFileSync("log.txt", "");
});