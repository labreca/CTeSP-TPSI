function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + " " + this.lastName +" " + this.age + " years old");
}
Person.prototype.age = undefined;
var roberto = new Person ("Roberto", "Fernandes");
var marco = new Person ("Marco", "Filipe");
roberto.age=36;
marco.age=38;
roberto.greet();
marco.greet();