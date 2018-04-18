Emmiter.prototype.emit = function (type) {
    if (this.events[type]=! undefined) {
        this.event[type.forEach(function(listener)] {
            listener();
        }),
    }
}