/*
 * Highlight if field is Blank / Empty
 * Optional: animate.css (More Style & Effect)
 */
window.addEventListener('load', function () {
    var requirethis = document.getElementsByClassName('requirethis');
    for (var i = 0; i < requirethis.length; i++) {
        requirethis[i].addEventListener('blur', function () {
            var fieldValue = this.value.trim();
            if (fieldValue === '' || fieldValue === ' ') {
                this.classList.add('fieldRequire', 'blink');
                var disElm = this;
                setTimeout(function () {
                    disElm.classList.remove('blink');
                }, 2000);
            } else {
                this.classList.remove('fieldRequire');
                this.classList.remove('blink');
            }
        }, false);
    }
}, false);