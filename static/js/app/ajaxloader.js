define(function (require) {
	var $ = require('jquery');
	var contents = $('section#contents');

	return {
		changeUrl: function (url) {
			contents.load(url + ' #contents > *');
		}
	}
});