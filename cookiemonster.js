$(document).ready(function () {
	var audioup = $('#soundclip')[0];
	var audioreset = $('#soundclip2')[0];
	var audiopipe = $('#soundclip3')[0];
	// fire mario 
	$('#fire').on('click', function () { // animating the fire image
		$('#fire').animate({
			height: 'hide'
		}, 1000, function () {
			var current = Cookies.get('ccc');
			if (current && !isNaN(current)) {
				Cookies.set('ccc', parseInt(current)+1);
				setValue();
			} else {
				Cookies.set("ccc", 1);
			};
		})
		.animate({
			height: 'show'
		},1000); // end of animating fire image
		$('#foot1').animate({ // sending mario down tube
			top: '175px'
		}, 2000, function () {
			$('#mario').attr('src', 'firemario.jpg'); // changing mario going down tube
		})
		.animate({
			top: '0px'
		}, 500);// end of sending mario down tube and sending back up
		audioup.play(); // play sound
	});
	// change h1 to value
	function setValue() { // set h1 value on click
		if (Cookies.get('ccc')) {
			$('#fireh1').text(Cookies.get('ccc'));
		}; 
	}; 
	setValue();

	$('#reset').on('click', function () {
		Cookies.set("ccc", 0);
		setValue();
	});
	// flyer mario
	$('#fly').on('click', function () {
	$('#fly').fadeOut(1000, function() { // animating the fly image
		var current = Cookies.get('scc');
	if (current && !isNaN(current)) {
		Cookies.set('scc', parseInt(current)+1);
		setflyValue();
	} else {
		Cookies.set("scc", 1);
	};
	})
	.fadeIn(1000); // end animating fly image
	$('#foot1').animate({
		top: '175px'
	}, 2000, function () { // send mario down tube
		$('#mario').attr('src', 'flyer.jpg') // change mario image
	})
	.animate({
		top: '0px'
	}, 500); //send mario back up
	
	audioup.play(); // play audio
	});
	// change h1 value.
	function setflyValue() { // set h1 value on click
		if (Cookies.get('scc')) {
			$('#flyh1').text(Cookies.get('scc'));
		}; 
	}; 
	setflyValue();

	$('#reset').on('click', function () {
		Cookies.set("scc", 0);
		setflyValue();
	});
	// yoshi cookies
	$('#yoshi').on('click', function () {
	$('#yoshi').animate({ // animate yoshi image
	width: ["hide", "swing" ],
    height: [ "hide", "swing" ],
    },1000, function () {
    	var current = Cookies.get('lcc');
		if (current && !isNaN(current)) {
			Cookies.set('lcc', parseInt(current)+1);
			setyoshiValue();
		} else {
			Cookies.set("lcc", 1);
		};
    })
    .animate({
    width: ["show", "swing" ],
    height: [ "show", "swing" ],
  },1000); // end yoshi animation

	$('#foot1').animate({ // send mario down tube
		top: '175px'
	}, 2000, function () {
		$('#mario').attr('src', 'marioyoshi.jpg'); // change mario after going down tube.
	})
	.animate({
		top: '0px'
	}, 500); // send him back up tube
	audioup.play(); // play audio on click
	});

	// change h1 to  value.
	function setyoshiValue() { // set h1 yoshi value
		if (Cookies.get('lcc')) {
			$('#yoshih1').text(Cookies.get('lcc'));
		}; 
	}; 
	setyoshiValue();

	$('#reset').on('click', function () {
		Cookies.set("lcc", 0);
		setyoshiValue();
		audioreset.play();
		$('#foot1').hide(); // hide main mario guy
		$('#foot2').show(); // show bowser
		$('#foot3').show(); // show running mario
		$('#foot3').animate({ // send them running
			marginLeft: '-175px'
		}, 2500);
		$('#foot2').animate({
			marginLeft: '-210px'
		}, 3500, function () { 
			// bring main mario back
			$('#foot1').show();
			$('#mario').attr('src', 'mario.jpg');
			$('#foot2').hide().css('margin-left', '220px');
			$('#foot3').hide().css('margin-left', '565px');

		});
	});

});


