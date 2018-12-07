/*!
 * jQuery Sticky Footer v1.2.3
 *
 * Copyright 2014 miWebb
 * Released under the MIT license
 */

(function($, window, undefined) {
	'use strict';

	$.fn.stickyFooter = function(options) {
		// Options
		var options = $.extend({}, $.fn.stickyFooter.defaults, options);

		// Element
		var element = this;

		// Initialize
		stickyFooter(element, options);

		// Resize event
		$(window).resize(function() {
			stickyFooter(element, options);
		});

		// Chain
		return this;
	}

	$.fn.stickyFooter.defaults = {
		class: 'sticky-footer',
		frame: '',
		content: '#page'
	}

	function stickyFooter(element, options) {
		// Set footer height
		var height = $(element).outerHeight(true);

		// Add content height
		$(options.content).each(function() {
			height += $(this).outerHeight(true);
		});

		// Add the sitcky footer class if the footer & content height are smaller then the frame height
		if(height < $(options.frame ? options.frame : element.parent()).height()) {
			$(element).addClass(options.class);
		} else {
			$(element).removeClass(options.class);
		}
	}
})(jQuery, window);
