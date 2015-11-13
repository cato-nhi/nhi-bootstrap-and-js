/*
 *  jquery-boilerplate - v3.4.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */

; (function ($, window, document, undefined) {

	"use strict";

	var pluginName = "superGreen",
		defaults = {
			propertyName: "value"
		};

	function Plugin(element, options) {
		this.element = element;
		this.$element = $(element);

		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {
			var self = this;
			
			self.$element.css('color', 'green');
			console.log(self.$element);
			
			// create();			
		},
		create: function () {
            // var self = this;
			// etc...			
		},
		bindEvents: function () {
            // var self = this;
			// etc...			
		}
	});

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);