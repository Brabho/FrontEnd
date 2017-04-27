/*
 * Custom & Mod Functions
 */

/*
 * Isset Variable
 */
function is_var(vari) {
    return (vari !== null && vari !== '' && vari.length > 0);
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
    var uris = window.location.search.split('&');
    for (var i = 0; i < uris.length; i++) {
        var part = uris[i].split('=');
        if (part[0] === param) {
            return part[1];
            break;
        }
    }
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
function ranNum(length) {
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
function ranStr(length) {
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
    var re = new RegExp('[' + charlist + ']+$', 'g');
    return (str + '').replace(re, '');
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
function parseHTML(html) {
    var content = new DOMParser().parseFromString(html, 'text/html');
    return content;
}

/*
 * Get CSS Property Value
 */
function cssProp(elem, prop) {
    return window.getComputedStyle(elem).getPropertyValue(prop);
}

/*
 * Get Element Index
 */
function elmIndex(elm) {
    if (elm.parentElement !== null) {
        return Array.prototype.indexOf.call(elm.parentElement.children, elm);
    }
    return 'document';
}

/*
 * Get Scroll Position 
 */
function scrollPosi() {
    var coordinate = [];
    coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;
    coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;
    return coordinate;
}

/*
 * Is Element has Scroll Bar (Bool)
 */
function hasScroll(elem) {
    if (typeof elem === 'undefined' || elem === null) {
        return (document.body.scrollHeight > window.innerHeight) ? true : false;
    } else {
        return (elem.scrollHeight > elem.clientHeight) ? true : false;
    }
}

/*
 * Get If Element(s) Visible/Showing or Not (Bool)
 */
function isVisible(elem) {
    if (this.hasScroll(null)) {
        if (elem.offsetTop < window.innerHeight) {
            return true;
        } else if ((parseInt(elem.offsetTop) - parseInt(window.innerHeight)) <= this.scrollPosi()['y']) {
            return true;
        }
        return false;
    }
    return true;
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