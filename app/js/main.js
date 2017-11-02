$(document).ready(function() {


//Carousel	
$('.owl-carousel').owlCarousel({


	loop:true, //Зацикливаем слайдер
	margin:0,
	smartSpeed:1000,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1

		}
	},
	nav:true,
	navText:["",""]
	});

//Carousel 
$('.searcher owl-carousel').owlCarousel({


	loop:true, //Зацикливаем слайдер
	margin:0,
	smartSpeed:1000,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1

		}
	},
	nav:true,
	navText:["",""]
	});


// Validation

$('.jsValitate').feelform({
	validateOnTheFly:true
})




// WOW
new WOW().init();

});




