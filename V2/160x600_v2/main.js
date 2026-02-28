/*<uid>2276</uid> <timestamp>1.6492.6553.4587</timestamp> <date>Wed Apr 06 2022 12:18:54 GMT-0500 (Central Daylight Time)</date>*/
var bannerID, stageWidth, stageHeight, mainTimeline, startTime, stageCompleteTime, style = "column";

function exitHandler(e) {
    e = e.toElement || e.relatedTarget || e.target || function () {
        throw "Failed to attach an event target!"
    };
    console.log("clicked on", e.id), e.id, window.open(window.clickTag1)
}

function init() {
    gsap.registerPlugin(DrawSVGPlugin), new Border(borderHolder, {
        thickness: 1
    }), (mainTimeline = gsap.timeline({
        onStart: startTimeline,
        onComplete: completeTimeline
    })).set(HandWritten_CTC, {
        autoAlpha: 1
    })
        .set(["#HandWritten .textReveal"], { drawSVG: "0%" })
        .addLabel("one").add(drawLine1(), "one").to([logo, text1, text1a, text1b,], {
            duration: 1.5,
            stagger: .5,
            autoAlpha: 1,
            drawSVG: "0%"
        }, "one").add(drawLine2(), "one").addLabel("two", "+=1").to([logo, line2holder, line1holder, text1, text1a, text1b], {
            duration: .5,
            autoAlpha: 0
        }, "two").addLabel("twoA", "+=.25").add(drawLine3(), "twoA").to([logo2, text2, text2a], {
            duration: 1.5,
            stagger: .5,
            autoAlpha: 1
        }, "twoA").addLabel("three", "+=1").to([logo2, line3holder, text2, text2a ], {
            duration: .3,
            autoAlpha: 0
        },
            // "three").addLabel("threeA", "+=.25").add(drawLine5(), "threeA").to([logo, text3, text3a, footnote, "#HandWritten .textReveal", text3b, ctaBtn], {
            //     duration: 1.5,
            //     stagger: .5,
            //     autoAlpha: 1
            // },
            "three").addLabel("threeA", "+=.25").add(drawLine5(), "threeA").to([logo3, text3, footnote, "#HandWritten .textReveal", text3b, text3c, ctaBtn], {
                duration: .5,
                stagger: .5,
                autoAlpha: 1,
                drawSVG: "100%"
            },
                "three").addLabel("threeA", "+=.25").add(drawLine6(), "threeA").to([], {

                },
                    // "three").addLabel("threeA", "+=.5").to([line4pathholder, line4path, text3, text3a,ctaBtn], {
                    //     duration: .5,
                    //    autoAlpha:0
                    //   }, "threeA")
                    // 	 .to([logo,footnote], {
                    //     duration: .25,
                    //     delay: .15,
                    //     autoAlpha: 1
                    //   },
                ).pause(), mainTimeline.play()
}

function drawLine1() {
    var e = gsap.timeline();
    return e.set([line1holder, line1pathholder, line1cover], {
        autoAlpha: 1
    }).addLabel("one").from(line1path, {
        duration: 1,
        drawSVG: "0%",
        ease: "none"
    }, "one"), e
}

function drawLine2() {
    var e = gsap.timeline();
    return e.set([line2holder, line2pathholder, line2cover], {
        autoAlpha: 1
    }).addLabel("two").fromTo(line2path, {
        drawSVG: "0%"
    }, {
        duration: .5,
        delay: 1,
        drawSVG: "100%",
        ease: "none"
    }, "two"), e
}

function drawLine3() {
    var e = gsap.timeline();
    return e.set([line3pathholder, line3cover], {
        autoAlpha: 1
    }).set(line3holder, {
        autoAlpha: 0
    }).addLabel("three").to(line3holder, {
        duration: .25,
        autoAlpha: 1
    }, "three").fromTo(line3path, {
        drawSVG: "0%"
    }, {
        duration: 1.5,
        drawSVG: "100%",
        ease: "none"
    }, "three"), e
}

// function drawLine4() {
//   var e = gsap.timeline();
//   return e.set([line4holder, line4pathholder, line4cover], {
//     autoAlpha: 1
//   }).set(line4holder, {


//     x: 0,
//     y: 0
//   }).addLabel("four").from(line4path, {
//     duration: 2,
//     drawSVG: "0%",
//     ease: "none"
//   }, "four"), e
// }

function drawLine5() {
    var e = gsap.timeline();
    return e.set([line5holder, line5pathholder, line5cover], {
        autoAlpha: 1
    }).addLabel("five").from(line5path, {
        duration: 1,
        drawSVG: "0%",
        ease: "none"
    }, "one"), e
}

function drawLine6() {
    var e = gsap.timeline();
    return e.set([line6holder, line6pathholder, line6cover], {
        autoAlpha: 1
    }).addLabel("six").fromTo(line6path, {
        drawSVG: "0%"
    }, {
        duration: .5,
        delay: .5,
        drawSVG: "100%",
        ease: "none"
    }, "two"), e
}

function startTimeline() {
    startTime = (new Date).getTime()
}

function completeTimeline() {
    stageCompleteTime = (new Date).getTime(), console.log(">>" + bannerID.replace("dim", "") + "<< stage animation finished at timestamp", (.001 * (stageCompleteTime - startTime)).toFixed(1) + "s")
}