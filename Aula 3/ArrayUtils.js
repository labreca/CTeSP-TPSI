var arrayUtils = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    maxArray: function (array) {
        var max = Number.NEGATIVE_INFINITY;
        for (i = 0; i <= array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    minArray: function (array) {
        var min = Number.POSITIVE_INFINITY;
        for (i = 0; i <= array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },
    mediaArray: function (array) {
        var md=0;
        for (i = 0; i <= array.length; i++) {
            md += array[i]
        }
            md =md/ array.lenght;
        return md;
    }
};
module.exports = arrayUtils;