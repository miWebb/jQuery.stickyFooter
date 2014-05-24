/*!
 * jQuery Sticky Footer v1.0
 *
 * Copyright 2014 miWebb and other contributors
 * Released under the MIT license
 */

(function($) {
	$.fn.stickyFooter = function(options) {
		// Variables
		var element = this;

		// Options
		var options = $.extend({
			class: 'sticky-footer',
			content: '#page',
			frame: 'body'
		}, options);

		// Init
		stickyFooter(element, options);

		// Resize
		$(window).resize(function() {
			stickyFooter(element, options);
		});
	}

	var stickyFooter = function(element, options) {
		// Variables
		var heights = {
			frame: 0,
			content: 0,
			footer: 0
		}

		// Set
		heights.frame = $(options.frame).outerHeight(true);
		heights.content = $(element).outerHeight(true);
		heights.footer = $(element).outerHeight(true);

		$(options.content).each(function() {
			heights.content += $(this).outerHeight(true);
		});

		// Class
		if(heights.frame > heights.content) {
			$(element).addClass(options.class);
		} else {
			$(element).removeClass(options.class);
		}
	}
})(jQuery);
