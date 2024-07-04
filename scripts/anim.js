gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

const scroller = ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true,
  overflow: "hidde",
});

scroller.scrollTrigger.refresh();

function loader() {
  let body = document.querySelector("body");
  body.style.overflow = "hidden";

  setTimeout(() => {
    document.fonts.ready.then(function () {
      let loader = document.querySelector(".loader");

      gsap.to(loader, {
        opacity: "0",
        zIndex: "-1",
        onComplete: () => {
          body.style.overflow = "visible";
        },
      });
    });
  }, 4000);
}

loader();

function mouseFollower() {
  const cursor = document.querySelector(".cursor");

  function moveCursor(e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursor.style.opacity = "1";
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
      cursor.style.opacity = "0";
    }, 300);
  }

  let cursorTimeout;
  document.addEventListener("mousemove", moveCursor);

  const bm = document.querySelectorAll(".blendmode");

  bm.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
      cursor.style.mixBlendMode = "difference";
    });
    elem.addEventListener("mouseout", function () {
      cursor.style.mixBlendMode = "luminosity";
    });
  });
}

mouseFollower();

function mouseEffect() {
  Shery.makeMagnet(".magnet");
}
mouseEffect();

function menu() {
  var mbox = document.querySelector(".menubox");
  var mbtn = document.querySelector(".menubtn");
  var toggle = 0;

  mbtn.addEventListener("click", function () {
    if (toggle === 0) {
      gsap.to(mbox, {
        display: "flex",
        height: "100vh",
        onUpdate: () => {
          on.style.display = "none";
          off.style.display = "flex";
        },
      });
      gsap.to(".linkbox a", {
        delay: 0.3,
        opacity: 1,
        marginRight: "0vmax",
        stagger: 0.1,
      });
      toggle = 1;
    } else {
      gsap.to(mbox, {
        delay: 0.7,
        height: "0vh",
        bottom: "100%",
        duration: 0.5,
        onComplete: function () {
          mbox.style.bottom = "0%";
        },
      });
      gsap.to(".linkbox a", {
        opacity: 0,
        marginRight: "10vmax",
        stagger: 0.1,
      });
      toggle = 0;
    }
  });
}
menu();
