$(document).ready(function() {

	// ENSURES THAT THE NAVBAR REMAINS TRANSPARENT WHEN THE PAGE LOADS
	// BUT CHANGES COLOR UPON SCROLLING
	var startPos = 0;
	var offset = $("#navbar").offset();
	$(document).scroll(function() {
		startPos = $(this).scrollTop();
		console.log(startPos);
		if(startPos > 0)  {
			$(".navbar").removeClass("navbar-transparent");
			$(".navbar").addClass("navbar-background");
		} else {
			$(".navbar").removeClass("navbar-background");
			$(".navbar").addClass("navbar-transparent");
		}
	})

	// WHEN THE USER HOVERS OVER A NAVBAR OPTION
	// DISPLAY THE DROPDOWN FOR THE ITEM
	$(".dropdown").on('mouseenter', function() {
		$(this).addClass("open");
	});

	$(".dropdown").on('mouseleave', function() {
		$(this).removeClass("open");
	});

	// WHEN THE USER HOVERS OVER A NAVBAR OPTION
	// ADD A BORDER TO THE SPECIFIC ITEM
	$(".navbar-nav > li").on('mouseenter', function() {
		$(this).addClass("navbar-item-hover");
	});

	$(".navbar-nav > li").on('mouseleave', function() {
		$(this).removeClass("navbar-item-hover");
	});

	


});

