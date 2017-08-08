/*
 * Document On Event
 */
function on(type, callback) {
    if (document.attachEvent) {
        document.attachEvent('on' + type, function (e) {
            callback(e.target, e);
        });
    } else {
        document.addEventListener(type, function (e) {
            callback(e.target, e);
        }, false);
    }
}