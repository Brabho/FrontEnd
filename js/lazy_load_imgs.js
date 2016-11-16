/*
 * Lazy Load Image(s) 
 * Require getParse.js
 * Example: <img src="default.png" class="lazy-load-imgs" data-lazy-load-imgs="main/image/file/path.png" />
 */
function lazy_load_imgs() {
    var lazy_load_imgs = document.getElementsByClassName('lazy-load-imgs');
    for (var i = 0; i < lazy_load_imgs.length; i++) {
        lazy_load_imgs[i].setAttribute('data-ofTop', lazy_load_imgs[i].offsetTop);
        if (getParse.isVisible(lazy_load_imgs[i]) && lazy_load_imgs[i].hasAttribute('data-lazy-load-imgs')) {
            var lazy_load_attr = lazy_load_imgs[i].getAttribute('data-lazy-load-imgs');
            lazy_load_imgs[i].setAttribute('src', lazy_load_attr);
            lazy_load_imgs[i].removeAttribute('data-lazy-load-imgs');
            lazy_load_imgs[i].style.backgroundColor = 'red';
        }
    }
}
window.addEventListener('load', function () {
    lazy_load_imgs();
    window.addEventListener('scroll', lazy_load_imgs, false);
}, false);