/*
 * Auto Set Disable
 * Set `disabled` Attribute
 * if class name is `btnDisable` or `fieldDisable`
 */
window.addEventListener('load', function () {
    var btnDisable = document.getElementsByClassName('btnDisable');
    for (var i = 0; i < btnDisable.length; i++) {
        btnDisable[i].setAttribute('disabled', 'disabled');
    }

    var fieldDisable = document.getElementsByClassName('fieldDisable');
    for (var j = 0; j < fieldDisable.length; j++) {
        fieldDisable[j].setAttribute('disabled', 'disabled');
    }
}, false);