/*!
 * jQuery Sticky Footer v1.2.1
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

		// Element
		var element = this;

		// Initialize
		stickyFooter(element, options);

		// Resize event
		$(window).resize(function() {
			stickyFooter(element, options);
		});
	}

	function stickyFooter(element, options) {
		// Set footer height
		var height = $(element).outerHeight(true);

		// Add content height
		$(options.content).each(function() {
			height += $(this).outerHeight(true);
		});

		// Add the sitcky footer class if the footer & content height are smaller then the frame height
		if(height < $(options.frame).height()) {
			$(element).addClass(options.class);
		} else {
			$(element).removeClass(options.class);
		}
	}
})(jQuery);
