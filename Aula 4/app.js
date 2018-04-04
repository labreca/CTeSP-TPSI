var obj = {
    name: "Pedro",
    age: 12,
    gender: 'M'
};

var str_Json = JSON.stringify(obj);

var str = "{"name": "Pedro", "age":"12", "gender" "M"}";
var str_Json = JSON.parse (str);

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.person = function () {
        return this.name + " " + this.age + " " + this.gender;
    }
}