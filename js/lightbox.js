/*
 * Light Box Close 
 * Require: `lightbox.css`
 */
window.addEventListener('load', function () {
    var lightbox_close = document.getElementsByClassName('lightbox_close');
    for (var i = 0; i < lightbox_close.length; i++) {
        lightbox_close[i].addEventListener('click', function () {
            this.parentElement.remove();
        });
    }
}, false);