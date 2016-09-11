/*
 * Animation Object
 */
var animate = {
    /*
     * Fade (In, Out)
     */
    fade: function (elem, inout, time) {
        if (typeof (time) === 'undefined') {
            time = '5';
        }
        if (typeof (inout) === 'undefined') {
            inout = 'out';
        }
        switch (inout) {
            case 'in':
                var opa = '0';
                elem.style.opacity = opa;
                elem.style.display = 'block';
                var setInt = setInterval(function () {
                    opa = Number(opa) + Number('0.01');
                    if (opa >= 1) {
                        opa = 1;
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
                    opa = (opa - 0.01);
                    if (opa <= 0) {
                        opa = 0;
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
        if (typeof (time) === 'undefined') {
            time = '5';
        }
        if (typeof (updown) === 'undefined') {
            updown = 'down';
        }
        elem.style.overflow = 'hidden';
        switch (updown) {
            case 'up':
                var hei = elem.clientHeight;
                var setInt = setInterval(function () {
                    hei--;
                    if (hei <= 0) {
                        elem.style.display = 'none';
                        clearInterval('setInt');
                    } else {
                        elem.style.height = hei + 'px';
                    }
                }, time);
                break;

            case 'down':
                var hei = '0';
                elem.style.display = 'block';
                var ele_hei = elem.clientHeight;
                var setInt = setInterval(function () {
                    hei++;
                    if (hei >= ele_hei) {
                        hei = elem.clientHeight;
                        clearInterval(setInt);
                    } else {
                        elem.style.height = hei + 'px';
                    }
                }, time);
                break;
        }
    }
};