/*
 * Custom Function
 */
var cf = {
    /*
     * Get Query String Value
     */
    qstr: function (param) {
        var uris = window.location.search.split('&');
        for (var i = 0; i < uris.length; i++) {
            var part = uris[i].split('=');
            if (part[0] === param) {
                return part[1];
                break;
            }
        }
    },
    /*
     * Isset Query String (Return Bool)
     */
    is_qstr: function (field) {
        var url = window.location.search;
        if (url.indexOf('?' + field + '=') !== -1) {
            return true;
        } else if (url.indexOf('&' + field + '=') !== -1) {
            return true;
        } else {
            return false;
        }
    },
    /*
     * Random Number
     */
    rannum: function (length) {
        if (typeof (length) === 'undefined') {
            length = '40';
        }
        var value = '';
        for (var i = 0; i < length; i++) {
            value += Math.floor((Math.random() * 9) + 0);
        }
        return value;
    },
    /*
     * Random String
     */
    ranstr: function (length) {
        if (typeof (length) === 'undefined') {
            length = '40';
        }
        var value = '';
        var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));
        }
        return value;
    }
};