(function($) {
	var ids = [];
	var displayIndex = 0;
	var settings = {};
	// var loader;
	var isLoading = false;
	
	$.fn.gallery = function(container, options) {
		settings = $.extend({
			loadCount : 10,
			detailUrl : '',
			onSelect : function(url){
			}
		}, options);
		if (settings.detailUrl == '') {
			settings.detailUrl = settings.url;
		}

		$(".loader img", container).css("visibility","hidden");
		$.ajax({
			url : settings.url,
			method : "GET",
			success : function(data) {
				ids = data.ids;
				load($(".gallery",container));
			}
		});

		$(window).scroll(function() {
			var height = $('body').height();
			var scrollHeight = $(document).height();
			var st = $('body').scrollTop();
			if (st + 20 >= scrollHeight - height && isLoading == false) {
				$(".loader img", container).css("visibility","hidden");
				if (displayIndex <= ids.length ) {  // + settings.loadCount
					$(".loader img", container).css("visibility","visible");
					isLoading = true;
					load($(".gallery",container));
				}
			}
		});
	}
	function load(container) {
		var ind = (displayIndex + settings.loadCount) > ids.length ? ids.length : (displayIndex + settings.loadCount);
		var img = new Array()
		var loadCount = 0;
		var j=0;

		for ( var i = displayIndex; i < ind; i++) {
			img[j] = new Image();
			img[j].onload = function() {
				loaded();
			};
			img[j].onerror = function() {
				loaded();
			};
			img[j].src = settings.detailUrl + '/' + ids[displayIndex];
			displayIndex = i + 1;
			j++;
		}
		function loaded() {
			loadCount++;
			if (loadCount == img.length) {
				$(".loader img", container).css("visibility","hidden");
				for ( var i = 0; i < img.length; i++) {
					$(container).append(
							'<div class="display-item"><img src="' + img[i].src
									+ '"></img></div>');
					
				}
				$(".display-item img",container).unbind("click");
				$(".display-item img",container).click(function(){
					settings.onSelect($(this).attr("src"));
				});
				isLoading = false;
			}
		}
	}
}(jQuery));