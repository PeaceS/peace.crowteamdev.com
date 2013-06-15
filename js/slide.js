$(function callSlide(){
    $("#slides").slidesjs({
    	width: 500,
   		height: 375,
	    play: {
          active: true,
          auto: true,
          effect: "slide",
          interval: 7000,
          swap: true
       	},
       	effect: {
	      slide: {
	        speed: 2500
	      }
	    }
	});
});