var str = {

	ucWords: function (str) {
		return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g
            , function ($1) {
                return $1.toUpperCase();
            });
	},

	ucFirst: function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},

	trims: function (str, charlist) {
		charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
	    var re = new RegExp('[' + charlist + ']+$', 'g');
	    return (str + '').replace(re, '');
	},

	rws: function (str) {
		return str.replace(/^\s+|\s+$/g, '');
	}
}