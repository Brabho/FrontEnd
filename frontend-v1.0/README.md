# FrontEnd

## Version
1.0
Initial, Alpha

## Description
This is for frontend development.

Its a mini library for developer.

Quite basic but useful.

## License
(C) 2015
under GNU General Public License Version 2.

## Example
<link rel="stylesheet" type="text/css" href="FrontEnd/css/btn.css"  />
<button>Button</button>
<button class="btn_cbu">Button</button>

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
		 * file: 'true'/'false',
		 * x_req_wid: 'show'/'hide'
		 */

	}, function(data) {
		alert(data);
	});
</script>
```