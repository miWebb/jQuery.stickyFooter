/*!
 * jQuery Sticky Footer v1.1
 *
 * Copyright 2014 miWebb and other contributors
 * Released under the MIT license
 */

(function($) {
	$.fn.stickyFooter = function(options) {
		// Options
		var options = $.extend({
			class: 'sticky-footer',
			content: '#page',
			frame: this.parent()
		}, options);

		// Variables
		var element = this;

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
		heights.frame = $(options.frame).height();
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
