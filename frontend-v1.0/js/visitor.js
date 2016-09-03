var visitor = {

	htmCheckOne: function () {
		var element = document.createElement('input');
        element.setAttribute('type', 'color');
        if (element.type === 'color') {
            return true;
        } else {
            return false;
        }
	},

	htmCheckTwo: function () {
        var element = document.createElement('input');
        element.setAttribute('type', 'date');
        if (element.type === 'date') {
            return true;
        } else {
            return false;
        }
    },

    htmCheckThree: function () {
        var element = document.createElement("canvas");
        if (element.getContext) {
            return true;
        } else {
            return false;
        }
    },

	html5: function () {
		if (this.chtmCheckOne() || this.chtmCheckTwo() || this.chtmCheckThree()) {
            return true;
        } else {
            return false;
        }
	},

	css3: function () {
		var checkOne = 'opacity' in document.body.style;
	    var checkTwo = 'text-shadow' in document.body.style;
	    var checkThree = 'animation' in document.body.style;
	    var checkFour = 'transition' in document.body.style;

	    if (checkOne || checkTwo || checkThree || checkFour) {
	        return true;
	    } else {
	        return false;
	    }
	},

	browser: function () {
		var browsers_list = [
	        'Firefox',
	        'Chrome',
	        'Safari',
	        'Opera',
	        'Netscape',
	        'Maxthon',
	        'Konqueror',
	        'Edge',
	        'MSIE',
	        'Trident',
	        'UCBrowser',
	        'UCWEB'
	    ];

	    for (var j = 0; j < browsers_list.length; j++) {
	        var the_sbrowser = new RegExp(browsers_list[j], 'i');
	        if (navigator.userAgent.match(the_sbrowser)) {
	            var get_brow = browsers_list[j];
	            break;
	        }
	    }
	    if (get_brow && get_brow !== 'undefined') {
	        if (get_brow === 'MSIE' || get_brow === 'Trident') {
	            return 'Internet Explorer';
	        } else if(get_brow === 'UCBrowser' || get_brow === 'UCWEB') {
	        	return 'UC Browser';
	        }

	        else {
	            return get_brow;
	        }
	    } else {
	        return 'Other';
	    }
	}
}