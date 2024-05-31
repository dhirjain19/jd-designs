let site = `{
  "projects": [
    {
      "interior": [
        {
          "content": "<div class='title_image'><img src='./images/project_5/2.png'></div><div class='title'>Cafe</div><div class='images'><div class='image-section'><div class='image'><img src='./images/project_5/1.png'></div><div class='description'>Image 1</div></div><div class='image-section'><div class='image'><img src='./images/project_5/3.png'></div><div class='description'>Entrance</div></div><div class='image-section'><div class='image'><img src='./images/project_5/4.png'></div><div class='description'>Image 3</div></div><div class='image-section'><div class='image'><img src='./images/project_5/5.png'></div><div class='description'>Image 4</div></div><div class='image-section'><div class='image'><img src='./images/project_5/6.png'></div><div class='description'>Image 5</div></div><div class='image-section'><div class='image'><img src='./images/project_5/7.png'></div><div class='description'>Image 6</div></div><div class='image-section'><div class='image'><img src='./images/project_5/8.png'></div><div class='description'>Image 7</div></div><div class='image-section'><div class='image'><img src='./images/project_5/9.png'></div><div class='description'>Image 8</div></div><div class='image-section'><div class='image'><img src='./images/project_5/10.png'></div><div class='description'>Image 9</div></div><div class='image-section'><div class='image'><img src='./images/project_5/11.png'></div><div class='description'>Image 10</div></div><div class='image-section'><div class='image'><img src='./images/project_5/12.png'></div><div class='description'>Image 11</div></div><div class='image-section'><div class='image'><img src='./images/project_5/13.png'></div><div class='description'>Image 12</div></div><div class='image-section'><div class='image'><img src='./images/project_5/14.png'></div><div class='description'>Image 13</div></div><div class='image-section'><div class='image'><img src='./images/project_5/15.png'></div><div class='description'>Image 14</div></div><div class='image-section'><div class='image'><img src='./images/project_5/16.png'></div><div class='description'>Image 15</div></div></div>"
        },
        {
          "content": "<div class='title_image'><img src='./images/project_6/1.jpg'></div><div class='title'>House</div><div class='images'><div class='image-section'><div class='image'><img src='./images/project_6/2.jpg'></div><div class='description'>Image 1</div></div><div class='image-section'><div class='image'><img src='./images/project_6/3.jpg'></div><div class='description'>Image 2</div></div><div class='image-section'><div class='image'><img src='./images/project_6/10.jpg'></div><div class='description'>Image 3</div></div><div class='image-section'><div class='image'><img src='./images/project_6/11.jpg'></div><div class='description'>Image 4</div></div><div class='image-section'><div class='image'><img src='./images/project_6/6.jpg'></div><div class='description'>Image 5</div></div><div class='image-section'><div class='image'><img src='./images/project_6/7.jpg'></div><div class='description'>Image 6</div></div><div class='image-section'><div class='image'><img src='./images/project_6/8.jpg'></div><div class='description'>Image 7</div></div><div class='image-section'><div class='image'><img src='./images/project_6/9.jpg'></div><div class='description'>Image 8</div></div></div>"
        }        
      ]
    }
  ]
}`;

site = JSON.parse(site);

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

var sectionNames = document.getElementsByClassName("section");

function opensection(sectionTab, menu = true) {
  for (sectionName of sectionNames) {
    sectionName.classList.remove("active-section");
  }

  onLoadDisplay();

  // document.getElementById(sectionTab).classList.add("active-section");
  setTimeout(() => {
    document.getElementById(sectionTab).classList.add("active-section");
    active_section = document.querySelector(".section.active-section");
    if (active_section?.classList.contains('project_info')) showDivs(1);
  }, 1500);

  if (sectionTab == "architecture_projects") {
    document
      .getElementById("architecture_projects")
      .querySelectorAll(".card")
      .forEach((element) => observer.observe(element));
  }
  if (sectionTab == "interior_projects") {
    document
      .getElementById("interior_projects")
      .querySelectorAll(".card")
      .forEach((element) => observer.observe(element));
  }
  setTimeout(() => {
    if (menu) menuToggle();
  }, 2400);
}

// var gallery_element = document.querySelector(".gallery");
// var gallery_container = gallery_element.querySelector(".container");
// var gallery_slideshow = gallery_container.querySelector(".slideshow");

// function addImageElement(source) {
//   image = document.createElement("img");
//   image.src = source;
//   return image;
// }

// function createGallerySlideElement(gallery_images, source) {
//   image_slideshow = document.createElement("div");
//   image_slideshow.className = "image_slideshow";

//   project_images = document.createElement("div");
//   project_images.className = "project_images";

//   image_slideshow.appendChild(addImageElement(source));
//   project_images.appendChild(addImageElement(source));

//   gallery_images.appendChild(project_images);
//   gallery_slideshow.appendChild(image_slideshow);
// }

// function createGalleryTextElement(title, detail) {
//   project_title = document.createElement("div");
//   project_title.className = "project_title";

//   project_detail = document.createElement("div");
//   project_detail.className = "project_detail";

//   project_title.innerHTML = title;
//   project_detail.innerHTML = detail;

//   gallery_container.appendChild(project_title);
//   gallery_container.appendChild(project_detail);
// }

// function removeSingleElement(parentClass, elementId) {
//   var element = parentClass.getElementsByClassName(elementId);

//   if (element.length > 0) {
//     element[0].remove();
//   }
// }

// function removeMultipleElements(parentClass, elementId) {
//   var elements = parentClass.getElementsByClassName(elementId);

//   if (elements.length > 0) {
//     for (i = elements.length - 1; i > -1; i--) {
//       elements[i].remove();
//     }
//   }
// }
// var active_section = document.querySelector(".section.active-section");

var slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = active_section.getElementsByClassName("slides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


var interior_gallery_element = document.querySelector(".interior_gallery");
var interior_gallery_container =
  interior_gallery_element.querySelector(".container");

function showInterior(category, value, menu = false) {
  for (sectionName of sectionNames) {
    sectionName.classList.remove("active-section");
  }

  if (interior_gallery_container.length > 0) {
    interior_gallery_container.remove();
  }

  interior_gallery_container.innerHTML =
    site.projects[0][category][value].content;

  setTimeout(() => {
    if (menu) menuToggle();
  }, 2400);

  setTimeout(() => {
    document.getElementById("interior_gallery").classList.add("active-section");
  }, 2000);

  onLoadDisplay();
}

function onLoadDisplay(reload = false) {
  var loading_page = document.getElementById("onLoadDisplay");

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
      document.getElementById("home").classList.add("active-section");
      active_section = document.querySelector(".section.active-section");
    }, 2000);
  }
}

const cards = document
  .getElementById("architecture_projects")
  .querySelectorAll(".card");

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

document
  .querySelector("#home")
  .querySelectorAll(".item")
  .forEach((item) => observer.observe(item));

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  // console.log((htmlElement.scrollTop / htmlElement.clientHeight) * 100)
  // document.querySelector('#home').querySelectorAll('.item').forEach(element => {
  //   const percentOfScreenHeightScrolled = (htmlElement.scrollTop - element.offsetTop) / element.offsetHeight
  //   // element.style.setProperty("--scroll", Math.max( -96, Math.min( percentOfScreenHeightScrolled * 100, 92 ) ) )
  //   element.style.setProperty("--scroll", Math.min( percentOfScreenHeightScrolled * 100, 102 ) )
  // })

  document?.querySelectorAll(".image-section").forEach((element) => {
    const percentOfScreenHeightScrolled =
      (htmlElement.scrollTop - element.offsetTop) / htmlElement.clientHeight;
    element.style.setProperty(
      "--scroll",
      Math.max(-100, Math.min(percentOfScreenHeightScrolled * 100, 0))
    );
  });
}

setScrollVar();
