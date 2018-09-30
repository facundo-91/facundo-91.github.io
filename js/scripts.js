/*================= STICKY NAVBAR ==================*/
 
window.onscroll = function() {myFunction()};		// When the user scrolls the page, execute myFunction
var navbar = document.getElementById("navbar");		// Get the navbar
var sticky = navbar.offsetTop;						// Get the offset position of the navbar
function myFunction() {								// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

/*==================================================*/
/*================ TOOLTIP ON ICONS ================*/

$(document).ready(function(){
	$('[tool-tip-toggle="tooltip-text"]').tooltip({
		placement : 'bottom'
	});
});

/*==================================================*/
/*================ SMOOTH SCROLLING ================*/

$(document).ready(function(){
	$(".navbar a, footer a, .arrow a").on('click', function(event) {	// Where put smooth scrolling
		if (this.hash !== "") {					// Make sure this.hash has a value before overriding default behavior
			event.preventDefault();				// Prevent default anchor click behavior
			var hash = this.hash;				// Store hash
			$('html, body').animate({			// Using jQuery's animate() method to add smooth page scroll
				scrollTop: $(hash).offset().top
			}, 900, function(){					// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
				window.location.hash = hash;	// Add hash (#) to URL when done scrolling (default click behavior)
			});
		} 										// End if
	});
})

/*==================================================*/
/*================ SLIDEIN ANIMATION ===============*/

$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});

/*==================================================*/
/*================== SCROLL TO TOP =================*/

$(window).scroll(function() {
	if ($(this).scrollTop() >= 2000) {      // If page is scrolled more than 2000px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
});
$('#return-to-top').click(function() {      // When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	}, 500);
});

/*==================================================*/
/*==================== AJAX FORM ===================*/

$(".ajax-form").validate({
	rules: {
		name: {
			required: true,
			minlength: 2,
		},
		email: {
			required: true,
			email: true,
		},
		message: {
			required: true,
			minlength: 5,
		},
	},
	errorPlacement: function(error, element) {
	},
	submitHandler: function(form) {
		$.ajax({
			dataType: "jsonp",
			url: "https://getsimpleform.com/messages/ajax?form_api_token=011d3098287bb1dc147ad8132638d31d",
			data: $(".ajax-form").serialize() 
		}).done(function() {
		//callback which can be used to show a thank you message
		//and reset the form
			$(".ajax-form").hide();
			$(".form-thank-you").fadeIn("400");
		});
	return false; //to stop the form from submitting
	}
});
  
/*==================================================*/
