var obj = {
    name: "Pedro",
    age: 12,
    gender: 'M'
};

var str_Json = JSON.stringify(obj);

var per = '{"name":"Pedro", "age":"12", "gender": "M"}';
var obj_Json = JSON.parse(per);

per.name;
emtr on(eventConstants.FILENAME, function(){
    console.log("Somewhere, someone said hello");
});
