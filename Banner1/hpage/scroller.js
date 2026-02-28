var content,autoScrollTimer,autoScrollTimerAdjust,autoScroll,idleTimer,idleState,idleWait;
var scrollinit;

scrollinit={
    iscroll: function(){
       scrollinit.movescroll(); 
    },
	
    movescroll: function(){
        $(".scroll-pane").mCustomScrollbar("destroy");
        content=$(".scroll-pane"),
        //autoScrollTimer=200000,
		autoScrollTimer=150000,
        idleTimer = null,
        idleState = false,
        idleWait = 3000,   
        content.mCustomScrollbar({
            scrollButtons:{enable:true},
            callbacks:{
                whileScrolling:function(){
                    autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
                },
                onScroll:function(){ 
                    if($(this).data("mCS").trigger==="internal"){scrollinit.AutoScrollOff();}
                }
            }
        });
        content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
	    scrollinit.AutoScrollOn("bottom");
        $('.scroll-pane').on('mouseenter touchstart click', function(){
            scrollinit.AutoScrollOff();
            if( idleState == false ){
                scrollinit.idle();	
            }				
	    });
        $('.scroll-pane').on('mouseleave touchend', function(){
		clearTimeout(idleTimer);
		$('.scroll-pane').on('mouseleave touchend');
		if(content.hasClass("auto-scrolling-to-top")){
			scrollinit.AutoScrollOn("top",autoScrollTimerAdjust);
		}else{
			scrollinit.AutoScrollOn("bottom", autoScrollTimer-autoScrollTimerAdjust);
		}
		console.log(autoScrollTimer-autoScrollTimerAdjust);
	});
    },
    AutoScrollOn: function(to,timer){
        
        if(!timer){
			timer=autoScrollTimer;
		}
		content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"linear"});
		autoScroll=setTimeout(function(){
			if(content.hasClass("auto-scrolling-to-top")){				
				this.AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
				content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
			}else{
				setTimeout(function(){
					content.mCustomScrollbar('scrollTo','0%');
					content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
					if(content.hasClass("auto-scrolling-on")){
						$('.scroll-pane').off('mouseenter mouseleave touchstart click touchend');
						scrollinit.AutoScrollOff();
						idleState = true;
					}					
				},3000);				
			}
		},timer);
        
        
    },
    AutoScrollOff:function(){
        clearTimeout(autoScroll);
		content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
    },
    idle: function(){
        clearTimeout(idleTimer);
		if (idleState == true) { 
			// Reactivated event
			console.log('Idel time is over.');			
		}
		idleState = false;
		idleTimer = setTimeout(function () { 
			// Idle Event
			console.log('Idel time is start.');
			console.log(autoScrollTimer-autoScrollTimerAdjust);
			scrollinit.AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
			$('.scroll-pane').off('mouseleave touchend');
		}, idleWait);
    }
    
    
    
}
$(window).load(function(){
	$(".scroll-pane").mCustomScrollbar();
});