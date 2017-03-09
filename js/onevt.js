/*
 * Document On Event
 */
function onEvt(type, callback) {
    if (document.attachEvent) {
        document.attachEvent("on" + type, function (e) {
            callback(e.target);
        });
    } else {
        document.addEventListener(type, function (e) {
            callback(e.target);
        }, false);
    }
}