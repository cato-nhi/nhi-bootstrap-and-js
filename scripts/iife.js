; (function ($, window, document, nhiStrings) {
    'use strict';

	$(document).ready(function () {
		console.log(nhiStrings.whenDomIsReady);

		var $sidebarTitle = $('.fw-sidebar h1');
		if ($sidebarTitle.length) {
			$sidebarTitle.css('color', 'red');
		}
	});

	var msg = "Logs immediately";

	function foo(a) {
		a = typeof a !== 'undefined' ? a : 42;
		console.log(nhiStrings.privateFunctionText + '\'' + a + '\'');
	}

	foo();
	foo(msg);

})(jQuery, window, document, window.nhiStrings);