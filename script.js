// ---------------------------------------------------- LOADING PAGE ----------------------------------------------------

var loading_page;

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

// ---------------------------------------------------- DIMENTIONS ----------------------------------------------------

var width;
var height;

function setWindowDimentions() {
  width = window.innerWidth;
  height = window.innerHeight;
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

function toggle_menu_four(val) {
  var menu_items_three = document
    .getElementById("interior-menu")
    .getElementsByClassName("menu-item");
  var menu_items_four = document
    .getElementById("menu-items-four")
    .getElementsByClassName("menu-item");

  if (val == 0) {
    for (let i = 0; i < menu_items_four.length; i++) {
      menu_items_four[i].classList.toggle("active");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-four")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[1]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_three.length; i++) {
        menu_items_three[i].classList.toggle("hide");
      }
    }, 325);
  } else {
    for (let i = 0; i < menu_items_three.length; i++) {
      menu_items_three[i].classList.toggle("hide");
    }

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-three")[1]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      document
        .getElementsByClassName("menu-list-four")[0]
        .classList.toggle("hide");
    }, 300);

    setTimeout(() => {
      for (let i = 0; i < menu_items_four.length; i++) {
        menu_items_four[i].classList.toggle("active");
      }
    }, 325);
  }
}

// ---------------------------------------------------- LAZY LOADING ----------------------------------------------------

const lazyOptions = {
  root: null,
  rootMargin: "100%",
  threshold: 0.1,
};

const lazyIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");
      img.src = src;
      observer.unobserve(img);
    }
  });
};

var lazyObserver = new IntersectionObserver(lazyIntersection, lazyOptions);

// ---------------------------------------------------- SCROLL OBSERVER ANIMATIONS ----------------------------------------------------

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

var interiorObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // observer.unobserve(entry);
      }
    });
  },
  {
    threshold: 0.95,
  }
);

function scrollAnimation() {
  document
    .querySelector("#architecture_projects")
    ?.querySelectorAll(".card")
    .forEach((card) => projectObserver.observe(card));
  document
    .querySelector("#interior_projects")
    ?.querySelectorAll(".card")
    .forEach((card) => projectObserver.observe(card));
  document
    .querySelectorAll(".int_project_info")
    .forEach((project) =>
      project
        .querySelectorAll(".content-wrapper")
        .forEach((content) => interiorObserver.observe(content))
    );
  document
    .querySelectorAll(".lazy")
    .forEach((image) => lazyObserver.observe(image));
}

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
var itemIndex = 0;

function scrollCount(n) {
  if (n == -1) {
    showImage(itemIndex);
    itemIndex += n;
  } else {
    showImage((itemIndex += n));
  }
}

function showImage(n) {
  var slides = active_section.querySelectorAll(".slides");
  // console.log(n);
  if (n < 1) {
    itemIndex = 1;
  } else if (n > slides.length - 1) {
    itemIndex = slides.length - 1;
  } else {
    slides[slides.length - n].classList.toggle("active");
  }
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showSlide(n) {
  showDivs(n);
}

function showPreview(e) {
  var preview = active_section.querySelector(".preview");
  preview.classList.add("active");
  preview.querySelector("img").src = e.target.src;
}

function closePreview() {
  var preview = active_section.querySelector(".preview");
  preview.classList.remove("active");
}

function showDivs(n) {
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

// ---------------------------------------------------- TRANSITION-EFFECT FUNCTION ----------------------------------------------------

function imageToggle(e) {
  e.currentTarget.offsetParent.offsetParent
    .querySelectorAll("img")[1]
    .classList.toggle("deactive");
}

function imageChange(e, n = 1) {
  e.currentTarget.offsetParent.offsetParent
    .querySelectorAll("img")
    .forEach((i) => i.classList.add("deactive"));

  e.currentTarget.offsetParent.offsetParent
    .querySelectorAll("img")
    [n].classList.remove("deactive");
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
  // scrollAnimation();
});

window.addEventListener("load", () => {
  loading_page = document.getElementById("onLoadDisplay");
  sectionNames = document.querySelectorAll("section");

  onLoadDisplay(true);
  scrollToTop();
  setWindowDimentions();
  setScrollVar();
  scrollAnimation();
});

let wheel_count;
window.addEventListener("wheel", (event) => {
  if (active_section.classList.contains("home")) {
    // wheel_count += 1;
    // console.log(event.deltaY);
    clearTimeout(wheel_count);
    wheel_count = setTimeout(() => {
      if (event.deltaY > 0) {
        scrollCount(+1);
      } else if (event.deltaY < 0) {
        scrollCount(-1);
      }
    }, 500);
  }
});

// QR Code: <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fjd-designs.netlify.app%2F&chs=180x180&choe=UTF-8&chld=L|2" alt="qr code"><a href="www.qr-code-generator.com/" border="0" style="cursor:default" rel="nofollow"></a>
