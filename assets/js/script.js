var begin_entered=false;
var focus_change=1;
var back_tab=false;
var swiperControl = false;
$(document).ready(function(){
	$("#pageImage").mouseenter(function(){
		$("#pageImage").attr("title","Strategies for sustainable living");
	});
	$("#pageImage").mouseleave(function() {
  		$("#pageImage").removeAttr('title');
	});
	
	$('#direction_text').html(direction_text);
	
	for(i=0;i<slider.length;i++){
		$('#text_container').append('<div class="text_container" role="none" id="textcont_'+(i+1)+'">'+slider[i].slide_text+'</div>');
		$('#textcont_'+(i+1)).attr('aria-label',slider[i].slide_text);
		$('#imgCont_'+(i+1)+' img').attr('aria-label',slider[i].img_alt_text);
		//$('#imgCont_'+(i+1)+' img').attr('title',slider[i].img_alt_text);
		$('#imgCont_'+(i+1)+' img').attr('alt',slider[i].img_alt_text1);
	}
		

	for(i=0;i<slider.length;i++){
		$('#bullet_'+((i+1))).append('<img class="thumb_Img" src="assets/images/thumb_'+((i+1))+'.png">');
		
		
		
		$('#navbar').append('<div class="arrow" id="arrow_'+(i+1)+'"><img class="thumb_Img1" src="assets/images/thumb_'+((i+1))+'.png"></div>');
	}


 if(!( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))){
  	$(".swiper-pagination-bullet").on('mouseenter',function(){
		var target_id=$(this).attr('id').split('_')[1];
		$('.arrow').hide();
		$('#arrow_'+target_id).show();
	});
	$(".swiper-pagination-bullet").on('mouseleave',function(){
		$('.arrow').hide();
	});	
	
 }

	
	$(".slideImg").mouseenter(function(){
		for(i=0;i<slider.length;i++){
  			$('#imgCont_'+(i+1)+' img').attr('title',slider[i].img_alt_text);
		}
	});
	$(".slideImg").mouseleave(function() {
  		$( ".slideImg" ).removeAttr('title');
	});

if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
    // This is internet explorer 9 or 11
    	setTimeout(function(){
			$('#dummy_reader').html('').removeAttr('aria-label');
			$('#direction_text').removeAttr('role').attr('aria-label',$('#direction_text').text());
		},10)		

}
 	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	//if (/windows phone/i.test(userAgent)) {
	//	return "Windows Phone";
	//}
/* 	if (/android/i.test(userAgent)) {
		return "Android";
	} */
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		 $('#direction_text').attr('role','text').attr('aria-label',$('#direction_text').text()); 
	}
	
	$('#begin_btn').off('click').on('click',function(){
		begin_entered=true;

		$('#begin_page').hide();
		
		$('#head_ing').hide();
		$('#direction_text').css('visibility','hidden');
		$('.text_container').hide();
		
		setTimeout(function(){
			
			$('#responsive_container,#text_container').css('opacity','1').fadeIn(500);
			
			$('#head_ing').fadeIn(500);
			$('#direction_text').css('visibility','visible').fadeIn(500);
			//$('#direction_text').fadeIn(500);
			$('.text_container').eq(0).fadeIn(500);
			
			$('#direction_text').html(direction_text);
			$('#direction_text').attr('aria-label',$('#direction_text').text());
			$('#head_ing').html(slider[0].slide_Title);
			$('#head_ing').attr('aria-label',slider[0].slide_Title);
			
			/*Extra code added here*/
			//$(".slideImg").attr('alt','Strategies for sustainable living');
			$(".slideImg").hover(function(event) {
				var ariaTitle = $(this).attr("aria-label");
				$(this).attr("title",ariaTitle);
				$(this).focus(function(){	
					$(".slideImg").removeAttr("title");
				});
			},function (event) {
				$(".slideImg").removeAttr("title");
			});
			
			
			
			set_tab(1);
			resizeApp();

		},10);
		
		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
			$('#whole_container').removeAttr('role');
		}else{
			$('#whole_container').attr('role','application');
		}
	});
	
	$('#click_popup').off('click').on('click',function(){
		$('#pop_up').css('display','inline-block');
	});

	$('#close_btn').off('click').on('click',function(){
		$('#pop_up').css('display','none');
	})

 	$('.swiper-pagination-bullet').on('focusout', function(e) {
			$('.arrow').hide();
	});
 	$('.swiper-pagination-bullet').on('focus', function(e) {
			$('.arrow').hide();
			if(!( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))){
				$('#arrow_'+e.target.id.split('_')[1]).show();
			}
	});
	$('.slideImg,.text_container ').on('focus', function(e) {
			$('.arrow').hide();
	});	
	setTimeout(function(){
		//$('.swiper-pagination-bullet').attr('aria-label',thumb_label[0]);
		$('#bullet_1').attr('aria-label',thumb_label[0]);
		$('#bullet_2').attr('aria-label',thumb_label[1]);
		$('#bullet_3').attr('aria-label',thumb_label[2]);
		$('#bullet_4').attr('aria-label',thumb_label[3]);
		$('#bullet_5').attr('aria-label',thumb_label[4]);
	},100)
	
	/*----------------------------------------tab_functionality-----------------------------------*/

	
	$('#extra_tab').on('focus', function() {
		
		
	console.log(swiper.activeIndex);
		setTimeout(function(){
			$('.tab_index').eq(0).focus();
 		}, 10);	
	});
	$('#direction_text').on('focus', function(Event) {
		setTimeout(function(){
			//$('#head_ing').addClass('tab_index').attr('tabindex','0');
			
		},100)
			if ($("#direction_text").is(":focus") && back_tab==true) {
				console.log('123')
				setTimeout(function(){
					$('#direction_text').focus();
						$('#reverse_extra_tab').show();
						back_tab=false;
				},10)
			}
	});
 	$('#head_ing').on('focus', function(Event) {
		//$('#direction_text').removeAttr('role');
		
	}) 	

	$('#reverse_extra_tab').on('focus', function() {
		//alert();
		setTimeout(function(){
			$('.tab_index').eq(2).focus();
		},10)
	})
	$('#dummy_reader').on('focus', function(Event) {
			back_tab=true;
			$('#direction_text').focus();
			
			if(swiper.activeIndex+1==1){
				$('#direction_text').focus();
			}else{
				$('#head_ing').focus();
			} 
			$('#whole_container').removeAttr('role');
	});
	
	
	$('#pageTitle').on('focus', function() {
		$('.beginPageImage,#begin_btn').addClass('tab_index').attr('tabindex','0');
	})
	
//	
	$('#begin_dummy').on('focus', function() {
		$('.tab_index').eq(1).focus();
	});
	$('#begin_reverse_dummy').on('focus', function() {
		$('.tab_index').eq(0).focus();
	});

	setTimeout(function(){
		set_tab();
		
	},100)
	resizeApp();
	
		$('#direction_text').attr('role','none').attr('aria-label', 'Direction: Click on each thumbnail image to continue through the slideshow.'); 

	document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			console.log(document.activeElement.id)
			e.preventDefault();
			$('#'+document.activeElement.id).trigger('click');
		}
	}
	
	
	for(i=0;i<slider.length;i++){
		$('#bullet_'+(i+1)+' img').attr('alt',"Slider"+(i+1));	
		$('#arrow_'+(i+1)+' img').attr('alt',"ArrowImg"+(i+1));	
	}	
	 
	
	$('.swiper-pagination-bullet').off('click').on('click',function(event){
//		alert(event.target.id.split('_')[1])
		console.log()
//		$('.slideImg').focus()
		setTimeout(function(){
			$('#imgCont_'+event.target.id.split('_')[1]+' img').focus()
			console.log($('#imgCont_'+event.target.id.split('_')[1]+ ' img'))
		},500);
	})
	$('#reset_btn').off('click').on('click',function(){
		
		goBeginPage();
		
	});
	
})
window.onresize = function() {
	resizeApp(); 
}

// Extra code entered here
function transTextFun(crntScrNo){
	//$('#head_ing').hide();
	//$('.text_container').hide();
	if(crntScrNo == 0)$('#direction_text').removeClass('fade_in');
	var setTimeForFadein = setTimeout(function(){
		$('#head_ing')//.fadeIn(500);
		$('.text_container').eq(crntScrNo)//.fadeIn(500);
		if(crntScrNo == 0)$('#direction_text').removeClass('fade_in');
	},10);

}
// Refresh page 
 function goBeginPage(){
 	location.reload();
}

function set_tab(tabNo){
	if(!begin_entered){
		$('#text_container,#responsive_container').hide()
		$('.tab_index,#text_container,#responsive_container').removeClass('tab_index').removeAttr('tabindex');
		$('#pageTitle').addClass('tab_index');
		$('#begin_reverse_dummy,#begin_dummy').addClass('tab_index');
		
		
		$('.tab_index').each(function( index ) {		
			$('.tab_index').attr('tabindex','0');
			
		});
	}else{
		$('.text_container').removeClass('fade_in')
		$('#textcont_'+(swiper.activeIndex+1)).addClass('fade_in')
		$('#text_container,#responsive_container').show()
		$('.tab_index,.text_container').removeClass('tab_index').removeAttr('tabindex');
		$.each(eval('tabIndex[0].set_tab_'+tabNo), function (index, value) {
			//console.log(index, value);
			$(value).addClass('tab_index').attr('tabindex',index);
		});
		
	}
	
}

