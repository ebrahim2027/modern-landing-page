//  =============== MENU ===============
const triggerMenu = document.getElementById("trigger-menu"),
  mobileMenuContr = document.getElementById("menu-mobile-container"),
  CloseMenu = document.querySelector("#menu-mobile-container .dark-part");

triggerMenu.addEventListener("click", () => {
  mobileMenuContr.classList.add("active");
});
CloseMenu.addEventListener("click", () => {
  mobileMenuContr.classList.remove("active");
});

//  =============== TESTIMONIAL CAROUSEL ===============
const nextBtn = document.querySelector("#testimonial .next"),
  prevBtn = document.querySelector("#testimonial .prev"),
  items = document.querySelectorAll("#testimonial .testimonial-item");
let times = items.length;
let count = 1;

nextBtn.addEventListener("click", () => {
  if (count >= times) {
    count = 1;
    items[0].style.marginLeft = "0";
  } else {
    items[0].style.marginLeft = `-${items[0].offsetWidth * count}px`;
    count++;
  }
});
prevBtn.addEventListener("click", () => {
  if (count === 1) {
    items[0].style.marginLeft = `-${items[0].offsetWidth * (times - 1)}`;
  } else {
    items[0].style.marginLeft = `-${
      items[0].offsetWidth * (count - 1) - items[0].offsetWidth
    }px`;
    count--;
  }
});

// =============== GO-TO-UP BUTTON ===============
let gotoup = document.getElementById("gotoup");
window.onscroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? gotoup.classList.add("active")
    : gotoup.classList.remove("active");
};

gotoup.addEventListener("click", () => {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
});

/*===== GSAP ANIMATION =====*/
gsap.from(".logo", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 10,
});
gsap.from(".menu-icon", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  y: 10,
});
gsap.from(".desktop-menu ul li", {
  opacity: 0,
  duration: 1,
  delay: 0.6,
  y: 30,
  stagger: 0.2,
});

// sections
gsap.from(".section > *", {
  opacity: 0,
  duration: 0.7,
  delay: 1,
  y: 30,
  stagger: 0.2,
});
