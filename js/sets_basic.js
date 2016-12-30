/*
 * Sets Basic
 */
window.addEventListener('load', function () {

    /*
     * A Tag Manipulate
     */
    var all_atag = document.getElementsByTagName('a');
    for (var i = 0; i < all_atag.length; i++) {

        /*
         * Prevent Default Behaviour on hash link, if Link end with (#)
         */
        all_atag[i].addEventListener('click', function (e) {
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
    var fieldDisable = document.getElementsByClassName('fieldDisable');
    for (var j = 0; j < fieldDisable.length; j++) {
        fieldDisable[j].setAttribute('disabled', 'disabled');
    }

    /*
     * Set `disabled` Attribute for `btnDisable` Class Name
     */
    var btnDisable = document.getElementsByClassName('btnDisable');
    for (var k = 0; k < btnDisable.length; k++) {
        btnDisable[k].setAttribute('disabled', 'disabled');
    }

    /*
     * Open IMG (img_click) in New Tab
     */
    var img_click = document.getElementsByClassName('img_click');
    for (var l = 0; l < img_click.length; l++) {
        img_click[l].addEventListener('click', function () {
            window.open(this.getAttribute('src'), '_blank');
        }, false);
    }

}, false);