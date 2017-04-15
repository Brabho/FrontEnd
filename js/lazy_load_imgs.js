/*
 * Lazy Load Image(s) 
 * Require: `functions.js`
 * Example: <img src="default.gif" class="lazy-load-imgs" data-lazy-load-imgs="image/path.png" />
 */
function lazy_load_imgs() {
    $('.lazy-load-imgs', function (lazy_img) {
        if (isVisible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {
            var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');
            lazy_img.setAttribute('src', lazy_load_attr);
            lazy_img.removeAttribute('data-lazy-load-imgs');
        }
    });
}