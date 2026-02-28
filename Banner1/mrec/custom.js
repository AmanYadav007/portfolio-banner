var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');
var scroll_container = document.getElementById('scroll_container');
var scroll_content = document.getElementById("scroll_content");
var scroll_container;
var scroll_content;
var tl = new TimelineMax({repeat:0, repeatDelay:1.6});
var tt = TweenMax.to, tf = TweenMax.from, td = TweenMax.delayedCall, ts= TweenMax.set, tweenDelay = 8.5;
window.onload = function() {   
    app = {
    init : function(){
       
       this.startAd();
      
    },
    startAd :function(){
		
     
        // Scrollbar Start
        td(tweenDelay, scrollinit.iscroll);


    },

}

$(document).ready(function(){
   app.init(); 
});

  tl.set(banner, {visibility: "visible"})


	/*frame one*/ 
	.add("frame1")
	
	//  .from("#clickTAG", .5, {alpha:0,ease:Power2.easeInOut}, "frame1")
	
	.from(".logo", 1, {alpha:0,filter:"blur(2px)",ease:Power2.easeInOut}, "frame1")

   

	
	/*frame two*/ 
	.add("frame2", "frame1+=1.5")
	.from(".copy1,.copy2", 1, {alpha:0,ease:Power2.easeInOut}, "frame2+=.3")
	.to(".copy1,.copy2", 1, {alpha:0,filter:"blur(4px)",ease:Power2.easeInOut}, "frame2+=5")

    
  /*frame three*/
	.add("frame3", "frame2+=5.1")
	 .from(".btn_action", 1, {alpha:0, zIndex:99,ease:Power2.easeInOut}, "frame3+=.5")

	
    

   

 	;

  
}
