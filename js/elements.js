/*
 * Document Query Selector(s)
 */
function _(elms) {
    return (document.querySelectorAll(elms).length > 0) ? document.querySelectorAll(elms) : false;
}

function dqs(elms, callback) {
    var gElms = document.querySelectorAll(elms);
    for (var i = 0; i < gElms.length; i++) {
        callback(gElms[i]);
    }
}