# FrontEnd

### Description
This is for frontend development.

Its a mini & basic library for developer.

Pure Css and JavaScript. 

Powerful & LightWeight

    Let me know:
        your review.
        if you found any bug/error.

Thank You

### Version 
Stable Version 1.0.2

### License
(C) 2015 - 2016
under GNU General Public License Version 2.

### Example
```html
	<link rel="stylesheet" type="text/css" href="FrontEnd/css/btn.css"  />
	<button>Button</button>
	<button class="btn_cbu">Blue Button</button>

	<link rel="stylesheet" type="text/css" href="FrontEnd/css/icon/home.css"  />
	<div class="home"></div>

	<script type="text/javascript" src="FrontEnd/js/ajax.js"></script>
	<script type="text/javascript">
		ajax({
			url: 'http://example.com',
			data: {
				username: document.getElementById('username'),
				password: document.getElementById('password')
			},
			meth: 'POST',
			
			/*
			 * Others
			 * type: ,
			 * file: true/false,
			 * x_req_wid: true/false
			 */

		}, function(data) {
			alert(data);
		});
	</script>
```