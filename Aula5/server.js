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
<<<<<<< HEAD
//função para adicionar 
app.post('/addPerson', function (request, response) {
    //ler ficheiro
    var f = readFile('./persons.json');
    //converter dados JSON para um objeto
    var jsonData = JSON.parse(f);
    //Obter o número de entrada no objeto
    var size = Object.keys(jsonData).length;
    //incremeta o id em 1
    var id = size + 1;
    //vamos buscar o objeto ao body
    var person = request.body;
    person.id = id;
    person["id"] = id;
    //adicionar a nova pessoa ao objcto
    jsonData["person" + id] = person;
    //enviamos a resposta com o objeto como argumento
    response.send(jsonData);
});

app.delete ('/delPerson', function (request, response) {
   var f = readFile('./persons.json'); 
   var jsonData = JSON.parse(f);
   var id = request.body.id;

   delete jsonData["person" + id];
   response.send(jsonData);
});

app.post ('/getPerson', function (request, response) {
    var f = readFile('./persons.json'); 
    var jsonData = JSON.parse(f);
    var id = request.body.id;    
    var person =  jsonData["person" + id];
    response.send(person);
 });

app.get('/getPerson/:id', function (request, response) {
    var f = readFile('./persons.json'); 
    var jsonData = JSON.parse(f);
    var id = request.params.id;
    var person =  jsonData["person" + id];
    response.send(person);
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
    fs.writeFileSync("log.txt", "");
});
=======

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
>>>>>>> 3ead5ac5e781061196298c951f7ca4557f50ffc5
