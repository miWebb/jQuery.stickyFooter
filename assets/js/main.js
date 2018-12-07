(function ($) {
	$(window).on('load', function() {
		$("#footer").stickyFooter();
	});

	$(window).scroll(function () {
		var rotateAmount = (($(window).scrollTop())/5) % 360;

		$('.logo path:first-child').css("transform", "rotate("+rotateAmount+"deg)");
		$('.logo path:first-child').css("transform-origin", "63% 59% 0px");
		$('.logo path:nth-child(2)').css("transform", "rotate(-"+rotateAmount+"deg)");
		$('.logo path:nth-child(2)').css("transform-origin", "20% 21% 0px");
	});
})(jQuery);
