/*
 * A Tag Manipulate
 * 1. Open External Link(s) in New Tag
 * 2. prevent Default Behaviour if Link end with '#'
 */
window.addEventListener('load', function () {
    var all_atag = document.getElementsByTagName('a');
    for (var i = 0; i < all_atag.length; i++) {

        /*
         * prevent Default Behaviour on hash link (#)
         */
        all_atag[i].addEventListener('click', function (e) {
            var lastChar = this.href.substr(this.href.length - 1);
            if (lastChar === "#") {
                e.preventDefault();
            }

            /*
             * Open External Link on New Tab
             */
            var a_regex = new RegExp('/' + window.location.host + '/');
            if (!a_regex.test(this.href)) {
                e.preventDefault();
                e.stopPropagation();
                window.open(this.href, '_blank');
            }

        }, false);
    }
}, false);