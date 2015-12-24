requirejs.config({
	baseUrl: '/static/js/lib',
	paths: {
		app: '../app'
	}
});

requirejs(['jquery', 'app/ajaxloader'], function ($, ajaxloader) {
	$(window).on('popstate', function (e) {
		if (e.originalEvent.state !== null) {
			ajaxloader.changeUrl(location.href);
		}
	});

	$('a.change-url').click(function () {
		var page = $(this).data('page');
		var href = $(this).attr('href');
		var stateObj = {
			page: page,
			href: href
		}
		history.pushState(stateObj, page, href);
		ajaxloader.changeUrl(href);
		return false;
	});
});