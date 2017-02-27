/*
 * Document On Event
 */
function onEvt(type, callback) {
//    if (typeof elem === 'undefined' || elem === null) {
//        
//    } else {
//        if (elem.attachEvent) {
//            elem.attachEvent("on" + type, function () {
//                callback(elem);
//            });
//        } else {
//            elem.addEventListener(type, function () {
//                callback(elem);
//            }, false);
//        }
//    }

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