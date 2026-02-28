
var banner = document.getElementById('banner');	
var tl = new TimelineMax({repeat:0, repeatDelay:1.6});

window.onload = function() {   
    
  tl.set(banner, {visibility: "visible"})

	/*frame one*/ 
	.add("frame1")
  .from(".icon", 2, {scale:.5,alpha:0, ease:Power2.easeInOut}, "frame1")
	.from(".rainbow-light", 2, {alpha:0, ease:"none"}, "frame1+=1")
	.from(".fr1copy", 1.5, {alpha:0,y:50, ease:Power2.easeInOut}, "frame1+=1")
  .from(".purple-button", 2, {x:-300, ease:Power2.easeInOut}, "frame1+=1")
  // .to(".fr1copy", .5, {alpha:0, ease:Power2.easeInOut}, "frame1+=4.5")

    /*frame two*/
	.add("frame2", "frame1+=5")
  .from(".fr2bg", 2, {y:-250, ease:Power2.easeInOut}, "frame2")
  .from(".fr2copy", 1.5, {alpha:0,y:50, ease:Power2.easeInOut}, "frame2+=1")
  .from(".white-button", 2, {x:-300, ease:Power2.easeInOut}, "frame2+=1")

  .to(".icon, .fr1copy, .rainbow-light", .5, {alpha:0, ease:Power2.easeInOut}, "frame2+=1")
  .to(".light-house", .5, {width:1030,top:-20, left:-180, ease:Power2.easeInOut}, "frame2+=2")
   .to(".fr2copy", .5, {top:-10, alpha:0, ease:Power2.easeInOut}, "frame2+=5")
  .to(".fr2bg, .fr2copy", 1, {alpha:0, ease:Power2.easeInOut}, "frame2+=5")
   /*frame three*/
	.add("frame3", "frame2+=5")
	.to(".glow", 1, {alpha:1, ease:Power2.easeInOut}, "frame3")
  .to(".white-button", 1, {alpha:0, ease:Power2.easeInOut}, "frame3")
  .from(".fr3copy", 1.5, {alpha:0,y:50, ease:Power2.easeInOut}, "frame3")
  .from(".fr3-light", 1, {alpha:0, ease:Power2.easeInOut}, "frame3+=1")
  .to(".fr3copy", 0, {alpha:1, ease:Power2.easeInOut}, "frame3+=4")
  .call(()=> {
    if(!isup)
      toggleClass()
    
    animateEnds = true
    })
    .to(".fr3copy", 0, {alpha:1, ease:Power2.easeInOut}, "frame3+=5")
    .call(startScrolling);

  var currentDuration = tl.duration();
  console.log(currentDuration);
}

var plus_circle = document.getElementById('plus_circle')
var isiScroll  = document.getElementById('isiScroll')
var isi_container  = document.getElementById('isiContainer')
var dash1  = document.getElementById('dash1')

var isup = false;

function toggleClass() {
  if(!isup) {
      gsap.to("#isiScroll",1, { marginLeft:211,width:516, ease: Power2.easeInOut })
    //   gsap.to("#isiContainer",1, {height:160, ease: Power2.easeInOut })
      gsap.to(".dash1",1, { rotate:'90deg', ease: Power2.easeInOut })
      isup = true;
  } else {
  gsap.to("#isiScroll",1, { marginLeft:518,width:209, ease: Power2.easeInOut })
        // gsap.to("#isiContainer",1, {height:61, ease: Power2.easeInOut })
         gsap.to(".dash1",1, { rotate:'0deg', ease: Power2.easeInOut })
  isup = false;
  }

}

plus_circle.addEventListener('click', toggleClass)


