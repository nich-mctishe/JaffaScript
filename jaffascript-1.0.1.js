$(document).ready(function(){
	var mobileSize = 485; 
	var selected = false;
	setInterval(check_for_width, 5);
	$("header img:last-of-type").click(function() {
		if(!selected) selected = true;
	 	else selected = false;
	});
	function check_for_width()
	{
		if(window.innerWidth >= mobileSize)
		{
			$('nav ul').slideDown('fast', function() {
			});
		} else if(selected == true)
		{
			$('nav ul').slideDown('fast', function() {
				
			});
		} else {
			$('nav ul').slideUp('fast', function() {});
		}
		/*
		 you can add other criteria here for example the below is to change the logo image to a mobile friendly one using js
		if(window.innerWidth <= mobileSize)
		{
			$('header a img').attr('src', configs.base_url + 'assets/system_imgs/logo/creative_cars_mobile.png').css('height', '40px'); //this will change the image over to a mobile friendly one.
		} else {
			$('header a img').attr('src', configs.base_url +'assets/system_imgs/logo/CreativeCars_logo_250x150.png').css('height', '150px'); //this will change the image over to a desktop friendly one.
		}
		*/
	}
});