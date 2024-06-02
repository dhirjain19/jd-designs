var width;
var height;

function setWindowDimentions() {
  width = window.innerWidth;
  height = window.innerHeight;
}

// console.log(width);
// console.log(height);
 
// ---------------------------------------------------- LOADING PAGE ----------------------------------------------------
var loading_page;

function onLoadDisplay(reload = false) {
  loading_page = document.getElementById("onLoadDisplay");

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
      document.getElementById("home").classList.add("active-section");
      if (width > 500) document.getElementById("home").querySelectorAll(".item").forEach((item) => observer.observe(item));
      active_section = document.querySelector(".section.active-section");
    }, 1800);
  }
}

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

// ---------------------------------------------------- OPEN SECTION ----------------------------------------------------

var sectionNames;

function opensection(sectionTab, menu = true) {
  sectionNames = document.querySelectorAll("section");

  sectionNames.forEach((section) => {
    section.classList.remove("active-section");
  });

  onLoadDisplay();

  setTimeout(() => {
    document.getElementById(sectionTab).classList.add("active-section");
    active_section = document.querySelector(".section.active-section");
    if (active_section?.classList.contains("archi_project_info")) {
      showDivs(1);
    }
  }, 1500);
  // if (width > 500) document.getElementById("home").querySelectorAll(".item").forEach((item) => observer.observe(item));


  setTimeout(() => {
    if (menu) menuToggle();
  }, 2400);
}

// ---------------------------------------------------- SLIDES FUNCTION ----------------------------------------------------

var slideIndex;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showSlide(n) {
  var slideshow = active_section.querySelector(".slideshow");
  slideshow.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
  showDivs(n);
}

function showDivs(n) {
  // var i;
  var slides = active_section.querySelectorAll(".slides");
  if (n > (slides.length)) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }
  else {
    slideIndex = n;
  }
  slides.forEach( slide => {
    slide.classList.remove("active");
  })

  slides[slideIndex-1].classList.add("active");
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
  if (width > 500) {
    document.querySelector("#home").querySelectorAll(".item").forEach((item) => observer.observe(item));
    document.querySelector("#architecture_projects").querySelectorAll(".card").forEach((card) => observer.observe(card));
    document.querySelector("#interior_projects").querySelectorAll(".card").forEach((card) => observer.observe(card));
  }
  else {
    // document.querySelector("#home").querySelectorAll(".item").forEach((item) => observer.unobserve(item));
    // document.querySelector("#architecture_projects").querySelectorAll(".card").forEach((card) => observer.unobserve(card));
    // document.querySelector("#interior_projects").querySelectorAll(".card").forEach((card) => observer.unobserve(card));
  }
}


// ---------------------------------------------------- SCROLLING FUNCTION ----------------------------------------------------


function setScrollVar() {
  const htmlElement = document.documentElement;
  document.querySelector(".int_project_info.active-section")?.querySelectorAll(".content-wrapper").forEach((element) => {
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
});

window.addEventListener("resize", () => {
  setWindowDimentions();
  setScrollVar();
  scrollAnimation();
});

window.addEventListener("load", () => {
  setWindowDimentions();
  setScrollVar();
  scrollAnimation();
});