(function($){

	var ids = [];
	var displayIndex = 0;
	var settings = {};

	$.fn.gallery = function(container, options){
		settings = $.extend({loadCount:10}, options );
		$.ajax({
			url:settings.url,
			method:"GET",
			success:function(data){ids = data.ids;}
		});
		load(container);
		$(window).scroll(function() {
		   var height = $('body').height();
		   var scrollHeight = $(document).height();
		   var st = $('body').scrollTop();
		   if(st+20 >= scrollHeight - height){
			   if(displayIndex + settings.loadCount <= ids.length)
				load(container);
		   }
		   //console.log(st+":"+height+":"+scrollHeight);
		});
	}

	function load(container)
	{
		  var ind = displayIndex + settings.loadCount;
		  for ( var i = displayIndex; i < ind; i++ ) {
				displayIndex = i+1;
				$(container).append('<div class="display-item"><img src="/gallery/'+displayIndex+'"></img></div>');
		  }
	}

}(jQuery));