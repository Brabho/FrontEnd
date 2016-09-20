/*
 * Validation Object
 */
var valid = {
    /*
     * Alphabet 
     */
    alpha: function (alpha, check) {
        if (typeof (check) === 'undefined') {
            check = 'all';
        }
        switch (check) {
            case 'all':
                return ((/^[a-zA-Z]+$/).test(alpha));
                break;

            case 'low':
                return ((/^[a-z]+$/).test(alpha));
                break;

            case 'up':
                return ((/^[A-Z]+$/).test(alpha));
                break;
        }
    },
    /*
     * Number
     */
    num: function (num) {
        return ((/^[0-9]+$/).test(num));
    },
    /*
     * Email
     */
    email: function (email) {
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return (regex.test(email));
    },
    /*
     * IP
     */
    ip: function (ip) {
        var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return (regex.test(ip));
    },
    /*
     * URL
     */
    url: function (url) {
        var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
        return (regex.test(url));
    }
};