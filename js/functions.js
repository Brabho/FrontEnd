/*
 * Custom & Mod Functions
 
 *
 * Isset Variable
 */
function is_var(vari) {
    return (typeof vari !== 'undefined' && vari !== null && vari.toString() !== '' && vari.toString().length > 0);
}

/*
 * Isset Query String
 * (Return Bool)
 */
function is_qstr(field) {
    var url = window.location.search;
    if (url.indexOf('?' + field + '=') !== -1) {
        return true;
    } else if (url.indexOf('&' + field + '=') !== -1) {
        return true;
    }
    return false;
}

/*
 * Get Query String Value
 */
function qstr(param) {
    var result = false;
    var uris = window.location.search;
    if (uris.length > 0) {

        if (uris.match(/&/g)) {
            uris = uris.substr(1);
            var uris_a = uris.split('&');
            var uris_a_length = uris_a.length;
            for (var i = 0; i < uris_a_length; i++) {
                var part = uris_a[i].split('=');
                if (part[0] === param) {
                    result = part[1];
                }
            }
            return result;
        } else {
            var uris_q = uris.split('?');
            var uris_q_vals = uris_q[1].split('=');

            if (uris_q_vals[0] === param) {
                result = uris_q_vals[1];
            }
            return result;
        }
    }
    return result;
}

/*
 * Get Uri Hash Value
 */
function uri_hash() {
    if (window.location.hash && location.href.indexOf("#") != -1) {
        return window.location.hash.substring(1);
    }
    return false;
}

/*
 * Random Number Between
 */
function rand(min, max) {
    return Math.floor((Math.random() * max) + min);
}

/*
 * Random Number
 */
function rand_num(length) {
    if (typeof length === 'undefined') {
        length = '40';
    }
    var value = '';
    for (var i = 0; i < length; i++) {
        value += Math.floor((Math.random() * 9) + 0);
    }
    return value;
}

/*
 * Random String
 */
function rand_str(length) {
    if (typeof length === 'undefined') {
        length = '40';
    }
    var value = '';
    var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));
    }
    return value;
}

/*
 * PHP ucwords function
 */
function uc_words(str) {
    return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g
            , function ($1) {
                return $1.toUpperCase();
            });
}

/*
 * PHP ucfirst function
 */
function uc_first(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/*
 * Mod Trim Function
 */
function trims(str, charlist) {
    str = str.trim();
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
    var re = new RegExp('[' + charlist + ']+$', 'img');
    str = (str + '').replace(re, '');
    return str.trim();
}

/*
 * Remove White Space
 */
function rws(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

/*
 * Parse HTML
 */
function parse_html(html) {
    var content = new DOMParser().parseFromString(html, 'text/html');
    return content;
}

/*
 * Get CSS Property Value
 */
function css_prop(el, prop) {
    return window.getComputedStyle(el).getPropertyValue(prop);
}

/*
 * Get Element Index
 */
function el_index(el) {
    if (el.parentElement !== null) {
        return Array.prototype.indexOf.call(el.parentElement.children, el);
    }
    return 'document';
}

/*
 * Get Scroll Position 
 */
function scroll_position() {
    var coordinate = [];
    coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;
    coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;
    return coordinate;
}

/*
 * Is Element has Scroll Bar (Bool)
 */
function has_scroll(el) {
    if (typeof el === 'undefined' || el === null) {
        return (document.body.scrollHeight > window.innerHeight);
    }
    return (el.scrollHeight > el.clientHeight);
}

/*
 * Get If Element(s) Visible/Showing or Not (Bool)
 */
function is_visible(el) {
    if (has_scroll(null)) {
        if (el.offsetTop < window.innerHeight) {
            return true;
        } else if ((parseInt(el.offsetTop) - parseInt(window.innerHeight)) <= scroll_position()['y']) {
            return true;
        }
        return false;
    }
    return true;
}

function scrollto_bookmark(el, arg) {

    if (typeof arg === 'undefined') {
        arg = [];
    }

    if (typeof arg['distance'] === 'undefined') {
        arg['distance'] = 0;
    }

    if (typeof arg['speed'] === 'undefined') {
        arg['speed'] = 30;
    }

    if (el !== 'undefined' && el.length > 0 && el !== ' ' && has_scroll()) {

        var scroll_animate = setInterval(function () {

            var current_y = window.pageYOffset + window.innerHeight;

            /*
             * Scroll to Bottom
             * Direction (Down)
             */
            if (window.pageYOffset < ($('#' + el).offsetTop - arg['distance'])) {

                window.scrollTo(0, scroll_position()['y'] + arg['speed']);

                if (window.pageYOffset >= ($('#' + el).offsetTop - arg['distance'])) {
                    clearInterval(scroll_animate);
                }

            }
            /*
             * Scroll to Top
             * Direction (Up)
             */
            else {

                window.scrollTo(0, scroll_position()['y'] - arg['speed']);

                if (window.pageYOffset < ($('#' + el).offsetTop - arg['distance'])) {
                    clearInterval(scroll_animate);
                }

            }

            /*
             * Stop if reach to end to top
             */
            if (current_y >= document.documentElement.offsetHeight || scroll_position()['y'] <= 0) {
                clearInterval(scroll_animate);
            }

        }, arg['speed']);
    }
}

/*
 * Get Format Number Length
 */
function length_mk(val) {
    if (val > 1000) {
        val = (val / 1000).toFixed(1);
        if (val > 1000) {
            val = (val / 1000).toFixed(1) + 'M';
        } else {
            val = val + 'K';
        }
    }
    return val;
}

/*
 * Delay Load CSS
 * Load CSS After `Load`, `onload`,or `DOMContentLoaded`
 * @param {id} id of the stylesheet
 * @param {href} '/path/to/css/file.css'
 */
function delay_css(id, href) {
    var elm = document.getElementById(id);
    if (elm) {
        elm.setAttribute('href', href);
        elm.setAttribute('rel', 'stylesheet');
        elm.setAttribute('type', 'text/css');
        elm.removeAttribute('id');
    }
}

/*
 * Valid Alphabet 
 */
function valid_alpha(alpha, check) {
    if (typeof check === 'undefined') {
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
}

/*
 * Valid Number
 */
function valid_num(num) {
    return ((/^[0-9]+$/).test(num));
}

/*
 * Valid Email
 */
function valid_email(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return (regex.test(email));
}

/*
 * Valid IP
 */
function valid_ip(ip) {
    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return (regex.test(ip));
}

/*
 * Valid URL
 */
function valid_url(url) {
    var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return (regex.test(url));
}

/*
 * Valid Input
 */
function valid_input(target) {
    return (target.checkValidity() === true && target.validity.valid === true);
}

/*
 * Get User Browser
 */
function usr_browser() {
    var browsers_list = [
        'Firefox',
        'Opr',
        'Edge',
        'Chrome',
        'Safari',
        'Netscape',
        'Maxthon',
        'Konqueror',
        'MSIE',
        'Trident',
        'UCBrowser',
        'UCWEB'
    ];

    var browsers_list_length = browsers_list.length;
    for (var j = 0; j < browsers_list_length; j++) {
        var the_sbrowser = new RegExp(browsers_list[j], 'gi');
        if (navigator.userAgent.match(the_sbrowser)) {
            var get_brow = browsers_list[j];
            break;
        }
    }
    if (get_brow && get_brow !== 'undefined') {
        if (get_brow === 'MSIE' || get_brow === 'Trident') {
            return 'Internet Explorer';
        } else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {
            return 'UC Browser';
        } else if (get_brow === 'Opr') {
            return 'Opera';
        } else {
            return get_brow;
        }
    } else {
        return 'Other';
    }
}

/*
 * Get User OS
 */
function usr_os() {
    var os = 'Other';
    var os_arr = {
        'windows nt 10': 'Windows 10',
        'windows nt 6.3': 'Windows 8.1',
        'windows nt 6.2': 'Windows 8',
        'windows nt 6.1': 'Windows 7',
        'windows nt 6.0': 'Windows Vista',
        'windows nt 5.2': 'Windows Server 2003/XP x64',
        'windows nt 5.1': 'Windows XP',
        'windows xp': 'Windows XP',
        'windows nt 5.0': 'Windows 2000',
        'windows me': 'Windows ME',
        'win98': 'Windows 98',
        'win95': 'Windows 95',
        'win16': 'Windows 3.11',
        'macintosh|mac os x': 'Mac OS X',
        'mac_powerpc': 'Mac OS 9',
        'ubuntu': 'Ubuntu',
        'Red Hat': 'Red Hat',
        'linux': 'Linux',
        'iphone': 'iPhone',
        'ipod': 'iPod',
        'ipad': 'iPad',
        'android': 'Android',
        'blackberry': 'BlackBerry',
        'webos': 'Mobile'
    };

    var obj_length = Object.keys(os_arr).length;
    for (var i = 0; i < obj_length; i++) {
        var regex = new RegExp(Object.keys(os_arr)[i], 'gi');
        if (navigator.userAgent.match(regex)) {
            os = os_arr[Object.keys(os_arr)[i]];
            break;
        }

    }
    return os;
}