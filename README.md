# FrontEnd

### Description
This is for frontend development.

Its a mini & basic library for developer.

Pure Css and JavaScript. 

Powerful & LightWeight

### Version 
Stable Version 1.7

### License
(C) 2015 - 2016
under GNU General Public License Version 2.

### Develop By [Club Coding] (http://clubcoding.com/)

### Example
```html
<!-- button -->
<link rel="stylesheet" type="text/css" href="css/btn.css"  />
<button>Button</button>
<button class="btn_cbu">Blue Button</button>

<!-- Icon -->
<link rel="stylesheet" type="text/css" href="icons/home.css"  />
<div class="home"></div>

<!-- Checkbox or Radio -->
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
		meth: 'POST',

		/*
		 * -- Others --
		 * type: ,
		 * file: true/false,
		 * x_req_wid: true/false
		 */

	}, function(data) {
		alert(data);
	});
</script>

<!-- Get Element(s) By -->
<script type="text/javascript" src="js/geteb.js"></script>
<script type="text/javascript">
getEB({
    class: 'elem'
}, function (elm) {
    alert(elm.innerHTML);
});
</script>
```