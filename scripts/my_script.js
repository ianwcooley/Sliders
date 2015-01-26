/* Ian Cooley */
/* Fun with Sliders */
/* Script */

/* SLIDER #1 */

$(function () {
	
	// Left Arrow Click Event - all images move to the right:
	$("#left1").on("click", function() {
		// If the leftmost image is in the center, do nothing and return:
		if ($("img.slider1.slot10").hasClass("farLeft")) {
			return;
		}
		// For each image, increase i until "slot" + i matches the class
		// of that image, then replace it with "slot" + (i+1):
		$("img.slider1").each(function() {
			for (var i = 1; i <= 19; i++) {
				var oldSlot = "slot" + i;
				var newSlot = "slot" + (i+1);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}
		});
	});
	
	// Right Arrow Click Event - all images move to the left:
	$("#right1").on("click", function() {
		if ($("img.slider1.slot10").hasClass("farRight")) {
			return;
		}
		$("img.slider1").each(function() {
			for (var i = 1; i <= 19; i++) {
				var oldSlot = "slot" + i;
				var newSlot = "slot" + (i-1);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}
		});
	});
	
});

/* SLIDER #2 */

$(function () {
	
	// Similar to Slider 1, but now each image left of center has a class "left",
	// while each image right of center has a class "right".
	// If one of these "left" images is clicked, all images are shifted right;
	// the image in slot9 loses its click event as it moves to the center, while
	// the image in slot10 gains a click event as it moves right.
	// The obvious opposite result occurs for "right" images.
	
	function shiftRight() {
		if ($("img.slider2.slot10").hasClass("farLeft")) {
			return;
		}
		$("img.slider2.slot9").unbind("click");
		$("img.slider2.slot10").on("click", shiftLeft);
		$("img.slider2").each(function() {
			for (var i = 1; i <= 19; i++) {
				var oldSlot = "slot" + i;
				var newSlot = "slot" + (i+1);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}
		});
	}
	
	function shiftLeft() {
		if ($("img.slider2.slot10").hasClass("farRight")) {
			return;
		}
		$("img.slider2.slot11").unbind("click");
		$("img.slider2.slot10").on("click", shiftRight);
		$("img.slider2").each(function() {
			for (var i = 1; i <= 19; i++) {
				var oldSlot = "slot" + i;
				var newSlot = "slot" + (i-1);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}
		});
	}
	
	$("img.slider2.left").on("click", shiftRight);
	$("img.slider2.right").on("click", shiftLeft);

});

/* SLIDER #3 */
$(function(){
	
	// shiftClockwise and shiftCounterClockwise perform the obvious functions.
	// The #Slider3 div initially has class "clockwise" and has shiftClockwise
	// bound to a click event. If the link in the header is pressed, then
	// the "clockwise" class is replaced with "counterclockwise", and the click
	// event is unbound and replaced with shiftCounterClockwise. The opposite
	// happens if #Slider3 has class counterclockwise and the link is pressed.
	
	function shiftClockwise() {
		$("img.slider3").each(function() {
			for (var j = 0; j <= 9; j++) {
				var oldSlot = "slot" + j;
				var newSlot = "slot" + ((j + 9) % 10);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}	
		});		
	}
	
	function shiftCounterClockwise() {
		$("img.slider3").each(function() {
			for (var j = 0; j <= 9; j++) {
				var oldSlot = "slot" + j;
				var newSlot = "slot" + ((j + 1) % 10);
				if ($(this).hasClass(oldSlot)) {
					$(this).removeClass(oldSlot).addClass(newSlot);
					break;
				}
			}	
		});		
	}
	
	$("#Slider3").on("click", shiftClockwise);
	$("#Header3 a").on("click", function() {
		if ($("#Slider3").hasClass("clockwise")) {
			$("#Slider3").removeClass("clockwise").addClass("counterclockwise");
			$("#Slider3").unbind("click");
			$("#Slider3").on("click", shiftCounterClockwise);
		} else if ($("#Slider3").hasClass("counterclockwise")) {
			$("#Slider3").removeClass("counterclockwise").addClass("clockwise");
			$("#Slider3").unbind("click");
			$("#Slider3").on("click", shiftClockwise);
		}
	});
});