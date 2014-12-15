$(document).ready(function() {
	$('#menu').click(function() {
	var $menu1 = $('#kiri');
	var $menu2 = $('.kiri2');
	var $label = $('label');
	if ($menu2.is(':visible')) {
		$menu2.fadeOut();
		$menu1.css({
			"width": "60px",
			"background":"-webkit-linear-gradient(left, rgba(0,0,0,0.9),rgba(0,0,0,0))",
			"z-index":99
			});
		$('.kiri1').css("margin","0 5px 0 5px");
		$label.css("display","none");
		$('.item').css("margin-bottom","0");
		
		$menu2.hide();
	}
	else {
		$menu2.fadeIn();
		$menu1.css({
			"width":100+"%",
			"background":"rgba(0,0,0,0.8)",
			"z-index":101
			});
		$('#kiri .item').css("margin-bottom","10px");
		$('.kiri1').css("margin-left","10px");
		$label.css({"display":"block"});
	}
	});

	var kiri = $('#kiri');
	var kanan = $('#kanan');
	var bawah = $('#bawah');
	var desktop = $('#desktop');
	 
    $(desktop)
    .mousedown(function(firstlocation) {
        $(window).mousemove(function(event) {
            isDragging = true;
			if((event.pageY + 50) < firstlocation.pageY){
				bawah.fadeIn();
			}
			else if((event.pageX + 50) < firstlocation.pageX){
				kanan.fadeIn();
			}
			
        });
    })
    .mouseup(function() {
        isDragging = false;
        $(window).unbind("mousemove");
    });
	
	
	$(bawah).mouseleave(function() {
		bawah.fadeOut().hide();
		$('#wallpaper').fadeOut().hide();
	});
	$(kanan).mouseleave(function() {
		kanan.fadeOut().hide();
	});
	
	
	$('#thumb-wallpaper').click(function() {
		var $wall = $('#wallpaper');
		if ($wall.is(':visible')) {$wall.fadeOut();$wall.hide();}
		else {$wall.fadeIn();}
	});
	$('.item-wallpaper').click(function() {
		var $val = $(this).attr('src');
		$('#desktop').css({"background":"url("+$val+") top center no-repeat fixed","background-size":"cover"});
		//alert($val);
		
	});
	$('#thumb-widget').click(function() {
		var $wid = $('#widget');
		if ($wid.is(':visible')) {$wid.fadeOut();$wid.hide();}
		else {$wid.fadeIn();}
	});
	$('.item-widget').click(function() {
		var $val = $(this).attr('src');
		var desk = $('.desktop-item').html();
		var tambah = "<img src='"+$val+"' class=' item-desktop' ondblclick='$(this).fadeOut();$(this).hide();'>";
		$('.desktop-item').html(desk+tambah)
		
	});
	$('#thumb-search').click(function() {
	var $menu = $('#search');
	if ($menu.is(':visible')) {$menu.fadeOut();$menu.hide();}
	else {$menu.fadeIn();}
	});
	$('#thumb-music').click(function() {
	var $menu = $('#music');
	if ($menu.is(':visible')) {$menu.fadeOut();$menu.hide();}
	else {$menu.fadeIn();}
	});
	$('#thumb-setting').click(function(){
		alert("buka pengaturan ponsel");
	});
	$('#thumb-refresh').click(function(){
		alert("bersihkan \"recent history\"");
	});
	
	$('#power').click(function() {
		var $desk = $('#prompt').html();
		var $tambah = "<div id='1'>Shutdown</div><div id='2'>Reboot</div><div id='3'>Reboot recovery</div><div id='4'>Batal</div>";
		var $prompt = $('#prompt');
		if ($prompt.is(':visible')) {
			$prompt.fadeOut();
			$prompt.hide();
		}
		else {
			$('#desktop').html($desk+$tambah);
			$('#prompt').css({
				"width":"200px",
				"height":"200px",
				"background":"#ccc",
				"position":"absolute",
				"margin":"30% auto 0 auto"
			});
			$('#prompt div').css({
				"height":"50px",
				"background":"#FFC0CB"
				
			});
			$prompt.fadeIn();
		}
		
		
	});
});

