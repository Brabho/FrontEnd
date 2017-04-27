/*
 * FrontEnd
 * Version: 3.1
 * License: (C) 2015 - 2017 under GNU General Public License Version 2.
 * Download/Clone: https://github.com/krishnaTORQUE/FrontEnd
 */
function _(elms){return (document.querySelectorAll(elms).length > 0) ? document.querySelectorAll(elms): false;}function $(elms,callback){var gElms = document.querySelectorAll(elms);for (var i = 0; i < gElms.length; i++){callback(gElms[i]);}}function is_var(vari){return (vari !== null && vari !== '' && vari.length > 0);}function is_qstr(field){var url = window.location.search;if (url.indexOf('?' + field + '=') !== -1){return true;} else if (url.indexOf('&' + field + '=') !== -1){return true;}return false;}function qstr(param){var uris = window.location.search.split('&');for (var i = 0; i < uris.length; i++){var part = uris[i].split('=');if (part[0] === param){return part[1];break;}}}function rand(min,max){return Math.floor((Math.random() * max) + min);}function ranNum(length){if (typeof length === 'undefined'){length = '40';}var value = '';for (var i = 0; i < length; i++){value += Math.floor((Math.random() * 9) + 0);}return value;}function ranStr(length){if (typeof length === 'undefined'){length = '40';}var value = '';var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';for (var i = 0; i < length; i++){value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));}return value;}function uc_words(str){return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,function ($1){return $1.toUpperCase();});}function uc_first(str){return str.charAt(0).toUpperCase() + str.slice(1);}function trims(str,charlist){str = str.trim();charlist = !charlist ? ' \\s\u00A0': (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\\$1');var re = new RegExp('[' + charlist + ']+$','g');return (str + '').replace(re,'');}function rws(str){return str.replace(/^\s+|\s+$/g,'');}function parseHTML(html){var content = new DOMParser().parseFromString(html,'text/html');return content;}function cssProp(elem,prop){return window.getComputedStyle(elem).getPropertyValue(prop);}function elmIndex(elm){if (elm.parentElement !== null){return Array.prototype.indexOf.call(elm.parentElement.children,elm);}return 'document';}function scrollPosi(){var coordinate = [];coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;return coordinate;}function hasScroll(elem){if (typeof elem === 'undefined' || elem === null){return (document.body.scrollHeight > window.innerHeight) ? true: false;} else{return (elem.scrollHeight > elem.clientHeight) ? true: false;}}function isVisible(elem){if (this.hasScroll(null)){if (elem.offsetTop < window.innerHeight){return true;} else if ((parseInt(elem.offsetTop) - parseInt(window.innerHeight)) <= this.scrollPosi()['y']){return true;}return false;}return true;}function length_mk(val){if (val > 1000){val = (val / 1000).toFixed(1);if (val > 1000){val = (val / 1000).toFixed(1) + 'M';} else{val = val + 'K';}}return val;}function ajax(param, callback) {if (!param.method) {param.method = 'POST';}if (!param.file) {param.file = false;}if (!param.data) {param.data = null;}if (!param.type) {param.type = 'application/x-www-form-urlencoded; charset=utf-8';}if (!param.x_req_wid) {param.Xreq = true;}var xmlHttpReq = false;var return_data = [];if (window.XMLHttpRequest) {xmlHttpReq = new XMLHttpRequest();} else if (window.ActiveXObject) {try {xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");} catch (ex) {try {xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");} catch (ex) {xmlHttpReq = false;}}}if (xmlHttpReq) {var data = '';if (param.data !== null) {var mData = Object.keys(param.data);for (var i = 0; i < mData.length; i++) {var temp_key = mData[i];if (i > 0) {data += '&' + mData[i] + '=' + param.data[temp_key];} else {data += mData[i] + '=' + param.data[temp_key];}}}if (param.method === 'GET' || param.method === 'HEAD' || param.method === 'PUT' || param.method === 'DELETE') {if (param.data !== null) {param.url += '?' + data;data = null;}xmlHttpReq.open(param.method, param.url, true);} else if (param.method === 'POST') {xmlHttpReq.open(param.method, param.url, true);if (param.type && param.file === false) {xmlHttpReq.setRequestHeader('Content-Type', param.type);}if (param.x_req_wid === true) {xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');}} else {param.method = false;}if (param.method) {xmlHttpReq.addEventListener('load', function () {if (this.status >= 200 && this.status < 400) {return_data = {0: 'success','response': this.responseText.trim()};callback(return_data);} else {return_data = {0: 'error','response': 'HEADER','code': this.status};callback(return_data);}}, false);xmlHttpReq.addEventListener('error', function () {return_data = {0: 'error','response': 'SERVER'};callback(return_data);}, false);xmlHttpReq.addEventListener('abort', function () {return_data = {0: 'error','response': 'ABORT'};callback(return_data);}, false);if (param.file) {xmlHttpReq.send(param.file);} else {xmlHttpReq.send(data);}} else {return_data = {0: 'error','response': 'METHOD'};callback(return_data);}} else {return_data = {0: 'error','response': 'BROWSER'};callback(return_data);}}var animate = {fade: function (elem, inout, time) {if (typeof time === 'undefined') {time = '3';}if (typeof inout === 'undefined') {inout = 'out';}switch (inout) {case 'in':var opa = '0';elem.style.opacity = opa;elem.style.display = 'block';var setInt = setInterval(function () {opa = Number(opa) + Number('0.01');if (opa > 1) {opa = 1;elem.setAttribute('style', 'display: block');clearInterval(setInt);} else {elem.style.opacity = opa;}}, time);break;case 'out':var opa = '1.0';elem.style.opacity = opa;var setInt = setInterval(function () {opa = Number(opa) - Number(0.01);if (opa < 0) {opa = 0;elem.setAttribute('style', 'display: none');clearInterval(setInt);elem.style.display = 'none';} else {elem.style.opacity = opa;}}, time);break;}},slide: function (elem, updown, time) {if (typeof time === 'undefined') {time = '3';}if (typeof updown === 'undefined') {updown = 'up';}elem.style.overflow = 'hidden';switch (updown) {case 'down':var height = cssProp(elem, 'height');height = height.toString().replace(/px/i, '');var hei = 0;elem.style.height = '0px';elem.style.display = 'block';var setInt = setInterval(function () {hei += 2;if (hei > height) {clearInterval(setInt);elem.setAttribute('style', 'display: block');} else {elem.style.height = hei + 'px';}}, time);break;case 'up':elem.style.display = 'block';var height = elem.clientHeight;var hei = elem.clientHeight;var setInt = setInterval(function () {hei -= 2;if (hei < 0) {clearInterval(setInt);elem.setAttribute('style', 'display: none; height: ' + height + 'px');} else {elem.style.height = hei + 'px';}}, time);break;}}};var cookie = {set: function (param) {if (typeof param['extime'] === 'undefined') {param['extime'] = 86400;}if (typeof param['path'] === 'undefined') {param['path'] = '/';}var date = new Date();date.setTime(date.getTime() + (param['extime'] * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = param['name'] + '=' + param['value'] + '; ' + expires + '; ' + param['path'];},get: function (name) {var result = false;var s_cookie = document.cookie.trim().split(';');for (var i = 0; i < s_cookie.length; i++) {var ss_cookie = s_cookie[i].split('=');if (ss_cookie[0].charAt(0) === ' ') {ss_cookie[0] = ss_cookie[0].substr(1);}if (name === ss_cookie[0]) {result = ss_cookie[1];break;}}return result;},remove: function (name, path) {if (typeof path === 'undefined') {path = '/';}var date = new Date();date.setTime(date.getTime() - (86400 * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = name + '=' + '' + '; ' + expires + '; ' + path;},removeAll: function (path) {if (typeof path === 'undefined') {path = '/';}var s_cookie = document.cookie.trim().split(';');for (var i = 0; i < s_cookie.length; i++) {var ss_cookie = s_cookie[i].split('=');this.remove(ss_cookie[0], path);}}};function lazy_load_imgs() {$('.lazy-load-imgs', function (lazy_img) {if (isVisible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');lazy_img.setAttribute('src', lazy_load_attr);lazy_img.removeAttribute('data-lazy-load-imgs');}});}function onEvt(type, callback) {if (document.attachEvent) {document.attachEvent("on" + type, function (e) {callback(e.target, e);});} else {document.addEventListener(type, function (e) {callback(e.target, e);}, false);}}var valid = {alpha: function (alpha, check) {if (typeof check === 'undefined') {check = 'all';}switch (check) {case 'all':return ((/^[a-zA-Z]+$/).test(alpha));break;case 'low':return ((/^[a-z]+$/).test(alpha));break;case 'up':return ((/^[A-Z]+$/).test(alpha));break;}},num: function (num) {return ((/^[0-9]+$/).test(num));},email: function (email) {var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return (regex.test(email));},ip: function (ip) {var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return (regex.test(ip));},url: function (url) {var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return (regex.test(url));},input: function (target) {return (target.checkValidity() === true && target.validity.valid === true);}};var visitor = {htmCheckOne: function () {var element = document.createElement('input');element.setAttribute('type', 'color');if (element.type === 'color') {return true;} else {return false;}},htmCheckTwo: function () {var element = document.createElement('input');element.setAttribute('type', 'date');if (element.type === 'date') {return true;} else {return false;}},htmCheckThree: function () {var element = document.createElement("canvas");if (element.getContext) {return true;} else {return false;}},html5: function () {return (this.htmCheckOne() || this.htmCheckTwo() || this.htmCheckThree());},css3: function () {var checkOne = 'opacity' in document.body.style;var checkTwo = 'text-shadow' in document.body.style;var checkThree = 'animation' in document.body.style;var checkFour = 'transition' in document.body.style;return (checkOne || checkTwo || checkThree || checkFour);},browser: function () {var browsers_list = ['Firefox','Opr','Edge','Chrome','Safari','Netscape','Maxthon','Konqueror','MSIE','Trident','UCBrowser','UCWEB'];for (var j = 0; j < browsers_list.length; j++) {var the_sbrowser = new RegExp(browsers_list[j], 'gi');if (navigator.userAgent.match(the_sbrowser)) {var get_brow = browsers_list[j];break;}}if (get_brow && get_brow !== 'undefined') {if (get_brow === 'MSIE' || get_brow === 'Trident') {return 'Internet Explorer';} else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {return 'UC Browser';} else if (get_brow === 'Opr') {return 'Opera';} else {return get_brow;}} else {return 'Other';}}};window.addEventListener('load', function () {$('a', function (elm) {elm.addEventListener('click', function (e) {var lastChar = this.href.substr(this.href.length - 1);if (lastChar === "#") {e.preventDefault();}var a_regex = new RegExp('/' + window.location.host + '/');if (!a_regex.test(this.href)) {e.preventDefault();e.stopPropagation();window.open(this.href, '_blank');}}, false);});$('.field_disable', function (elm) {elm.setAttribute('disabled', 'disabled');});$('.btn_disable', function (elm) {elm.setAttribute('disabled', 'disabled');});$('.img_click', function (elm) {elm.addEventListener('click', function () {window.open(this.getAttribute('src'), '_blank');}, false);});$('.require_this', function (elm) {elm.addEventListener('blur', function () {var fieldValue = this.value.trim();if (fieldValue === '' || fieldValue === ' ') {this.classList.add('field_require', 'blink');var disElm = this;setTimeout(function () {disElm.classList.remove('blink');}, 2000);} else {this.classList.remove('field_require', 'blink');}}, false);});if (typeof lazy_load_imgs === 'function') {lazy_load_imgs();window.addEventListener('scroll', lazy_load_imgs, false);}}, false);