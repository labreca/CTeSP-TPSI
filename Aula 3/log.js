var log1 = {
    info: function (info) {
        console.log("Info: " + info)
    },
    warning: function (warning) {
        console.log("Warning: " + warning)
    },
    error: function (error) {
        console.log("Error: " + error)
    },
};
var log2 = {
    update: function (update) {
        console.log("Update: " + update)
    },
};

module.exports.log1 = log1
module.exports.log2 = log2