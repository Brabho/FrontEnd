/*
 * Lazy Load Image(s) 
 * Example: <img src="default.gif" class="lazy-load-imgs" data-lazy-load-imgs="image/path.png" />
 */
function lazy_load_imgs() {
    $('.lazy-load-imgs', function (lazy_img) {
        if (is_visible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {
            var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');
            lazy_img.setAttribute('src', lazy_load_attr);
            lazy_img.removeAttribute('data-lazy-load-imgs');
        }
    });
}

/*
 * Sets Basic
 * Require Complete Library
 */
window.addEventListener('load', function () {

    /*
     * A Tag Manipulate
     */
    $('a', function (elm) {
        elm.addEventListener('click', function (e) {

            /*
             * Prevent Default Behaviour on hash link, if Link end with (#)
             */
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
    });

    /*
     * Set `disabled` Attribute for `field_disable` Class Name
     */
    $('.field_disable', function (elm) {
        elm.setAttribute('disabled', 'true');
    });

    /*
     * Set `disabled` Attribute for `btn_disable` Class Name
     */
    $('.btn_disable', function (elm) {
        elm.setAttribute('disabled', 'true');
    });

    /*
     * Open IMG (img_click) in New Tab
     */
    $('.img_click', function (elm) {
        elm.addEventListener('click', function () {
            window.open(this.getAttribute('src'), '_blank');
        }, false);
    });

    /*
     * Highlight if field is Blank / Empty
     * Optional: animate.css (More Style & Effect)
     */
    $('.require_this', function (elm) {
        elm.addEventListener('blur', function () {
            var fieldValue = this.value.trim();
            if (fieldValue === '' || fieldValue === ' ') {
                this.classList.add('field_require', 'blink');
                var disElm = this;
                setTimeout(function () {
                    disElm.classList.remove('blink');
                }, 2000);
            } else {
                this.classList.remove('field_require', 'blink');
            }
        }, false);
    });

    /*
     * Lazy Load Function Calling
     */
    lazy_load_imgs();
    window.addEventListener('scroll', lazy_load_imgs, false);

}, false);