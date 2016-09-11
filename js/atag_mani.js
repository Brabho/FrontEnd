/*
 * A tag Manipulate 
 * 1. Open Outbound Link in New Tag
 * 2. Return False if link end with '#'
 */
window.addEventListener('load', function () {
    var all_atag = document.getElementsByTagName('a');
    for (var i = 0; i < all_atag.length; i++) {

        all_atag[i].addEventListener('click', function (e) {
            var lastChar = this.href.substr(this.href.length - 1);
            if (lastChar === "#") {
                e.preventDefault();
            }

            var a_regex = new RegExp('/' + window.location.host + '/');
            if (!a_regex.test(this.href)) {
                e.preventDefault();
                e.stopPropagation();
                window.open(this.href, '_blank');
            }

        }, false);
    }
}, false);