##AJAX GALLERY

##SCRIPT
```
<script type="text/javascript" src="/plugins/jquery.ajax-gallery.js"></script>

<script type="text/javascript">

	$(document).ready(function() {
		$(".center").gallery($(".center"), {
			url : '/gallery',
			detailUrl : '/Images',
			loadCount : 24,
			onSelect : function(url){
				alert(url);
			}
		});
	});
	
</script>
```

##HTML
```
<div class="center">
		<div class="gallery"></div>
		<div class="loader">
			<img src="/ajax-loader.gif" />
		</div>
	</div>
```
