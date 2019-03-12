# FrontEnd

> #### _Description_
This is for frontend development.

Its a mini & lightweight library for developer.

Pure CSS and JavaScript.


> **_Build_**
- Version: **5.3**
- Status: **Stable**


> ##### _Few Examples_

```html
<!-- button -->
<button class="btn">Button</button>
<button class="btn btn_blue">Blue Button</button>
<button class="btn btn_red_flat">Red Flat Button</button>

<!-- Checkbox or CheckToggle or Radio -->
<div class="check">
    <input type="checkbox" id="check"/>
    <label for="check">Check Box</label>
</div>

<!-- Ajax Request -->
<script type="text/javascript">
ajax({
	/*
	 * method: POST, GET, HEAD, PUT, DELETE (Default POST)
	 * type: Content-Type,
	 * formData: true    // If `data` is in FormData()
	 */
	url: 'http://example.com',
	data: {
		// Without FrontEnd (Only Ajax Function)
		username: document.getElementById('username').value,
		password: document.getElementById('password').value

		// With FrontEnd
		username: $('#username').value,
		password: $('#password').value
	},
	success: function(response) {
		console.log(response);
	},
	progress: function(progress) {
		console.log(progress);
	},
	error: function(error) {
		console.log(error);
	}
});
</script>

<!-- Document Query Selector All -->
<script type="text/javascript">
$('.elem', null, function(elem) {
    alert(elem.innerHTML);
});

$('.elem', 'right_click', function(elem) {
    alert(elem.innerHTML);
});

</script>

<!-- Document On Event (click, mouseover etc) -->
<script type="text/javascript">

on('left_click', $('.btn')[0], function(elem) {
	// do stuff
}

/*   ##  OR  ##   */
on('click', null, function(elem) {

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

<!-- Styled Placeholder -->
<div class="placeholder_group">
    <label class="placeholder">Username</label> <!-- Placeholder Value Here -->
    <input type="text" class="placeholder_field"/>
</div>

<!-- Delay Load CSS - HTML Markup -->
<link id="uniquevalue"/>

<!-- JavaScript After Window Load -->
<script type="text/javascript">
window.addEventListener('load', function() {
    delay_css('uniquevalue', '/path/to/css/file.css');
});
</script>
```


> ## _Note_

Do not use with Jquery or Bootstrap.

Codes are minimum dependent to each other. 

You can use or copy codes from files and use as your requirements.


> ## _License (C) 2019 under GNU GPL V2._
