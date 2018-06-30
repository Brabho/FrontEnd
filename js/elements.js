/*
 * Document Query Selector(s)
 */
function $(elms, evt, callback) {
    var gElms = document.querySelectorAll(elms);
    var gElms_length = gElms.length;

    if (gElms_length > 0) {
        if (gElms_length > 1) {

            if (typeof callback === 'function') {
                for (var i = 0; i < gElms_length; i++) {

                    if (evt === null) {
                        callback(gElms[i]);
                    } else {
                        on(evt, gElms[i], function (elm, e) {
                            callback(elm, e);
                        });
                    }
                }

            } else {
                return gElms;
            }

        } else {
            var delms = document.querySelector(elms);
            if (typeof callback === 'function') {

                if (evt === null) {
                    callback(delms);
                } else {
                    on(evt, delms, function (elm, e) {
                        callback(elm, e);
                    });
                }

            } else {
                return delms;
            }
        }
    } else {
        return false;
    }
}