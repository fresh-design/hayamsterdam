$(document).ready(function() {
	$("a").on("click", function(){
		$($(this).attr('href')).fadeIn(300);
	});

	$("ins.close").on('click', function() {
		$(this).closest("section").fadeOut(300);
	});
})


// close = false;
// $(document).ready(function() {
// 	$("nav a").on("click", function(){
// 		$($(this).attr('href')).fadeIn(300, function() {
// 			setTimeout(function() {close = true;}, 100)
// 		});
// 	});

// 	$(window).on('click', function() {
// 		if (close) {
// 			$('#contacts').fadeOut(300);
// 			close = false;
// 		}
// 	});

// 	$('#contacts .wrap').on('mouseenter mouseleave', function(e) {
// 		if (e.type == 'mouseenter') close = false;
// 		else close = true;
// 	});

// })

