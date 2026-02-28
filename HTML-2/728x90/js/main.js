const animate = () => {
  tt = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "sine.out",
    },
  });


  tt.set("#banner", { display: "block" })


    .addLabel("f2", .5)
    .to("#logo,#badge", { duration: 1, opacity: 1, ease: "power2.inOut" }, "f1")
    .to("#badge", { duration: 1, opacity: 0, ease: "power2.inOut" }, "f1+=1.5")

    .addLabel("f2", 2)
    .to(["#steam"], { duration: 1, opacity: 1, x: 370, ease: "power2.inOut" }, "f2")


    // .to(["#cta"], { duration: 1, opacity: 1, top: 0, ease: "power2.inOut" }, "f2")
    // .add(ctaActive, ">")
    // .to("#btn-exit_cta", { duration: 1, autoAlpha: 1, zIndex: 2 }, "f2")
    .to("#ctaButton", { duration: 1, opacity: 1, ease: "power2.inOut" }, "f2")

    .to("#logo", { duration: 1, opacity: 1, scale: .7, x: -193, y: -13, ease: "power2.inOut" }, "f2")
    .to(["#bgMask"], { duration: 1, opacity: 1, height: 90, width: 170, ease: "power2.inOut" }, "f2")
    .to(["#bg1"], { duration: 1, opacity: 1, ease: "power2.inOut" }, "f2")
    .to("#badge2,#copy1", { duration: 1, opacity: 1, top: 0, ease: "power2.inOut" }, "f2")


    .addLabel("f3", 6)
    .to(["#steam"], 1, { duration: 1, opacity: 1, x: -23, y: 18, ease: "power2.inOut" }, "f3")
    .to("#badge2,#copy1", { duration: 1, opacity: 0, top: -25, ease: "power2.inOut" }, "f3")
    .to("#copy2", { duration: 1, opacity: 1, top: 0, ease: "power2.inOut" }, "f3")


    .addLabel("f4", 9)


    .to("#copy2", { duration: 1, opacity: 0, top: -25, ease: "power2.inOut" }, "f4+=1.5")
    .to(["#steam"], { duration: 1, opacity: 1, x: 456, y: 17, ease: "power2.inOut" }, "f4+=1.5")
    .to("#copy3", { duration: 1, opacity: 1, top: 1, ease: "power2.inOut" }, "f4+=1.8")






    .addLabel("f5", 15)
    .to(["#steam"], 1, { duration: 1, scale: .7, opacity: 1, x: 412, y: 5, ease: "power2.inOut" }, "f5")
    .to("#copy3", { duration: 1, opacity: 0, top: -25, ease: "power2.inOut" }, "f5")
    .to("#copy4", { duration: 1, opacity: 1, top: 0, ease: "power2.inOut" }, "f5")

    .to(["#patient"], { duration: 1, opacity: 1, top: 0, ease: "power2.inOut" }, "f5")
    .to(isFooterExpanded, { delay: 2 })
    .call(autoScroll)
    ;
};


// Footer interactions
const footer = document.querySelector("footer");
const scrollbar_inner = document.querySelector(".scroller");
const arrow = document.querySelector(".footer_arrow");
const footerSI = document.querySelector(".footer-safety-info");

let isToggling = false;
let isFooterExpanded = false;

arrow.addEventListener("click", (event) => handleToggle(event));
footerSI.addEventListener("click", (event) => handleToggle(event));

function handleToggle(event) {
  event.stopPropagation();
  if (isToggling) return; // Prevent multiple triggers
  isToggling = true;
  toggleFooter();
  setTimeout(() => {
    isToggling = false;
  }, 300);
}

function toggleFooter() {
  arrow.classList.toggle("rotate");

  // Define fixed sizes for expanded and collapsed states
  const footerWidth = isFooterExpanded ? "272px" : "556px";
  //const scrollbarHeight = isFooterExpanded ? "167px" : "474px";

  // Apply the heights to the elements
  footer.style.width = footerWidth;
  //scrollbar_inner.style.height = scrollbarHeight;

  isFooterExpanded = !isFooterExpanded;
}
// Footer interactions ends

// Scroll Events Start
const scrollDiv = document.getElementById("scrolled_section");
let scrollInterval;
let isUserScrolling = false;

const autoScroll = () => {
  let isUserScrolling = false;
  // Function to start scrolling
  const startScrolling = () => {
    if (!isUserScrolling) {
      gsap.to(scrollDiv, {
        scrollTop: scrollDiv.scrollHeight - scrollDiv.clientHeight,
        duration: 400, // Adjust duration for desired speed
        ease: "linear",
      });
    }
  };
  // Wait 1 second before expanding the footer
  setTimeout(() => {
    if (!isFooterExpanded) {
      toggleFooter();
      setTimeout(startScrolling, 800); // Adjust delay based on footer animation time
    } else {
      startScrolling();
    }
  }, 500); // Initial delay before expanding
};

const handleUserScroll = () => {
  isUserScrolling = true;
  gsap.killTweensOf(scrollDiv);
};

scrollDiv.addEventListener('mousedown', handleUserScroll);
scrollDiv.addEventListener('touchstart', handleUserScroll, { passive: true });
scrollDiv.addEventListener('wheel', handleUserScroll, { passive: true });
// Scroll Events End


// GSAP timeline to control animations
const ctaTimeline = gsap.timeline({ defaults: { duration: 0.2, ease: "power2.inOut" } });

// Function to handle mouseover event
function cta_over() {
  ctaTimeline.clear(); // Clear the timeline to prevent overlapping animations
  ctaTimeline.to(cta_fill, { fill: "#EFD85D" }); // Sync animations with '<'
}

// Function to handle mouseout event
function cta_out() {
  ctaTimeline.clear(); // Clear the timeline to prevent overlapping animations
  ctaTimeline.to(cta_fill, { fill: "#DAC961" }); // Sync animations with '<'
}

// Initialize animations on window load
window.addEventListener("load", () => {
  // Function to initialize animations
  gsap.to(preloader, { duration: 0.2, autoAlpha: 0 });
  // Event listeners for hover effects
  const cta_hotspot = document.querySelector("#hoverSpot");

  animate();
});
function ctaActive() {

  gsap.set('#btn-exit_cta', { display: "block" });
  //RolloverCTA
  document.getElementById('btn-exit_cta').addEventListener('mouseover', function () {
    //hover
    gsap.to("#cta2", { opacity: 1, ease: "power3.out" });

  });
  //RolloutCTA
  document.getElementById('btn-exit_cta').addEventListener('mouseout', function () {
    //out
    gsap.to("#cta2", { opacity: 0, ease: "power3.out" });

  });
  document.querySelector("#btn-exit_cta").addEventListener("click", exits);

}
function ctaActive2() {
  gsap.set('#btn-exit_cta2', { display: "block" });
  //RolloverCTA
  document.getElementById('btn-exit_cta2').addEventListener('mouseover', function () {
    //hover
    gsap.to("#cta4", { opacity: 1, ease: "power3.out" });

  });
  //RolloutCTA
  document.getElementById('btn-exit_cta2').addEventListener('mouseout', function () {
    //out
    gsap.to("#cta4", { opacity: 0, ease: "power3.out" });

  });
  document.querySelector("#btn-exit_cta2").addEventListener("click", exits);

}

function exits(e) {
  switch (e.target.id) {
    case "btn-exit":
      window.open(window.clickTag1)
      console.log("clickTag1");
      break;
    case "fpi_link":
      window.open(window.clickTag2)
      console.log("clickTag2");
      break;
    case "fpi_link2":
      window.open(window.clickTag3)
      console.log("clickTag3");
      break;
    case "btn-exit_cta":
      window.open(window.clickTag1)
      console.log("clickTag1");
      break;
    case "btn-exit_cta2":
      window.open(window.clickTag1)
      console.log("clickTag1");
      break;
    default:
      break;
  }
}
