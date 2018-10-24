/*
 * FrontEnd
 * Version: 5.2
 * License: (C) 2015 - 2018 under GNU General Public License Version 2.
 * Download/Clone: https://github.com/krishnaTORQUE/FrontEnd
 */
function $(elms, evt, callback) {var gElms = document.querySelectorAll(elms);var gElms_length = gElms.length;if (gElms_length > 0) {if (gElms_length > 1) {if (typeof callback === 'function') {for (var i = 0; i < gElms_length; i++) {if (evt === null) {callback(gElms[i]);} else {on(evt, gElms[i], function (elm, e) {callback(elm, e);});}}} else {return gElms;}} else {var delms = document.querySelector(elms);if (typeof callback === 'function') {if (evt === null) {callback(delms);} else {on(evt, delms, function (elm, e) {callback(elm, e);});}} else {return delms;}}} else {return false;}}function on(type, elm, callback) {if (document.attachEvent) {if (type === 'left_click') {type = 'click';document.attachEvent('on' + type, function (e) {if (e.which === 1) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else if (type === 'middle_click') {type = 'click';document.attachEvent('on' + type, function (e) {if (e.which === 2) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else if (type === 'right_click') {type = 'click';document.attachEvent('on' + type, function (e) {if (e.which === 3) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else {document.attachEvent('on' + type, function (e) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}});}} else {if (type === 'left_click') {type = 'click';document.addEventListener(type, function (e) {if (e.which === 1) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else if (type === 'middle_click') {type = 'click';document.addEventListener(type, function (e) {if (e.which === 2) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else if (type === 'right_click') {type = 'click';document.addEventListener(type, function (e) {if (e.which === 3) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}}, false);} else {document.addEventListener(type, function (e) {if (typeof elm === 'undefined' || elm === null) {callback(e.target, e);} else {if (typeof elm === 'object' && elm.contains(e.target)) {callback(e.target, e);} else if (typeof elm === 'string' && $(elm)) {if ($(elm).length > 1) {$(elm, null, function (ele) {if (ele.contains(e.target)) {callback(e.target, e);}});} else if ($(elm).contains(e.target)) {callback(e.target, e);}}}}, false);}}}function is_var(vari) {return (typeof vari !== 'undefined' && vari !== null && vari.toString() !== '' && vari.toString().length > 0);}function is_qstr(field) {var url = window.location.search;if (url.indexOf('?' + field + '=') !== -1) {return true;} else if (url.indexOf('&' + field + '=') !== -1) {return true;}return false;}function qstr(param) {var result = false;var uris = window.location.search;if (uris.length > 0) {if (uris.match(/&/g)) {uris = uris.substr(1);var uris_a = uris.split('&');var uris_a_length = uris_a.length;for (var i = 0; i < uris_a_length; i++) {var part = uris_a[i].split('=');if (part[0] === param) {result = part[1];}}return result;} else {var uris_q = uris.split('?');var uris_q_vals = uris_q[1].split('=');if (uris_q_vals[0] === param) {result = uris_q_vals[1];}return result;}}return result;}function uri_hash() {if (window.location.hash && location.href.indexOf("#") != -1) {return window.location.hash.substring(1);}return false;}function rand(min, max) {return Math.floor((Math.random() * max) + min);}function rand_num(length) {if (typeof length === 'undefined') {length = '40';}var value = '';for (var i = 0; i < length; i++) {value += Math.floor((Math.random() * 9) + 0);}return value;}function rand_str(length) {if (typeof length === 'undefined') {length = '40';}var value = '';var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';for (var i = 0; i < length; i++) {value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));}return value;}function uc_words(str) {return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {return $1.toUpperCase();});}function uc_first(str) {return str.charAt(0).toUpperCase() + str.slice(1);}function trims(str, space, delmi) {str = str.trim();if (typeof delmi === 'undefined') {delmi = '[\t|\n|\r|\0\x0B]';} else {delmi = '[' + delmi + ']';}str = str.replace(new RegExp(delmi, 'img'), '');str = str.replace(/\s+/g, ' ');if (typeof space !== 'undefined' && space !== null) {str = str.replace(/\s+/g, space);}return str.trim();}function parse_html(html) {var content = new DOMParser().parseFromString(html, 'text/html');return content;}function css_prop(el, prop) {return window.getComputedStyle(el).getPropertyValue(prop);}function el_index(el) {if (el.parentElement !== null) {return Array.prototype.indexOf.call(el.parentElement.children, el);}return 'document';}function time_ago(time) {time = Math.round(new Date(time).getTime());var now = parseInt(new Date().getTime());var second = parseInt(now - time) / 1000;var ago = '';var ago_str = '';if (second < 60) {ago = Math.round(parseInt(second));ago_str = ago + ' second';} else if (second < 3600) {ago = Math.round(parseInt(second / 60));ago_str = ago + ' minute';} else if (second < 86400) {ago = Math.round(parseInt(second / 3600));ago_str = ago + ' hour';} else if (second < 2592000) {ago = Math.round(parseInt(second / 86400));ago_str = ago + ' day';} else if (second < 31536000) {ago = Math.round(parseInt(second / 2592000));ago_str = ago + ' month';} else if (second > 31536000) {ago = Math.round(parseInt(second / 31536000));ago_str = ago + ' year';}if (ago > 1) {ago_str = ago_str + 's';} else if (ago < 1) {ago_str = 'Just Now';}return ago_str;}function scroll_position() {var coordinate = [];coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;return coordinate;}function has_scroll(el) {if (typeof el === 'undefined' || el === null) {return (document.body.scrollHeight > window.innerHeight);}return (el.scrollHeight > el.clientHeight);}function is_visible(el) {if (has_scroll(null)) {if (el.offsetTop < window.innerHeight) {return true;} else if ((parseInt(el.offsetTop) - parseInt(window.innerHeight)) <= scroll_position()['y']) {return true;}return false;}return true;}function scrollto_bookmark(el, arg) {if (typeof arg === 'undefined') {arg = [];}if (typeof arg['distance'] === 'undefined') {arg['distance'] = 0;}if (typeof arg['speed'] === 'undefined') {arg['speed'] = 10;}if (el !== 'undefined' && el.length > 0 && el !== ' ' && has_scroll()) {var scroll_animate = setInterval(function () {var current_y = window.pageYOffset + window.innerHeight;if (window.pageYOffset < ($('#' + el).offsetTop - arg['distance'])) {window.scrollTo(0, scroll_position()['y'] + arg['speed']);if (window.pageYOffset >= ($('#' + el).offsetTop - arg['distance'])) {clearInterval(scroll_animate);}}else {window.scrollTo(0, scroll_position()['y'] - arg['speed']);if (window.pageYOffset < ($('#' + el).offsetTop - arg['distance'])) {clearInterval(scroll_animate);}}if (current_y >= document.documentElement.offsetHeight || scroll_position()['y'] <= 0) {clearInterval(scroll_animate);}}, arg['speed']);}}function length_mk(val) {if (val > 1000) {val = (val / 1000).toFixed(1);if (val > 1000) {val = (val / 1000).toFixed(1) + 'M';} else {val = val + 'K';}}return val;}function delay_css(id, href) {var elm = document.getElementById(id);if (elm) {elm.setAttribute('href', href);elm.setAttribute('rel', 'stylesheet');elm.setAttribute('type', 'text/css');elm.removeAttribute('id');}}function valid_alpha(alpha, check) {if (typeof check === 'undefined') {check = 'all';}switch (check) {case 'all':return ((/^[a-zA-Z]+$/).test(alpha));break;case 'low':return ((/^[a-z]+$/).test(alpha));break;case 'up':return ((/^[A-Z]+$/).test(alpha));break;}}function valid_num(num) {return ((/^[0-9]+$/).test(num));}function valid_email(email) {var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return (regex.test(email));}function valid_ip(ip) {var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return (regex.test(ip));}function valid_url(url) {var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return (regex.test(url));}function valid_input(target) {return (target.checkValidity() === true && target.validity.valid === true);}function usr_browser() {var browsers_list = ['Firefox','Opr','Edge','Chrome','Safari','Netscape','Maxthon','Konqueror','MSIE','Trident','UCBrowser','UCWEB'];var browsers_list_length = browsers_list.length;for (var j = 0; j < browsers_list_length; j++) {var the_sbrowser = new RegExp(browsers_list[j], 'gi');if (navigator.userAgent.match(the_sbrowser)) {var get_brow = browsers_list[j];break;}}if (get_brow && get_brow !== 'undefined') {if (get_brow === 'MSIE' || get_brow === 'Trident') {return 'Internet Explorer';} else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {return 'UC Browser';} else if (get_brow === 'Opr') {return 'Opera';} else {return get_brow;}} else {return 'Other';}}function usr_os() {var os = 'Other';var os_arr = {'windows nt 10': 'Windows 10','windows nt 6.3': 'Windows 8.1','windows nt 6.2': 'Windows 8','windows nt 6.1': 'Windows 7','windows nt 6.0': 'Windows Vista','windows nt 5.2': 'Windows Server 2003/XP x64','windows nt 5.1': 'Windows XP','windows xp': 'Windows XP','windows nt 5.0': 'Windows 2000','windows me': 'Windows ME','win98': 'Windows 98','win95': 'Windows 95','win16': 'Windows 3.11','macintosh|mac os x': 'Mac OS X','mac_powerpc': 'Mac OS 9','ubuntu': 'Ubuntu','Red Hat': 'Red Hat','linux': 'Linux','iphone': 'iPhone','ipod': 'iPod','ipad': 'iPad','android': 'Android','blackberry': 'BlackBerry','webos': 'Mobile'};var obj_length = Object.keys(os_arr).length;for (var i = 0; i < obj_length; i++) {var regex = new RegExp(Object.keys(os_arr)[i], 'gi');if (navigator.userAgent.match(regex)) {os = os_arr[Object.keys(os_arr)[i]];break;}}return os;}function ajax(arr) {if (!arr.method) {arr.method = 'POST';}if (!arr.type) {arr.type = 'application/x-www-form-urlencoded; charset=utf-8';}var xmlHttpReq = false;if (window.XMLHttpRequest) {xmlHttpReq = new XMLHttpRequest();} else if (window.ActiveXObject) {try {xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");} catch (ex) {try {xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");} catch (ex) {}}}if (!xmlHttpReq) {if (arr.error) {arr.error({'response': 'BROWSER'});}return;}var data = '';if (arr.data) {if (arr.formData) {data = arr.data;} else {var data_keys = Object.keys(arr.data);for (var i = 0; i < data_keys.length; i++) {if (i < 1) {data += data_keys[i] + '=' + arr.data[data_keys[i]];} else {data += '&' + data_keys[i] + '=' + arr.data[data_keys[i]];}}}}if (arr.method === 'GET' || arr.method === 'HEAD' || arr.method === 'PUT' || arr.method === 'DELETE') {if (data !== '') {arr.url += '?' + data;data = null;}xmlHttpReq.open(arr.method, arr.url, true);} else if (arr.method === 'POST') {xmlHttpReq.open(arr.method, arr.url, true);if (arr.type && !arr.formData) {xmlHttpReq.setRequestHeader('Content-Type', arr.type);}} else {if (arr.error) {arr.error({'response': 'METHOD'});}return;}if (typeof arr.progress === 'function') {xmlHttpReq.upload.addEventListener('progress', arr.progress, false);}xmlHttpReq.addEventListener('load', function () {if (this.status >= 200 && this.status < 400) {if (typeof arr.success === 'function') {arr.success(this.responseText.trim());}} else {if (arr.error) {arr.error({'response': 'HEADER','code': this.status});}}}, false);xmlHttpReq.addEventListener('error', function () {if (arr.error) {arr.error({'response': 'SERVER','code': this.status});}}, false);xmlHttpReq.addEventListener('abort', function () {if (arr.error) {arr.error({'response': 'ABORT'});}}, false);xmlHttpReq.send(data);}var cookie = {set: function (param) {if (typeof param['extime'] === 'undefined') {param['extime'] = 86400;}if (typeof param['path'] === 'undefined') {param['path'] = '/';}var date = new Date();date.setTime(date.getTime() + (param['extime'] * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = param['name'] + '=' + param['value'] + '; ' + expires + '; ' + param['path'];},get: function (name) {var result = false;var s_cookie = document.cookie.trim().split(';');var s_cookie_length = s_cookie.length;for (var i = 0; i < s_cookie_length; i++) {var ss_cookie = s_cookie[i].split('=');if (ss_cookie[0].charAt(0) === ' ') {ss_cookie[0] = ss_cookie[0].substr(1);}if (name === ss_cookie[0]) {result = ss_cookie[1];break;}}return result;},remove: function (name, path) {if (typeof path === 'undefined') {path = '/';}var date = new Date();date.setTime(date.getTime() - (86400 * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = name + '=' + '' + '; ' + expires + '; ' + path;},remove_all: function (path) {if (typeof path === 'undefined') {path = '/';}var s_cookie = document.cookie.trim().split(';');var s_cookie_length = s_cookie.length;for (var i = 0; i < s_cookie_length; i++) {var ss_cookie = s_cookie[i].split('=');this.remove(ss_cookie[0], path);}}};var animate = {fade: function (el, inout, time) {if (typeof time === 'undefined') {time = '3';}if (typeof inout === 'undefined') {inout = 'out';}switch (inout) {case 'in':var opa = '0';el.style.opacity = opa;el.style.display = 'block';var setInt = setInterval(function () {opa = Number(opa) + Number('0.01');if (opa > 1) {opa = 1;el.setAttribute('style', 'display: block');clearInterval(setInt);} else {el.style.opacity = opa;}}, time);break;case 'out':var opa = '1.0';el.style.opacity = opa;var setInt = setInterval(function () {opa = Number(opa) - Number(0.01);if (opa < 0) {opa = 0;el.setAttribute('style', 'display: none');clearInterval(setInt);el.style.display = 'none';} else {el.style.opacity = opa;}}, time);break;}},slide: function (el, updown, time) {if (typeof time === 'undefined') {time = '3';}if (typeof updown === 'undefined') {updown = 'up';}el.style.overflow = 'hidden';switch (updown) {case 'down':var height = css_prop(el, 'height');height = height.toString().replace(/px/i, '');var hei = 0;el.style.height = '0px';el.style.display = 'block';var setInt = setInterval(function () {hei += 2;if (hei > height) {clearInterval(setInt);el.setAttribute('style', 'display: block');} else {el.style.height = hei + 'px';}}, time);break;case 'up':el.style.display = 'block';var height = el.clientHeight;var hei = el.clientHeight;var setInt = setInterval(function () {hei -= 2;if (hei < 0) {clearInterval(setInt);el.setAttribute('style', 'display: none; height: ' + height + 'px');} else {el.style.height = hei + 'px';}}, time);break;}}};function lazy_load_imgs() {$('.lazy-load-imgs', null, function (lazy_img) {if (is_visible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');lazy_img.setAttribute('src', lazy_load_attr);lazy_img.removeAttribute('data-lazy-load-imgs');lazy_img.classList.remove('lazy-load-imgs');}});}function placeholder_up() {$('.placeholder_field', null, function (el) {var elm_vals = trims(el.value);var the_placeholder = el.parentElement.getElementsByClassName('placeholder');if (the_placeholder.length > 0) {the_placeholder = the_placeholder[0];if (css_prop(el, 'text-align') === 'center') {the_placeholder.style.left = '50%';the_placeholder.style.transform = 'translate(-50%, 0)';} else if (css_prop(el, 'text-align') === 'right') {the_placeholder.style.right = '0';the_placeholder.style.textAlign = 'right';}if (elm_vals.length < 1 || elm_vals === ' ') {the_placeholder.classList.remove('placeholder_up');el.classList.remove('placeholder_field_str');} else {the_placeholder.classList.add('placeholder_up');el.classList.add('placeholder_field_str');}}});}function resize_textarea() {$('.resize_textarea', null, function (el) {el.style.height = 'auto';var el_height = parseInt(el.scrollHeight);if (el_height < 32) {el_height = 32;}if (el.hasAttribute('data-min-height') && el_height < el.getAttribute('data-min-height')) {el_height = el.getAttribute('data-min-height');}if (el.hasAttribute('data-max-height') && el_height > el.getAttribute('data-max-height')) {el_height = el.getAttribute('data-max-height');el.style.overflowY = 'scroll';} else {el.style.overflow = 'hidden';}el.style.height = el_height + 'px';el.removeAttribute('data-new');});}function cels_show_hide() {var window_width = parseInt(window.innerWidth);if (window_width < 321) {$('.cel_s_show', null, function (el) {el.style.display = 'inline-block';});$('.cel_s_hide', null, function (el) {el.style.display = 'none';});} else {$('.cel_s_show', null, function (el) {el.style.display = 'none';});$('.cel_s_hide', null, function (el) {el.style.display = 'inline-block';});}if (window_width < 481) {$('.cel_m_show', null, function (el) {el.style.display = 'inline-block';});$('.cel_m_hide', null, function (el) {el.style.display = 'none';});} else {$('.cel_m_show', null, function (el) {el.style.display = 'none';});$('.cel_m_hide', null, function (el) {el.style.display = 'inline-block';});}if (window_width < 601) {$('.cel_l_show', null, function (el) {el.style.display = 'inline-block';});$('.cel_l_hide', null, function (el) {el.style.display = 'none';});} else {$('.cel_l_show', null, function (el) {el.style.display = 'none';});$('.cel_l_hide', null, function (el) {el.style.display = 'inline-block';});}if (window_width < 769) {$('.cel_show', null, function (el) {el.style.display = 'inline-block';});$('.cel_hide', null, function (el) {el.style.display = 'none';});} else {$('.cel_show', null, function (el) {el.style.display = 'none';});$('.cel_hide', null, function (el) {el.style.display = 'inline-block';});}if (window_width < 1201) {$('.cel_el_show', null, function (el) {el.style.display = 'inline-block';});$('.cel_el_hide', null, function (el) {el.style.display = 'none';});} else {$('.cel_el_show', null, function (el) {el.style.display = 'none';});$('.cel_el_hide', null, function (el) {el.style.display = 'inline-block';});}}window.addEventListener('DOMContentLoaded', function () {cels_show_hide();$('a', null, function (el) {el.addEventListener('click', function (e) {var lastChar = this.href.substr(this.href.length - 1);if (lastChar === "#") {e.preventDefault();}}, false);});$('.disabled', null, function (el) {el.setAttribute('disabled', 'true');});on('left_click', '.img_click', function (el) {window.location.href = el.getAttribute('src');});on('keyup', '.number_field', function (el) {var replace_val = el.value.replace(/[^0-9]/img, '');el.value = trims(replace_val);});$('.number_field', null, function (el) {var replace_val = el.value.replace(/[^0-9]/img, '');el.value = trims(replace_val);});$('.require_this', null, function (el) {var elm_vals = trims(el.value);el.addEventListener('blur', function () {if (elm_vals.length < 1 || elm_vals === '' || elm_vals === ' ') {el.classList.add('field_require', 'blink');setTimeout(function () {el.classList.remove('blink');}, 2000);} else {el.classList.remove('field_require', 'blink');}}, false);});on('left_click', '.anchor_tag', function (el, e) {e.preventDefault();var elm_href = el.href;elm_href = elm_href.split('#')[1];scrollto_bookmark(elm_href);});on('left_click', '.anchor_elem', function (el) {scrollto_bookmark(el.getAttribute('data-elem-id'));});on('left_click', '.lightbox_close', function (el) {while (el.parentElement) {el = el.parentElement;if (el.classList.contains('lightbox')) {el.style.display = 'none';el.getElementsByClassName('lightbox_content')[0].innerHTML = '';break;}}});if ($('.tab_link') && $('.tab_contents')) {var get_uri_hash = false;for (var i = 0; i < $('.tab_contents').length; i++) {if (uri_hash() && $('.tab_contents')[i].hasAttribute('id') && uri_hash() === $('.tab_contents')[i].getAttribute('id')) {get_uri_hash = i;break;}}if (get_uri_hash) {$('.tab_link')[get_uri_hash].classList.add('tab_link_active');$('.tab_contents')[get_uri_hash].style.display = 'block';} else {$('.tab_link')[0].classList.add('tab_link_active');$('.tab_contents')[0].style.display = 'block';}on('left_click', '.tab_link', function (el, e) {e.preventDefault();$('.tab_link', null, function (el) {el.classList.remove('tab_link_active');});el.classList.add('tab_link_active');$('.tab_contents', null, function (el) {el.style.display = 'none';});$('.tab_contents')[el_index(el)].style.display = 'block';});}on('keydown', '.resize_textarea', function () {resize_textarea();});lazy_load_imgs();placeholder_up();resize_textarea();setInterval(function () {lazy_load_imgs();placeholder_up();var all_div = document.getElementsByTagName('div');for (var i = 0; i < all_div.length; i++) {if (all_div[i].classList.contains('resize_textarea') && all_div[i].hasAttribute('data-new')) {resize_textarea();break;}}}, 300);}, false);window.addEventListener('resize', function () {cels_show_hide();}, false);