# FrontEnd

### Description
This is for frontend development.

Its a mini & basic library for developer.

Pure CSS and JavaScript.

Powerful & LightWeight.

### Note
Do not use with Angular JS, Bootstrap, Jquery or any another Framework or Library.

### Version
Stable Version 3.2

### License
(C) 2015 - 2017 under GNU General Public License Version 2.

### Example
```html
<!-- button -->
<link rel="stylesheet" type="text/css" href="css/btn.css"  />
<button class="btn">Button</button>
<button class="btn btn_cbu">Blue Button</button>
<button class="btn btn_cr">Red Button</button>

<!-- Checkbox or CheckToggle or Radio -->
<link rel="stylesheet" type="text/css" href="css/check.css"  />
<div class="check">
    <input type="checkbox" id="check"/>
    <label for="check">Check Box</label>
</div>

<!-- Ajax Request -->
<script type="text/javascript" src="js/ajax.js"></script>
<script type="text/javascript">
ajax({
	url: 'http://example.com',
	data: {
		username: document.getElementById('username'),
		password: document.getElementById('password')
	},

/*
 * Others
 * method: POST, GET, HEAD, PUT, DELETE (Default POST)
 * type: Content-Type,
 * file: FormData(),
 * Xreq: true/false (Default true)
 */

}, function(r) {
	console.log(r);
});
</script>

<script type="text/javascript" src="js/elements.js"></script>
<script type="text/javascript">
/* Document Query Selectors */
$('.elem', function(elem) {
    alert(elem.innerHTML);
});
</script>

<!-- Document On Event (click, mouseover etc) -->
<script type="text/javascript" src="js/onevt.js"></script>
<script type="text/javascript">
onEvt('click', function(elem) {

    // for class
    if(elem.classList.contains('classname')) {
        // do stuff
    }

    // for attribute
    if(elem.hasAttribute('name')) {
        // do stuff
    }
});
</script>
```