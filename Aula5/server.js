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

app.get('/listPerson', function (request, response) {
    var f = readFile('./persons.json');
    response.send(f);
});

app.post('/addPerson', function (request, response) {
    var f = readFile('./persons.json');
    var jsonData = JSON.parse(f);

    var size = Object.keys(jsonData).length;
    var id = size + 1;

    var person = request.body;
    person.id = id;
    jsonData["person" + id] = person;
    response.send(jsonData);    
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));