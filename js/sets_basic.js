/*
 * Sets Basic
 */
window.addEventListener('load', function () {

    /*
     * A Tag Manipulate
     */
    for (var i = 0; i < _('a').length; i++) {

        /*
         * Prevent Default Behaviour on hash link, if Link end with (#)
         */
        _('a')[i].addEventListener('click', function (e) {
            var lastChar = this.href.substr(this.href.length - 1);
            if (lastChar === "#") {
                e.preventDefault();
            }

            /*
             * Open External Link(s) on New Tab
             */
            var a_regex = new RegExp('/' + window.location.host + '/');
            if (!a_regex.test(this.href)) {
                e.preventDefault();
                e.stopPropagation();
                window.open(this.href, '_blank');
            }

        }, false);
    }

    /*
     * Set `disabled` Attribute for `fieldDisable` Class Name
     */
    for (var j = 0; j < _('.fieldDisable').length; j++) {
        _('.fieldDisable')[j].setAttribute('disabled', 'disabled');
    }

    /*
     * Set `disabled` Attribute for `btnDisable` Class Name
     */
    for (var k = 0; k < _('.btnDisable').length; k++) {
        _('.btnDisable')[k].setAttribute('disabled', 'disabled');
    }

    /*
     * Open IMG (img_click) in New Tab
     */
    for (var l = 0; l < _('.img_click').length; l++) {
        _('.img_click')[l].addEventListener('click', function () {
            window.open(this.getAttribute('src'), '_blank');
        }, false);
    }

    /*
     * Highlight if field is Blank / Empty
     * Optional: animate.css (More Style & Effect)
     */
    for (var m = 0; m < _('.requirethis').length; m++) {
        _('.requirethis')[m].addEventListener('blur', function () {
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

    /*
     * Lazy Load Function Calling
     */
    if (typeof lazy_load_imgs === 'function') {
        lazy_load_imgs();
        window.addEventListener('scroll', lazy_load_imgs, false);
    }

}, false);