/*
 * Animation Object
 * Require: `functions.js`
 */
var animate = {
    /*
     * Fade (In, Out)
     */
    fade: function (el, inout, time) {
        if (typeof time === 'undefined') {
            time = '3';
        }
        if (typeof inout === 'undefined') {
            inout = 'out';
        }
        switch (inout) {
            case 'in':
                var opa = '0';
                el.style.opacity = opa;
                el.style.display = 'block';
                var setInt = setInterval(function () {
                    opa = Number(opa) + Number('0.01');
                    if (opa > 1) {
                        opa = 1;
                        el.setAttribute('style', 'display: block');
                        clearInterval(setInt);
                    } else {
                        el.style.opacity = opa;
                    }
                }, time);
                break;

            case 'out':
                var opa = '1.0';
                el.style.opacity = opa;
                var setInt = setInterval(function () {
                    opa = Number(opa) - Number(0.01);
                    if (opa < 0) {
                        opa = 0;
                        el.setAttribute('style', 'display: none');
                        clearInterval(setInt);
                        el.style.display = 'none';
                    } else {
                        el.style.opacity = opa;
                    }
                }, time);
                break;
        }
    },
    /*
     * Slide (Up, Down)
     */
    slide: function (el, updown, time) {
        if (typeof time === 'undefined') {
            time = '3';
        }
        if (typeof updown === 'undefined') {
            updown = 'up';
        }
        el.style.overflow = 'hidden';

        switch (updown) {
            case 'down':
                var height = css_prop(el, 'height');
                height = height.toString().replace(/px/i, '');
                var hei = 0;
                el.style.height = '0px';
                el.style.display = 'block';
                var setInt = setInterval(function () {
                    hei += 2;
                    if (hei > height) {
                        clearInterval(setInt);
                        el.setAttribute('style', 'display: block');
                    } else {
                        el.style.height = hei + 'px';
                    }
                }, time);
                break;

            case 'up':
                el.style.display = 'block';
                var height = el.clientHeight;
                var hei = el.clientHeight;
                var setInt = setInterval(function () {
                    hei -= 2;
                    if (hei < 0) {
                        clearInterval(setInt);
                        el.setAttribute('style', 'display: none; height: ' + height + 'px');
                    } else {
                        el.style.height = hei + 'px';
                    }
                }, time);
                break;
        }
    }
};