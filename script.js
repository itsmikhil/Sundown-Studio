function loaderAnimation() {
  let loader = document.querySelector(".loader");
  let h1s = loader.querySelectorAll(".loader h1");
  let tl = gsap.timeline();
  
  tl.to(h1s[0], {
    opacity: 1,
    duration: 0.2,
    ease: "linear",
  });
  tl.to(h1s[0], {
    opacity: 0,
    duration: 0.5,
    ease: "linear",
    delay: 0.5,
  }).to(h1s[1], {
    opacity: 1,
    duration: 0.2,
    ease: "linear",
    delay: 0.1,
  });
  tl.to(h1s[1], {
    opacity: 0,
    duration: 0.2,
    ease: "linear",
    delay: 0.5,
  }).to(h1s[2], {
    opacity: 1,
    duration: 0.2,
    ease: "linear",
    delay: 0.1,
  });
  tl.to(h1s[2], {
    opacity: 0,
    duration: 0.2,
    ease: "linear",
    delay: 0.5,
  });
  tl.to(loader, {
    top: "-100%",
    duration: 0.4,
    delay: 0.1,
  });
}

loaderAnimation();  // Call the function


const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});



function fixedBoxAnimation() {
  let elem = document.querySelectorAll(".elem-con .elem");
  let box = document.querySelector(".fixed-con");
  elem.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      box.style.display = "inline-block";
      let img = e.getAttribute("src");
      box.style.backgroundImage = `url(${img})`;
    });
    e.addEventListener("mouseleave", () => {
      box.style.display = "none   ";
    });
  });
}

fixedBoxAnimation();

function panelAnimation() {
  let h1 = document.querySelectorAll(".page3 .panel .left h1");
  let right = document.querySelector(".page3 .panel .right");
  let p = document.querySelector(".page3 .panel .left p");
  if (h1.length > 0) {
    h1[0].style.marginLeft = "0";
    h1[0].style.color = "white";
  }
  h1.forEach((el) => {
    el.addEventListener("click", () => {
      h1.forEach((e) => {
        e.style.marginLeft = ""; // Reset margin
        e.style.color = ""; // Reset color
      });
      el.style.marginLeft = "0";
      el.style.color = "white";
      let src = el.getAttribute("src");
      let data = el.getAttribute("data");
      right.style.backgroundImage = `url(${src})`;
      console.log(p.style.innerText);
      p.innerHTML = data;
    });
  });
}

panelAnimation();

var swiper = new Swiper(".mySwiper", {
  initialSlide: 1,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
});

function menu() {
  let menu = document.querySelector(".menu");
  let flag = 0;
  let fullScr = document.querySelector(".full-scr");

  menu.addEventListener("click", () => {
    if (flag == 0) {
      fullScr.style.top = "0";
      flag = 1;
    } else {
      fullScr.style.top = "-100%";
      flag = 0;
    }
  });
}

menu();
