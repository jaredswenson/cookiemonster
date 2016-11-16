$(document).ready(function () {
	var audioup = $('#soundclip')[0];
	var audioreset = $('#soundclip2')[0];
	var audiopipe = $('#soundclip3')[0];
	// fire mario 
	$('#fire').on('click', function () {
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
		},1000);
		$('#foot1').animate({
			top: '175px'
		}, 2000)
		.animate({
			top: '0px'
		}, 500);
		$('#mario').attr('src', 'firemario.jpg');
		audioup.play();
	});
	// change h1 to value
	function setValue() {
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
	$('#fly').fadeOut(1000, function() {
		var current = Cookies.get('scc');
	if (current && !isNaN(current)) {
		Cookies.set('scc', parseInt(current)+1);
		setflyValue();
	} else {
		Cookies.set("scc", 1);
	};
	})
	.fadeIn(1000);
	$('#foot1').animate({
		top: '175px'
	}, 2000)
	.animate({
		top: '0px'
	}, 500);
	$('#mario').attr('src', 'flyer.jpg')
	audioup.play();
	});
	// change h1 value.
	function setflyValue() {
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
	$('#yoshi').animate({
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
  },1000);

	$('#foot1').animate({
		top: '175px'
	}, 2000)
	.animate({
		top: '0px'
	}, 500);
	$('#mario').attr('src', 'marioyoshi.jpg')
	audioup.play();
	});

	// change h1 to  value.
	function setyoshiValue() {
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


