; (function ($, window, document, nhiStrings) {
	'use strict';

	window.nhiStrings = {
		whenDomIsReady: 'Logs when DOM is ready and .ready is called...',
		privateFunctionText: 'Private function \'foo\' says the value of a is: '
	};

	$(document).ready(function () {
		
		// // This causes a syntax error.
		// testvar = 4;
		// return testvar;
		
		$(':header').superGreen();
	});

})(jQuery, window, document, window.nhiStrings);