/*
 * Lazy Load Image(s)
 * Example: <img src="default.gif" class="lazy-load-imgs" data-lazy-load-imgs="image/path.png" />
 */
function lazy_load_imgs() {
    $('.lazy-load-imgs', null, function(lazy_img) {
        if(is_visible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {
            var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');
            lazy_img.setAttribute('src', lazy_load_attr);
            lazy_img.removeAttribute('data-lazy-load-imgs');
            lazy_img.classList.remove('lazy-load-imgs');
        }
    });
}

/*
 * Styled Placeholder
 */
function placeholder_up() {
    $('.placeholder_field', null, function(el) {
        var elm_vals = trims(el.value);
        var the_placeholder = el.parentElement.getElementsByClassName('placeholder');

        if(the_placeholder.length > 0) {
            the_placeholder = the_placeholder[0];

            /*
             * If Text Align Center or Right
             */
            if(css_prop(el, 'text-align') === 'center') {
                the_placeholder.style.left = '50%';
                the_placeholder.style.transform = 'translate(-50%, 0)';
            } else if(css_prop(el, 'text-align') === 'right') {
                the_placeholder.style.right = '0';
                the_placeholder.style.textAlign = 'right';
            }

            /*
             * Empty Field
             */
            if(elm_vals.length < 1 || elm_vals === ' ') {
                the_placeholder.classList.remove('placeholder_up');
                el.classList.remove('placeholder_field_str');
            } else {
                /*
                 * Not Empty Field
                 */
                the_placeholder.classList.add('placeholder_up');
                el.classList.add('placeholder_field_str');
            }
        }
    });
}

/*
 * Auto Resize Textarea
 */
function resize_textarea() {
    $('.resize_textarea', null, function(el) {

        var scrolled = false;
        var overflo = css_prop(el, 'overflow');
        if(overflo.match(/scroll/gi)) {
            scrolled = el.scrollTop;
        }

        el.style.height = 'auto';
        var el_max_height = false;

        /*
         * Lowest Height
         */
        var el_height = parseInt(el.scrollHeight);
        if(el_height < 32) {
            el_height = 32;
        }

        /*
         * Set Minimum Height
         */
        if(el.hasAttribute('data-min-height') && el_height < parseInt(el.getAttribute('data-min-height'))) {
            el_height = el.getAttribute('data-min-height');
            el.style.overflow = 'hidden';
        }

        /*
         * Set Maximum Height
         */
        if(el.hasAttribute('data-max-height') && el_height > parseInt(el.getAttribute('data-max-height'))) {
            el_height = el.getAttribute('data-max-height');
            el_max_height = true;
        }

        /*
         * Set Fix Height
         */
        el.style.height = el_height + 'px';

        /*
         * Scroll Set for Max height
         */
        if(el_max_height) {
            if(scrolled) {
                el.scrollTo(0, scrolled);

            } else {
                el.style.overflowY = 'scroll';
                el.scrollTo(0, el.scrollHeight);
            }
        }

        /*
         * Scroll Bar Position Data
         */
        if(scrolled && el.hasAttribute('data-scroll-to')) {
            var el_scrollto = el.getAttribute('data-scroll-to');

            if(el_scrollto.match(/[a-z]/gi)) {

                switch(el_scrollto) {
                    case 'top':
                        el.scrollTo(0, 0);
                        break;

                    case 'bottom':
                        el.scrollTo(0, el.scrollHeight);
                        break;
                }
            } else if(el_scrollto.match(/[0-9]/g)) {
                el_scrollto = el_scrollto.split(',');
                el.scrollTo(parseInt(el_scrollto[0]), parseInt(el_scrollto[1]));
            }
            el.removeAttribute('data-scroll-to');
        }

        /*
         * Remove New Data Element
         */
        el.removeAttribute('data-new');
    });
}

/*
 * Cels Show hide
 */
function cels_show_hide() {
    var window_width = parseInt(window.innerWidth);
    /*
     * Small Width 320px
     */
    if(window_width < 321) {
        $('.cel_s_show', null, function(el) {
            el.style.display = 'inline-block';
        });
        $('.cel_s_hide', null, function(el) {
            el.style.display = 'none';
        });
    } else {
        $('.cel_s_show', null, function(el) {
            el.style.display = 'none';
        });
        $('.cel_s_hide', null, function(el) {
            el.style.display = 'inline-block';
        });
    }
    /*
     * Medium Width 480px
     */
    if(window_width < 481) {
        $('.cel_m_show', null, function(el) {
            el.style.display = 'inline-block';
        });
        $('.cel_m_hide', null, function(el) {
            el.style.display = 'none';
        });
    } else {
        $('.cel_m_show', null, function(el) {
            el.style.display = 'none';
        });
        $('.cel_m_hide', null, function(el) {
            el.style.display = 'inline-block';
        });
    }
    /*
     * Large Width 600px
     */
    if(window_width < 601) {
        $('.cel_l_show', null, function(el) {
            el.style.display = 'inline-block';
        });
        $('.cel_l_hide', null, function(el) {
            el.style.display = 'none';
        });
    } else {
        $('.cel_l_show', null, function(el) {
            el.style.display = 'none';
        });
        $('.cel_l_hide', null, function(el) {
            el.style.display = 'inline-block';
        });
    }
    /*
     * Desktop Width 768px
     */
    if(window_width < 769) {
        $('.cel_show', null, function(el) {
            el.style.display = 'inline-block';
        });
        $('.cel_hide', null, function(el) {
            el.style.display = 'none';
        });
    } else {
        $('.cel_show', null, function(el) {
            el.style.display = 'none';
        });
        $('.cel_hide', null, function(el) {
            el.style.display = 'inline-block';
        });
    }
    /*
     * Wide Screen Width 1200px
     */
    if(window_width < 1201) {
        $('.cel_el_show', null, function(el) {
            el.style.display = 'inline-block';
        });
        $('.cel_el_hide', null, function(el) {
            el.style.display = 'none';
        });
    } else {
        $('.cel_el_show', null, function(el) {
            el.style.display = 'none';
        });
        $('.cel_el_hide', null, function(el) {
            el.style.display = 'inline-block';
        });
    }
}

/*
 * Sets Basic
 * Require Complete Library
 */
window.addEventListener('DOMContentLoaded', function() {

    cels_show_hide();

    /*
     * A Tag Manipulate
     */
    $('a', null, function(el) {
        el.addEventListener('click', function(e) {

            /*
             * Prevent Default Behaviour on hash link, if Link end with (#)
             */
            var lastChar = this.href.substr(this.href.length - 1);
            if(lastChar === "#") {
                e.preventDefault();
            }
        }, false);
    });

    /*
     * Set `disabled` Attribute for `disable` Class Name
     */
    $('.disabled', null, function(el) {
        el.setAttribute('disabled', 'true');
    });

    /*
     * Open Image from src path (img_click)
     */
    on('left_click', '.img_click', function(el) {
        window.location.href = el.getAttribute('src');
    });

    /*
     * Number Pattern
     * Number Field Only
     */
    on('keyup', '.number_field', function(el) {
        var replace_val = el.value.replace(/[^0-9]/img, '');
        el.value = trims(replace_val);
    });

    $('.number_field', null, function(el) {
        var replace_val = el.value.replace(/[^0-9]/img, '');
        el.value = trims(replace_val);
    });

    /*
     * Require this field
     * Highlight if field is Blank / Empty
     * Optional: animate.css (More Style & Effect)
     */
    $('.require_this', null, function(el) {
        var elm_vals = trims(el.value);
        el.addEventListener('blur', function() {
            if(elm_vals.length < 1 || elm_vals === '' || elm_vals === ' ') {
                el.classList.add('field_require', 'blink');
                setTimeout(function() {
                    el.classList.remove('blink');
                }, 2000);
            } else {
                el.classList.remove('field_require', 'blink');
            }
        }, false);
    });

    /*
     * Anchor Tag & Elements
     * Bookmark Scroll
     *
     * Example
     * <a href="#profile" class="anchor_tag">Profile</a>
     * <div id="profile"></div>
     */
    on('left_click', '.anchor_tag', function(el, e) {
        e.preventDefault();
        var elm_href = el.href;
        elm_href = elm_href.split('#')[1];
        scrollto_bookmark(elm_href);
    });

    /*
     * Example
     * <div data-elem-id="top" class="anchor_elem"></div>
     * <div id="top">Header</div>
     */
    on('left_click', '.anchor_elem', function(el) {
        scrollto_bookmark(el.getAttribute('data-elem-id'));
    });

    /*
     * Closing Lightbox
     */
    on('left_click', '.lightbox_close', function(el) {
        while(el.parentElement) {
            el = el.parentElement;
            if(el.classList.contains('lightbox')) {
                el.style.display = 'none';
                el.getElementsByClassName('lightbox_content')[0].innerHTML = '';
                break;
            }
        }
    });

    /*
     * TAB Contents Menu
     */
    if($('.tab_link') && $('.tab_contents')) {

        var get_uri_hash = false;
        for(var i = 0; i < $('.tab_contents').length; i++) {
            if(uri_hash() && $('.tab_contents')[i].hasAttribute('id') && uri_hash() === $('.tab_contents')[i].getAttribute('id')) {
                get_uri_hash = i;
                break;
            }
        }

        if(get_uri_hash) {
            $('.tab_link')[get_uri_hash].classList.add('tab_link_active');
            $('.tab_contents')[get_uri_hash].style.display = 'block';
        } else {
            $('.tab_link')[0].classList.add('tab_link_active');
            $('.tab_contents')[0].style.display = 'block';
        }

        on('left_click', '.tab_link', function(el, e) {
            e.preventDefault();
            $('.tab_link', null, function(el) {
                el.classList.remove('tab_link_active');
            });
            el.classList.add('tab_link_active');

            $('.tab_contents', null, function(el) {
                el.style.display = 'none';
            });
            $('.tab_contents')[el_index(el)].style.display = 'block';
        });
    }

    on('keydown', '.resize_textarea', function() {
        resize_textarea();
    });

    on('keyup', '.resize_textarea', function() {
        resize_textarea();
    });

    /*
     * Functions Calling
     * Lazy Load
     * Placeholder
     * Auto Resize Textarea
     */
    placeholder_up();
    resize_textarea();

    setInterval(function() {
        placeholder_up();

        var all_div = document.getElementsByTagName('div');
        for(var i = 0; i < all_div.length; i++) {
            if(all_div[i].classList.contains('resize_textarea') && all_div[i].hasAttribute('data-new')) {
                resize_textarea();
                break;
            }
        }

    }, 300);

}, false);

window.addEventListener('resize', function() {
    cels_show_hide();
    resize_textarea();
}, false);

window.addEventListener('load', function() {
    cels_show_hide();
    resize_textarea();

    lazy_load_imgs();
    setInterval(lazy_load_imgs, 300);

}, false);