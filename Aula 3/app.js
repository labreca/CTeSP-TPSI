var greetMe = function () {
    console.log("Hello")
}
var seeMe = function () {
    console.log("World")
}
function log(fn) {
    console.log("Invocação");
    fn();
}
greetMe();
seeMe();
log(greetMe);
log(seeMe);

var myLogModule = require("./log.js");
myLogModule.log1.info("Node.js started");
myLogModule.log2.update("Node.js started again");

//Ficha 3 ex:1

var started = function () {
    console.log("Started download")
}
var update = function (i) {
    console.log(i + "% of Download")
}
var complete = function () {
    console.log("Download Completed")
}
function performDownload(started, update, complete) {
    started();
    for (i = 0; i <= 100; i++) {
        update(i)
    };
    complete();
}
performDownload(started, update, complete);

var arrayUtils = require("./ArrayUtils.js");
var a = [1, 3, 5, 7, -40]

var isEmpty = arrayUtils.isEmpty(a);
console.log("O array esta vazio?" + " " + isEmpty);
var maxArray = arrayUtils.maxArray(a);
console.log("O máximo é" + " " + maxArray);
var minArray = arrayUtils.minArray(a);
console.log("O minimo é" + " " + minArray);
var mediaArray = arrayUtils.mediaArray(a);
console.log("A média é" + " " + mediaArray);




