jQuery(document).ready(function(){		
	// Mobile Menu 
	$( ".navbar-toggle" ).click(function() {
		$(".mlab-navbarmobile").toggleClass("toggle");
		if($(".mlab-navbarmobile").is(".toggle")){
			$(this).find("i").removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
		} else {
			$(this).find("i").removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
		}
	});  
	$(document).mouseup(function (e)
	{
	    var container = $("header");

	    if (!container.is(e.target) 
	        && container.has(e.target).length === 0)
	    {
	        $(".mlab-navbarmobile").removeClass("toggle");
			if($(".mlab-navbarmobile").is(".toggle")){
				$(".navbar-toggle").find("i").removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
			} else {
				$(".navbar-toggle").find("i").removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
			}
	    }
	});
	// Tabs
	$( ".tabs > *" ).click(function() {
		$(this).addClass("active");
		$(this).closest("ul").find(".active").not($(this)).removeClass("active");
		var i = parseInt($(this).index())+1;
		$(this).closest(".mlab-tabs").next(".mlab-tabs-container").find(".mlab-tabs-content > *:not(:nth-of-type("+i+"))").hide();
		$(this).closest(".mlab-tabs").next(".mlab-tabs-container").find(".mlab-tabs-content > *:nth-of-type("+i+")").show();
	});
	// Login Link Effect
	$( ".mlab-header-el-hover" ).hover(
	  function() {
	    $("header").addClass("toggled");
	  }, function() {
	    $("header").removeClass("toggled");
	  }
	);
	// Dropdown
	$( ".mlab-dropdown" ).click(function() {
		$(this).toggleClass("toggle");
		if($(".mlab-dropdown").is(".toggle")){
			$(this).find("i").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
		} else {
			$(this).find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
		}
	});  
	$( ".mlab-dropdown > li:last-child ul li" ).click(function() {
		$(this).parentsUntil(".mlab-dropdown").prev("li").find("p").html($(this).find("a").html()+"<i class='glyphicon glyphicon-chevron-down'><!-- --></i>");
	});  
	$(document).mouseup(function (e)
	{
	    var container = $(".mlab-dropdown");

	    if (!container.is(e.target) 
	        && container.has(e.target).length === 0)
	    {
	        $(".mlab-dropdown").removeClass("toggle");
			if($(".mlab-dropdown").is(".toggle")){
				$(".mlab-dropdown").find("i").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
			} else {
				$(".mlab-dropdown").find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
			}
	    }
	});
	// Header
	$("header").before($("header").clone().addClass("sticky"));
    $(window).on("scroll", function () {
        $(".sticky").toggleClass("stuck", ($(window).scrollTop() > 90));
    });
    // Countdown
    $('.mlab-countdown').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
	    $this.html(event.strftime('<ul><li><span>%D</span> <span>days</span></li><li><span>%H</span> <span>hours</span> </li><li><span>%M</span> <span>minutes</span> </li><li><span>%S</span> <span>seconds</span></li></ul>'));
	  });
	});
});	