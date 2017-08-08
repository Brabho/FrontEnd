/*
 * Animation Object
 * Require: `functions.js`
 */
var animate = {
    /*
     * Fade (In, Out)
     */
    fade: function (elem, inout, time) {
        if (typeof time === 'undefined') {
            time = '3';
        }
        if (typeof inout === 'undefined') {
            inout = 'out';
        }
        switch (inout) {
            case 'in':
                var opa = '0';
                elem.style.opacity = opa;
                elem.style.display = 'block';
                var setInt = setInterval(function () {
                    opa = Number(opa) + Number('0.01');
                    if (opa > 1) {
                        opa = 1;
                        elem.setAttribute('style', 'display: block');
                        clearInterval(setInt);
                    } else {
                        elem.style.opacity = opa;
                    }
                }, time);
                break;

            case 'out':
                var opa = '1.0';
                elem.style.opacity = opa;
                var setInt = setInterval(function () {
                    opa = Number(opa) - Number(0.01);
                    if (opa < 0) {
                        opa = 0;
                        elem.setAttribute('style', 'display: none');
                        clearInterval(setInt);
                        elem.style.display = 'none';
                    } else {
                        elem.style.opacity = opa;
                    }
                }, time);
                break;
        }
    },
    /*
     * Slide (Up, Down)
     */
    slide: function (elem, updown, time) {
        if (typeof time === 'undefined') {
            time = '3';
        }
        if (typeof updown === 'undefined') {
            updown = 'up';
        }
        elem.style.overflow = 'hidden';

        switch (updown) {
            case 'down':
                var height = css_prop(elem, 'height');
                height = height.toString().replace(/px/i, '');
                var hei = 0;
                elem.style.height = '0px';
                elem.style.display = 'block';
                var setInt = setInterval(function () {
                    hei += 2;
                    if (hei > height) {
                        clearInterval(setInt);
                        elem.setAttribute('style', 'display: block');
                    } else {
                        elem.style.height = hei + 'px';
                    }
                }, time);
                break;

            case 'up':
                elem.style.display = 'block';
                var height = elem.clientHeight;
                var hei = elem.clientHeight;
                var setInt = setInterval(function () {
                    hei -= 2;
                    if (hei < 0) {
                        clearInterval(setInt);
                        elem.setAttribute('style', 'display: none; height: ' + height + 'px');
                    } else {
                        elem.style.height = hei + 'px';
                    }
                }, time);
                break;
        }
    }
};