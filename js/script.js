/*
* =======================
* BAD CODE NEED REFACTOR LATER
* =======================
*/

const el = el => document.querySelector(el);
window.onscroll = () => {
  const navbar = el("#navbar");
  const scroll = window.pageYOffset;

  /*
* ===============
* Navbar fixed on scroll
* ===============
*/
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-fixed");
    el("#home_nav").classList.add("active");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
  /*
  * ===============
  * Hero content scroll
  * ===============
  */
  el(".hero-content h1").style.transform =
    "translate(0px, -" + scroll * 1.01 + "px";
  el(".hero-content p").style.transform =
    "translate(0px, -" + scroll / 2 + "px";
  el(".hero-content .input-group").style.transform =
    "translate(0px, -" + scroll * 2 + "px";

  /*
* ===============================================================
* Dashboard image show onscroll
* 1. change .dashboard-img opacity to 1 when current y offet more than .hero-content offsetTop
* ===============================================================
*/

  if (scroll > el(".hero-content").offsetTop - 50)
    el(".dashboard-img").style.opacity = "1";

  /*
      * ==================
      * On scroll navbar active link 
      * ==================
      */
  if (scroll > el(".hero-content").offsetTop + 300) {
    el("#home_nav").classList.remove("active");
    el("#feature_nav").classList.add("active");
  } else {
    el("#feature_nav").classList.remove("active");
  }

  if (scroll > el("#customer").offsetTop - 300) {
    el("#work_nav").classList.add("active");
    el("#feature_nav").classList.remove("active");
  } else {
    el("#work_nav").classList.remove("active");
  }

  if (scroll > el("#pricing").offsetTop - 300) {
    el("#pricing_nav").classList.add("active");
    el("#work_nav").classList.remove("active");
  } else {
    el("#pricing_nav").classList.remove("active");
  }

  if (scroll > el("#testimoni").offsetTop - 300) {
    el("#review_nav").classList.add("active");
    el("#pricing_nav").classList.remove("active");
  } else {
    el("#review_nav").classList.remove("active");
  }

  /*
  * ===============
* image animation
* ===============
*/
  if (scroll > el("#customer").offsetTop + 50) {
    el("#customer h5").classList.add("animate__fadeInLeft");
    document.querySelectorAll("#customer .col").forEach((e, i) => {
      setTimeout(() => {
        document.querySelectorAll("#customer .col")[i].style.opacity = 1;
      }, 1000 * i);
    });
  }

  if (scroll > el("#work").offsetTop - 200) {
    el("#work .work-text").style.opacity = 1;
    el("#work .work-text").classList.add("animate__lightSpeedInLeft");
    document.querySelectorAll("#work .item").forEach((e, i) => {
      setTimeout(() => {
        document.querySelectorAll("#work .item")[i].style.opacity = 1;
      }, 1000 * i);
    });
  }

  if (scroll > el("#robust").offsetTop - 400) {
    el("#robust .cards-container").style.opacity = 1;
    el("#robust .right").style.opacity = 1;
    el("#robust .cards-container ").classList.add("animate__rotateInUpRight");
    el("#robust .right ").classList.add("animate__rotateInUpLeft");
  }
};
