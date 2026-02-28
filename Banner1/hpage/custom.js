var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');
var scroll_container = document.getElementById('scroll_container');
var scroll_content = document.getElementById("scroll_content");
var scroll_container;
var scroll_content;
var tl = new TimelineMax({repeat:0, repeatDelay:1.6});
var tt = TweenMax.to, tf = TweenMax.from, td = TweenMax.delayedCall, ts= TweenMax.set, tweenDelay = 12;
window.onload = function() {   
    app = {
    init : function() {
       
       this.startAd();
      
    },
    startAd :function() {
      
        td(tweenDelay, scrollinit.iscroll);
    },

}

$(document).ready(function() {
   app.init();
});

tl.set(banner, {visibility: "visible"})
/* frame one */
// .from("#clickTAG", 0.4, {alpha:0})                            // 0.4s
.from([".ribbon",".logo"], 1, {alpha:0, filter:"blur(4px)"})   // 1s
.from([".copy1",".copy2"], 1, {delay:0.3, alpha:0, filter:"blur(4px)"}) // 1.3s total so far
/* frame two */
.to(".copy1,.copy2", 0.8, {delay:1.5, alpha:0})                // 3.6s total now
/* frame three */ 	
.from(".patient-1", 1, {alpha:0})                              // patient 1 appears
.to({}, 0.5, {})                                                // <- add a 0.8s pause before patient-2
.from(".patient-2", 1.8, {alpha:0})                            // patient 2 starts later
.from("#cta,.btn_action", 1.5, {alpha:0}, "-=0.6")   
.from("#cta", 1.5, {zIndex:-1, alpha:0}, "-=0.6")                  
.from(".patient-3", 1.8, {alpha:0},"-=0.5"); 

  var currentDuration = tl.duration();
  console.log(currentDuration);
//.add(console.log(tl.duration()))
}