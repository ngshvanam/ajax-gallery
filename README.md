ajax-gallery
============
$(document).ready(function(){
	$(".center").gallery($(".center"),{ url			:	'/gallery',
										detailUrl   :   '/Images',
										loadCount	:	15
										});
});
