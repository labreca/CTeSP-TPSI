function Person(firstName, lastName) {
    this.fistName = firstName;
    this.lastName = lastName;
}
Person.prototype.greet = function () {
    console.log("Hello" + this.firstName + " " + this.lastName);
}