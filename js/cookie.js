/*
 * Cookie Object
 */
var cookie = {
    /*
     * Set Cookie
     */
    set: function (param) {
        if (typeof (param['extime']) === undefined) {
            param['extime'] = 86400;
        }
        if (typeof (param['path']) === undefined) {
            param['path'] = '/';
        }
        var date = new Date();
        date.setTime(date.getTime() + (param['extime'] * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = param['name'] + '=' + param['value'] + '; ' + expires + '; ' + param['path'];
    },
    /*
     * Get Cookie
     */
    get: function (name) {
        var result = false;
        var s_cookie = document.cookie.trim().split(';');
        for (var i = 0; i < s_cookie.length; i++) {
            var ss_cookie = s_cookie[i].split('=');
            if (ss_cookie[0].charAt(0) === ' ') {
                ss_cookie[0] = ss_cookie[0].substr(1);
            }
            if (name === ss_cookie[0]) {
                result = ss_cookie[1];
                break;
            }
        }
        return result;
    },
    /*
     * Remove Cookie
     */
    remove: function (name, path) {
        if (typeof (path) === undefined) {
            path = '/';
        }
        var date = new Date();
        date.setTime(date.getTime() - (86400 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + '=' + '' + '; ' + expires + '; ' + path;
    },
    /*
     * Remove All Cookies
     */
    removeAll: function (path) {
        if (typeof (path) === undefined) {
            path = '/';
        }
        var s_cookie = document.cookie.trim().split(';');
        for (var i = 0; i < s_cookie.length; i++) {
            var ss_cookie = s_cookie[i].split('=');
            this.remove(ss_cookie[0], path);
        }
    }
};