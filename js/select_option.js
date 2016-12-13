/*
 * Select Option Drop Down
 * Require: `select_option.css`
 * Optional: btn.css & drop_down_box.css (More Style & Effect)
 */
window.addEventListener('load', function () {
    var select_option_elms = document.getElementsByClassName('select_option');
    for (var i = 0; i < select_option_elms.length; i++) {
        var option_selected = false, optlabel = '', option_vals = [], set, inr_htm, options_vl;

        /*
         * Get Values
         */
        var option_elms = select_option_elms[i].getElementsByTagName('option');
        for (var j = option_elms.length; j > 0; j--) {

            /*
             * Option Selected
             */
            if (option_elms[0].hasAttribute('selected')) {
                option_selected = option_elms[0].textContent;
            }

            /*
             * Option Label(s)
             */
            if (option_elms[0].hasAttribute('data-optlabel')) {
                option_vals[j] = '<div class="option optlabel" disabled>' + option_elms[0].textContent + '</div>';
            } else {

                /*
                 * Rest Options
                 */
                option_vals[j] = '<div class="option">' + option_elms[0].textContent + '</div>';
            }

            option_elms[0].remove();

            if (option_elms.length <= 0) {
                select_option_elms[i].innerHTML = '';
            }
        }

        /*
         * Initial view
         */
        if (option_selected) {
            set = '<div class="set btn">' + option_selected + '</div>';
        } else {
            set = '<div class="set btn">' + option_vals[option_vals.length - 1] + '</div>';
        }

        inr_htm = '<div class="drop_down_box select_option_box">';
        for (var k = option_vals.length - 1; k > 0; k--) {
            inr_htm += option_vals[k];
        }
        inr_htm += '</div>';

        select_option_elms[i].innerHTML = set + inr_htm;
        select_option_elms[i].style.display = 'inline';

        /*
         * Click to view options
         */
        select_option_elms[i].getElementsByClassName('set')[0].addEventListener('click', function () {
            select_option_reset();
            var is_opn = this.parentNode.getElementsByClassName('drop_down_box')[0];
            if (is_opn.style.display === 'block') {
                is_opn.style.display = 'none';
            } else {
                is_opn.style.display = 'block';
            }
            if (this.className.match(/btn_active/)) {
                this.classList.remove('btn_active');
            } else {
                this.classList.add('btn_active');
            }
        }, false);

        /*
         * On Click Option
         */
        options_vl = select_option_elms[i].getElementsByClassName('option');
        for (var l = 0; l < options_vl.length; l++) {
            options_vl[l].addEventListener('click', function () {
                this.parentNode.parentNode.getElementsByClassName('set')[0].textContent = this.textContent;
                select_option_reset();
            }, false);
        }
    }

    /*
     * Outside Click
     */
    document.addEventListener('click', function (e) {
        if (!e.target.className.match(/select_option|set|option/)) {
            select_option_reset();
        }
    }, false);

}, false);

function select_option_reset() {
    var select_option_elms = document.getElementsByClassName('select_option');
    for (var m = 0; m < select_option_elms.length; m++) {
        select_option_elms[m].getElementsByClassName('set')[0].classList.remove('btn_active');
        select_option_elms[m].getElementsByClassName('drop_down_box')[0].style.display = 'none';
    }
}