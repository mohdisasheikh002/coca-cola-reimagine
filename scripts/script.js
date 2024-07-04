function sec2() {
  gsap.from(".sec2 .showbox", {
    scrollTrigger: {
      trigger: ".sec1",
      start: "top 0%",
      scrub: true,
    },
    top: "23%",
  });

  gsap.from(".caneholder", {
    scrollTrigger: {
      trigger: ".sec1",
      start: "top top",
      scrub: true,
    },
    top: "-100%",
  });

  ScrollTrigger.create({
    trigger: ".sec2",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

  gsap.to(".sec2 .left, .sec2 .right, .sec2 .showbox, .sec2 .buttonbox", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      scrub: true,
    },
    opacity: "0",
  });

  gsap.to(".sec2", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      scrub: true,
    },
    backgroundColor: "#fff",
  });

  gsap.to(".nav", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "top -50%",
      scrub: true,
    },
    top: "-100%",
  });

  gsap.to(".caneholder", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      scrub: true,
    },
    rotate: "40deg",
  });

  gsap.to(".cane", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      scrub: true,
    },
    height: "60%",
  });

  const Canes = document.querySelectorAll(".cane");
  let currentCane = 0;
  const totalCanes = Canes.length;

  const wrapper = document.querySelector(".wrapper");
  const nav = document.querySelector(".nav");
  const menubox = document.querySelector(".menubox");
  const sec2Element = document.querySelector(".sec2");

  const contentLeft = sec2Element.querySelector(".left");
  const animbtn = contentLeft.querySelector(".animbtn");
  const contentRight = sec2Element.querySelector(".right");

  const h1Element = contentLeft.querySelector("h1");
  const paraElement = contentLeft.querySelector("p");

  const caloriesElement = contentRight.querySelector("#calories");
  const totalFatElement = contentRight.querySelector("#total-fat");
  const sodiumElement = contentRight.querySelector("#sodium");
  const carbohydrateElement = contentRight.querySelector("#carbohydrate");
  const proteinElement = contentRight.querySelector("#protein");

  function showCane(index) {
    Canes.forEach((cane) => cane.classList.remove("current"));
    Canes[index].classList.add("current");

    switch (index) {
      case 0:
        gsap.fromTo(
          h1Element,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          paraElement,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          [
            caloriesElement,
            totalFatElement,
            sodiumElement,
            carbohydrateElement,
            proteinElement,
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
        );

        h1Element.innerHTML = `
            <h1 class="fs1">
              Coca Cola <br />
              Original
            </h1>`;
        paraElement.textContent =
          "Coca-Cola Original is a carbonate soft drink with no sugar content specially formulated to achieve a unique taste.";
        caloriesElement.textContent = "140";
        totalFatElement.textContent = "0g";
        sodiumElement.textContent = "45mg";
        carbohydrateElement.textContent = "39g";
        proteinElement.textContent = "2g";
        wrapper.style.backgroundColor = "#ab301b";
        menubox.style.backgroundColor = "#ab301b";
        nav.style.backgroundColor = "#ab301b";
        animbtn.addEventListener("mouseover", function () {
          animbtn.style.color = "#ab301b";
        });
        animbtn.addEventListener("mouseout", function () {
          animbtn.style.color = "#fff";
        });
        break;

      case 1:
        gsap.fromTo(
          h1Element,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          paraElement,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          [
            caloriesElement,
            totalFatElement,
            sodiumElement,
            carbohydrateElement,
            proteinElement,
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
        );

        h1Element.innerHTML = `
        <h1 class="fs1">
          Coca Cola <br />
          Diet
        </h1>`;
        paraElement.textContent =
          "Coca-Cola Diet is a reduced-calorie cola, sweetened with aspartame, acesulfame-K, and steviol glycosides.";
        caloriesElement.textContent = "45";
        totalFatElement.textContent = "0g";
        sodiumElement.textContent = "40mg";
        carbohydrateElement.textContent = "35g";
        proteinElement.textContent = "4g";
        wrapper.style.backgroundColor = "#6a6a6a";
        menubox.style.backgroundColor = "#6a6a6a";
        nav.style.backgroundColor = "#6a6a6a";
        animbtn.addEventListener("mouseover", function () {
          animbtn.style.color = "#6a6a6a";
        });
        animbtn.addEventListener("mouseout", function () {
          animbtn.style.color = "#fff";
        });
        break;

      case 2:
        gsap.fromTo(
          h1Element,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          paraElement,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          [
            caloriesElement,
            totalFatElement,
            sodiumElement,
            carbohydrateElement,
            proteinElement,
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
        );

        h1Element.innerHTML = `
        <h1 class="fs1">
          Coca Cola <br />
          Zero
        </h1>`;
        paraElement.textContent =
          "Coca-Cola Zero Sugar, also called Coke Zero, is a diet cola produced by The Coca-Cola Company.";
        caloriesElement.textContent = "25";
        totalFatElement.textContent = "0g";
        sodiumElement.textContent = "30mg";
        carbohydrateElement.textContent = "37g";
        proteinElement.textContent = "7g";
        wrapper.style.backgroundColor = "#303030";
        menubox.style.backgroundColor = "#303030";
        nav.style.backgroundColor = "#303030";
        animbtn.addEventListener("mouseover", function () {
          animbtn.style.color = "#303030";
        });
        animbtn.addEventListener("mouseout", function () {
          animbtn.style.color = "#fff";
        });
        break;
    }

    updateCaneNumber(index);
  }

  function moveCane(direction) {
    if (direction === "next") {
      currentCane = (currentCane + 1) % totalCanes;
    } else if (direction === "prev") {
      currentCane = (currentCane - 1 + totalCanes) % totalCanes;
    }

    showCane(currentCane);
  }

  function updateCaneNumber(index) {
    const numberSpan = document.querySelector(".buttonbox .number");
    numberSpan.textContent = index + 1;
  }

  updateCaneNumber(currentCane);

  showCane(currentCane);

  return {
    moveCane,
  };
}

const sec2Animations = sec2();

function sec4() {
  gsap.to(".caneholder", {
    scrollTrigger: {
      trigger: ".sec4",
      start: "top bottom",
      scrub: true,
    },
    opacity: "0",
  });
}

const sec4Animations = sec4();

function sec5() {
  gsap.to(".boxup", {
    scrollTrigger: {
      trigger: ".sec4",
      start: "50% 50%",
    },
    duration: "85",
    y: "-2000",
    repeat: "-1",
  });

  gsap.to(".boxdown", {
    scrollTrigger: {
      trigger: ".sec4",
      start: "50% 50%",
    },
    duration: "85",
    y: "2000",
    repeat: "-1",
  });
}

sec5();

var counter = document.querySelector(".counter");

gsap.to(counter, {
  scrollTrigger: {
    trigger: ".counter",
    start: "top 100%",
  },
  onUpdate: () => {
    let flag = 0;

    setInterval(() => {
      if (flag == 137) {
        clearInterval();
      } else {
        flag += 1;
        counter.textContent = flag + " ";
      }
    });
  },
});
