/*
 * Document Query Selector(s)
 */
function $(elms, callback) {
    var gElms = document.querySelectorAll(elms);
    if(gElms.length > 0) {
        if (gElms.length > 1) {
            if (typeof callback === 'function') {
                for (var i = 0; i < gElms.length; i++) {
                    callback(gElms[i]);
                }
            } else {
                return gElms;
            }
        } else {
            if (typeof callback === 'function') {
                callback(document.querySelector(elms));
            } else {
                return document.querySelector(elms);
            }
        }
    } else {
        return false;
    }
}