// ---------------------------------------------------- LOADING PAGE ----------------------------------------------------

function onLoadDisplay(reload = false) {
  loading_page.classList.add("display");
  setTimeout(() => {
    loading_page.classList.add("opacity");
  }, 50);
  setTimeout(() => {
    loading_page.classList.remove("opacity");
  }, 2500);
  setTimeout(() => {
    loading_page.classList.remove("display");
  }, 3500);

  if (reload) {
    setTimeout(() => {
      document.querySelector(".nav-bar").classList.remove("hide");
      document.querySelector(".section").classList.add("active");
      active_section = document.querySelector(".section.active");
    }, 1800);
  }
}

const createLoadingPage = () => {
  const onLoadDisplay = document.createElement("div");
  onLoadDisplay.className = "onLoadDisplay";
  onLoadDisplay.id = "onLoadDisplay";

  const loading_wrapper = document.createElement("div");
  loading_wrapper.className = "wrapper";
  onLoadDisplay.appendChild(loading_wrapper);

  const logo_image = document.createElement("div");
  logo_image.className = "logo_image";

  const image = document.createElement("img");
  image.src = "images\\logo_white.png";
  logo_image.appendChild(image);

  const logo_title = document.createElement("div");
  logo_title.className = "logo_title";
  logo_title.innerHTML = "Jain Dhir<br>Archi \u2022 terior<br>Designs";

  loading_wrapper.appendChild(logo_image);
  loading_wrapper.appendChild(logo_title);

  // console.log(onLoadDisplay);
  document.querySelector(".main").appendChild(onLoadDisplay);

  return onLoadDisplay;
};

var loading_page;

// setTimeout(() => {
//   onLoadDisplay(true);
// }, 200);

var width;
var height;

function setWindowDimentions() {
  width = window.innerWidth;
  height = window.innerHeight;
}

// console.log(width);
// console.log(height);

// ---------------------------------------------------- MENU PAGE ----------------------------------------------------

var menu_count = 0;
var active_section;

function menuToggle() {
  var menu_page = document.getElementById("menu-page");
  var menu_items = document
    .getElementById("menu-items-one")
    .getElementsByClassName("menu-item");

  if (menu_count == 0) {
    document
      .getElementById("menu-toggle")
      .classList.toggle("menu-button-clicked");

    menu_page.classList.toggle("active");

    setTimeout(() => {
      menu_page.classList.toggle("show");
    }, 100);

    setTimeout(() => {
      for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].classList.toggle("active");
      }
    }, 200);

    menu_count = 1;
  } else {
    document
      .getElementById("menu-toggle")
      .classList.toggle("menu-button-clicked");

    for (let i = 0; i < menu_items.length; i++) {
      menu_items[i].classList.toggle("active");
    }

    setTimeout(() => {
      menu_page.classList.toggle("show");
    }, 100);

    setTimeout(() => {
      menu_page.classList.toggle("active");
    }, 500);

    menu_count = 0;

    var menu_lists = document.getElementsByClassName("menu-list");
    if (menu_lists[0].classList.contains("hide")) {
      menu_lists[0].classList.remove("hide");
      menu_lists[1].classList.add("hide");
      menu_lists[2].classList.add("hide");
      menu_lists[3].classList.add("hide");
      for (menu_item of document.getElementsByClassName("menu-item")) {
        menu_item.classList.remove("active");
        menu_item.classList.remove("hide");
      }
    }
  }
}

function toggle_menu_two(val) {
  var menu_items_one = document
    .getElementById("menu-items-one")
    .getElementsByClassName("menu-item");
  var menu_items_two = document
    .getElementById("menu-items-two")
    .getElementsByClassName("menu-item");

  if (val == 0) {
    for (let i = 0; i < menu_items_two.length; i++) {
      menu_items_two[i].classList.toggle("active");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-one")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_one.length; i++) {
        menu_items_one[i].classList.toggle("hide");
      }
    }, 325);
  } else {
    for (let i = 0; i < menu_items_one.length; i++) {
      menu_items_one[i].classList.toggle("hide");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-one")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_two.length; i++) {
        menu_items_two[i].classList.toggle("active");
      }
    }, 325);
  }
}

function toggle_menu_three(val) {
  var menu_items_two = document
    .getElementById("menu-items-two")
    .getElementsByClassName("menu-item");
  var architecture_list = document
    .getElementById("architecture-menu")
    .getElementsByClassName("menu-item");
  var interior_list = document
    .getElementById("interior-menu")
    .getElementsByClassName("menu-item");

  if (val == 1) {
    for (let i = 0; i < menu_items_two.length; i++) {
      menu_items_two[i].classList.toggle("hide");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < architecture_list.length; i++) {
        architecture_list[i].classList.toggle("active");
      }
    }, 325);
  } else if (val == 2) {
    for (let i = 0; i < menu_items_two.length; i++) {
      menu_items_two[i].classList.toggle("hide");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[1]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < interior_list.length; i++) {
        interior_list[i].classList.toggle("active");
      }
    }, 325);
  } else if (val == 3) {
    for (let i = 0; i < architecture_list.length; i++) {
      architecture_list[i].classList.toggle("active");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_two.length; i++) {
        menu_items_two[i].classList.toggle("hide");
      }
    }, 325);
  } else {
    for (let i = 0; i < interior_list.length; i++) {
      interior_list[i].classList.toggle("active");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[1]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-two")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_two.length; i++) {
        menu_items_two[i].classList.toggle("hide");
      }
    }, 325);
  }
}

// ---------------------------------------------------- LAZY LOADING ----------------------------------------------------

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "100%",
  threshold: 0.1, // Specify the threshold for intersection
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      const img = entry.target;
      const src = img.getAttribute("data-src");
      // Replace the placeholder with the actual image source
      img.src = src;

      // Stop observing the image
      observer.unobserve(img);
    }
  });
};

var imageObserver = new IntersectionObserver(handleIntersection, options);

// ---------------------------------------------------- SCROLL TO TOP FUNCTION ----------------------------------------------------

var sectionNames;
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".scrollToTop").style.display = "flex";
  } else {
    document.querySelector(".scrollToTop").style.display = "none";
  }
}

function scrollToTop() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

// ---------------------------------------------------- SLIDES AND PREVIEW FUNCTION ----------------------------------------------------

var slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showSlide(n) {
  // var slideshow = active_section.querySelector(".slideshow");
  // slideshow.scrollIntoView({
  //   behavior: "smooth",
  //   block: "start",
  //   inline: "nearest",
  // });
  showDivs(n);
}

function showPreview(e) {
  var preview = active_section.querySelector(".preview");
  preview.classList.add("active");
  preview.querySelector("img").src = e.target.src;
  // console.log(e.target.src);
}

function closePreview() {
  var preview = active_section.querySelector(".preview");
  preview.classList.remove("active");
  // preview.querySelector("img").src = e.target.src;
  // console.log(e.target.src);
}

function showDivs(n) {
  // var i;
  var slides = active_section.querySelectorAll(".slides");
  var dots = active_section.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// ---------------------------------------------------- INTERSECTION OBSERVER ----------------------------------------------------

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
    // rootMargin: '50px'
  }
);

function scrollAnimation() {
  document
    .querySelector("#architecture_projects")
    ?.querySelectorAll(".card")
    .forEach((card) => observer.observe(card));
  document
    .querySelector("#interior_projects")
    ?.querySelectorAll(".card")
    .forEach((card) => observer.observe(card));
}

// ---------------------------------------------------- TRANSITION-EFFECT FUNCTION ----------------------------------------------------

function imageChange(e) {
  // document.querySelector('.item.transition img:nth-child(2)').classList.toggle('active');
  e.target.offsetParent.offsetParent
    .querySelector("img:nth-child(2)")
    .classList.toggle("active");
}

// ---------------------------------------------------- SCROLLING FUNCTION ----------------------------------------------------

function setScrollVar() {
  const htmlElement = document.documentElement;
  // console.log((htmlElement.scrollTop / htmlElement.clientHeight) * 100);

  document
    .querySelector(".home.active")
    ?.querySelectorAll(".item")
    .forEach((element) => {
      const percentOfScreenHeightScrolled =
        (htmlElement.scrollTop - element.offsetTop) / htmlElement.clientHeight;
      element.style.setProperty(
        "--scroll",
        Math.min(Math.max(percentOfScreenHeightScrolled * 100, -100), -50)
      );
    });

  document
    .querySelector(".int_project_info.active")
    ?.querySelectorAll(".content-wrapper")
    .forEach((element) => {
      const percentOfScreenHeightScrolled =
        (htmlElement.scrollTop - element.offsetTop) / htmlElement.clientHeight;
      element.style.setProperty(
        "--scroll",
        Math.max(-100, Math.min(percentOfScreenHeightScrolled * 100, 0))
      );
    });
}

// ---------------------------------------------------- CALLING FUNCTIONS ----------------------------------------------------

window.addEventListener("scroll", () => {
  setScrollVar();
  scrollFunction();
});

window.addEventListener("resize", () => {
  setWindowDimentions();
  setScrollVar();
  scrollAnimation();
});

window.addEventListener("load", () => {
  loading_page = document.getElementById("onLoadDisplay");
  // loading_page = createLoadingPage();
  onLoadDisplay(true);

  setWindowDimentions();
  setScrollVar();
  scrollAnimation();
  sectionNames = document.querySelectorAll("section");
  document.querySelectorAll(".lazy").forEach((image) => {
    imageObserver.observe(image);
  });
});
