var cf = {

	qstr: function (param) {
		var uris = VP['URL_QUERY'].split('&');
		for(var i = 0; i < uris.length; i++) {
			var part = uris[i].split('=');
			if(part[0] === param) {
				return part[1];
				break;
			}
		}
	},

	is_qstr: function (field) {
		var url = window.location.href;
	    if (url.indexOf('?' + field + '=') !== -1) {
	        return true;
	    } else if (url.indexOf('&' + field + '=') !== -1) {
	        return true;
	    } else {
	        return false;
	    }
	},

	rannum: function (length) {
		if (typeof (length) === 'undefined') {
	        length = '35';
	    }
	    var value = '';
	    for (var i = 0; i < length; i++) {
	        value += Math.floor((Math.random() * 9) + 0);
	    }
	    return value;
	},

	ranstr: function (length) {
		if (typeof (length) === 'undefined') {
	        length = '40';
	    }
	    var value = '';
	    var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
	    for (var i = 0; i < length; i++) {
	        value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));
	    }
	    return value;
	}
}