/*
 * Get Parse
 */
var getParse = {
    /*
     * Parse HTML
     */
    parseHTML: function (html) {
        var content = new DOMParser().parseFromString(html, 'text/html');
        return content;
    },
    /*
     * Get CSS Property Value
     */
    cssProp: function (elem, prop) {
        return window.getComputedStyle(elem).getPropertyValue(prop);
    },
    /*
     * Get Element Index
     */
    elmIndex: function (elm) {
        if (elm.parentElement !== null) {
            return Array.prototype.indexOf.call(elm.parentElement.children, elm);
        }
        return 'document';
    },
    /*
     * Get Scroll Position 
     */
    scrollPosi: function () {
        var coordinate = [];
        coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;
        coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;
        return coordinate;
    },
    /*
     * Is Element has Scroll Bar (Bool)
     */
    hasScroll: function (elem) {
        if (typeof elem === 'undefined' || elem === null) {
            return (document.body.scrollHeight > window.innerHeight) ? true : false;
        } else {
            return (elem.scrollHeight > elem.clientHeight) ? true : false;
        }
    },
    /*
     * Get If Element(s) Visible/Showing or Not (Bool)
     */
    isVisible: function (elem) {
        if (this.hasScroll(null)) {
            if (elem.offsetTop < window.innerHeight) {
                return true;
            } else if ((parseInt(elem.offsetTop) - parseInt(window.innerHeight)) <= this.scrollPosi()['y']) {
                return true;
            }
            return false;
        } else {
            return true;
        }
    },
    /*
     * Get Format Number Length
     */
    lengthK: function (val) {
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
};