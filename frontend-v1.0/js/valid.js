var valid = {

	alpha: function (param) {
		if (typeof (param['let']) === 'undefined') {
	        param['let'] = 'all';
	    }
	    switch (param['let']) {
	        case 'all':
	            if ((/^[a-zA-Z\ ]+$/).test(param['alpha'])) {
	                return true;
	            } else {
	                return false;
	            }
	            break;

	        case 'low':
	            if ((/^[a-z\ ]+$/).test(param['alpha'])) {
	                return true;
	            } else {
	                return false;
	            }
	            break;

	        case 'up':
	            if ((/^[A-Z\ ]+$/).test(param['alpha'])) {
	                return true;
	            } else {
	                return false;
	            }
	            break;
	    }
	},

	num: function (num) {
		if ((/^[0-9]+$/).test(num)) {
	        return true;
	    } else {
	        return false;
	    }
	},

	email: function (email) {
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    if (regex.test(email)) {
	        return true;
	    } else {
	        return false;
	    }
	},

	ip: function (ip) {
		var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	    if (regex.test(ip)) {
	        return true;
	    } else {
	        return false;
	    }
	},

	url: function (url) {
		var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	    if (regex.test(url)) {
	        return true;
	    } else {
	        return false;
	    }
	}
}