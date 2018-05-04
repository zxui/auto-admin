const Utils = {}

Utils.toSerachModel = function (columnData) {
    let serachModel = {};
    columnData.forEach(function (o, i) {
        if (o.serach) {
            serachModel[o.prop] = '';
        }
    });
    return serachModel;
}

Utils.toFormModel = function (columnData) {
    let formModel = {};
    columnData.forEach(function (o, i) {
        if ('checkbox' == o.type) {
            formModel[o.prop] = [];
        } else {
            formModel[o.prop] = '';
        }
    });
    return formModel;
}

!(function () {
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(),    //day
            "h+": this.getHours(),   //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
            "S": this.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    }
})();

export  default Utils;