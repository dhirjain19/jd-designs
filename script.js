function onLoadDisplay() {
  document.getElementById('logo').classList.add("logo_image_active");
  var logo_title = document.getElementsByClassName('logo_title');
  for (i=0; i < logo_title.length; i++) {
    logo_title[i].classList.add("logo_title_active");
  }
  
  setTimeout(() => {
    document.getElementById('onLoadDisplay').classList.add("onLoadDisplay_active");
  }, 500); 

  setTimeout(() => {
    document.getElementById('onLoadDisplay').classList.add("onLoadDisplay_deactive");
  }, 1500); 
}


function menuToggle() {
  document.getElementById('menu-toggle').classList.toggle("menu-button-clicked")
  document.getElementById('menu-list').classList.toggle("menu-list-show")
}

function opensubmenu() {
  // document.getElementById('menu-toggle').classList.toggle("menu-button-clicked")
  document.getElementById('menu-sublist').classList.add("menu-sublist-show")
}

function closesubmenu() {
  // document.getElementById('menu-toggle').classList.toggle("menu-button-clicked")
  document.getElementById('menu-sublist').classList.remove("menu-sublist-show")
}


var sectionNames = document.getElementsByClassName("section");

function opensection(sectionTab){

  for(sectionName of sectionNames){
    sectionName.classList.remove('active-section');
  }
  
  document.getElementById(sectionTab).classList.add("active-section");
  menuToggle()
}

function opensection(sectionTab){

  for(sectionName of sectionNames){
    sectionName.classList.remove('active-section');
  }
  
  document.getElementById(sectionTab).classList.add("active-section");
  menuToggle()

}




let site = `{
  "home": [
    {
      "image": "../images/project_1/1.png",
      "quote": "Chasing dreams and making memories."
    },
    {
      "image": "../images/project_1/2.png",
      "quote": "Adventure awaits around every corner."
    },
    {
      "image": "../images/project_1/3.png",
      "quote": "Finding beauty in the simple things."
    }
  ],
  "projects": [
    {
      "academic": [
        {
          "name": "IIM Karjat",
          "caption": "Indian Institute of Management Studies in the state of Maharashtra",
          "description": "",
          "images": [
            {
              "image": "../images/project_3/1.jpg"
            },
            {
              "image": "../images/project_3/2.jpg"
            },
            {
              "image": "../images/project_3/3.jpg"
            },
            {
              "image": "../images/project_3/4.jpg"
            },
            {
              "image": "../images/project_3/5.jpg"
            },
            {
              "image": "../images/project_3/6.jpg"
            },
            {
              "image": "../images/project_3/7.jpg"
            },
            {
              "image": "../images/project_3/8.jpg"
            },
            {
              "image": "../images/project_3/9.jpg"
            },
            {
              "image": "../images/project_3/10.jpg"
            }
          ]
        },
        {
          "name": "Nesting Neighbors",
          "caption": "A Mixed-use Mass Housing Complex in the suburbs of Mumbai",
          "description": "",
          "images": [
            {
              "image": "../images/project_3/1.jpg"
            },
            {
              "image": "../images/project_3/2.jpg"
            },
            {
              "image": "../images/project_3/3.jpg"
            },
            {
              "image": "../images/project_3/4.jpg"
            },
            {
              "image": "../images/project_3/5.jpg"
            },
            {
              "image": "../images/project_3/6.jpg"
            },
            {
              "image": "../images/project_3/7.jpg"
            },
            {
              "image": "../images/project_3/8.jpg"
            },
            {
              "image": "../images/project_3/9.jpg"
            },
            {
              "image": "../images/project_3/10.jpg"
            }
          ]
        },
        {
          "name": "Eco-Resort",
          "caption": "Landscape Design in an Eco-Resort in the district of Jodhpur",
          "description": "",
          "images": [
            {
              "image": "../images/project_3/1.jpg"
            },
            {
              "image": "../images/project_3/2.jpg"
            },
            {
              "image": "../images/project_3/3.jpg"
            },
            {
              "image": "../images/project_3/4.jpg"
            },
            {
              "image": "../images/project_3/5.jpg"
            },
            {
              "image": "../images/project_3/6.jpg"
            },
            {
              "image": "../images/project_3/7.jpg"
            },
            {
              "image": "../images/project_3/8.jpg"
            },
            {
              "image": "../images/project_3/9.jpg"
            },
            {
              "image": "../images/project_3/10.jpg"
            }
          ]
        }
      ],
      "professional": [
        {
          "name": "Dhanuari Wetlands Thesis",
          "caption": "Conservation and Restoration of its Multifarious Ecology",
          "description": "",
          "images": [
            {
              "image": "../images/project_2/1.jpg"
            },
            {
              "image": "../images/project_2/2.jpg"
            },
            {
              "image": "../images/project_2/3.jpg"
            },
            {
              "image": "../images/project_2/4.jpg"
            },
            {
              "image": "../images/project_2/5.jpg"
            },
            {
              "image": "../images/project_2/6.jpg"
            },
            {
              "image": "../images/project_2/7.jpg"
            },
            {
              "image": "../images/project_2/8.jpg"
            },
            {
              "image": "../images/project_2/9.jpg"
            },
            {
              "image": "../images/project_2/10.jpg"
            }
          ]
        }
      ]
    }
  ],
  "contact": ""
}`

site = JSON.parse(site)

var home_element = document.querySelector(".home");
var home_container = home_element.querySelector(".container");

function createHomeSlideElements(image, quote){
  parallax_images = document.createElement("div");
  parallax_images.className = 'parallax_images';
  parallax_images.style.backgroundImage = `url(${image})`;
  caption = document.createElement("div");
  caption.className = 'caption';
  caption.innerHTML = quote;
  parallax_images.appendChild(caption);
  home_container.appendChild(parallax_images);
}

function createHomeElements(){
  for(var i = 0; i < site.home.length; i++){
    createHomeSlideElements(site.home[i].image, site.home[i].quote)
  }
}

createHomeElements();

var gallery_element = document.querySelector(".gallery");
var gallery_container = gallery_element.querySelector(".container");

function addImageElement(source){
  image = document.createElement("img");
  image.src = source;
  return image;
}

function createGallerySlideElement(gallery_images, source){
  image_slideshow = document.createElement("div");
  image_slideshow.className = 'image_slideshow';

  project_images = document.createElement("div");
  project_images.className = 'project_images';
  
  image_slideshow.appendChild(addImageElement(source));
  project_images.appendChild(addImageElement(source));

  gallery_images.appendChild(project_images);
  gallery_container.appendChild(image_slideshow);
}

function createGalleryTextElement(title, detail){
  project_title = document.createElement("div");
  project_title.className = 'project_title';

  project_detail = document.createElement("div");
  project_detail.className = 'project_detail';

  project_title.innerHTML = title;
  project_detail.innerHTML = detail;

  gallery_container.appendChild(project_title);
  gallery_container.appendChild(project_detail);
}

function removeSingleElement(parentClass, elementId) {
  var element = parentClass.getElementsByClassName(elementId);

  if (element.length > 0) {
    element[0].remove();
  }
}

function removeMultipleElements(parentClass, elementId) {
  var elements = parentClass.getElementsByClassName(elementId);

  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
  }
}

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("image_slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  // setTimeout(() => {showDivs(slideIndex += 1)}, 2000);
}

function createGalleryElements(category, value){
  
  removeMultipleElements(gallery_container, "image_slideshow")
  removeSingleElement(gallery_container, "project_title")
  removeSingleElement(gallery_container, "project_detail")
  removeSingleElement(gallery_container, "project_gallery")

  var gallery_images = document.createElement("div");
  gallery_images.className = "project_gallery";

  for(var i = 0; i < site.projects[0][category][value].images.length; i++){
    createGallerySlideElement(gallery_images, site.projects[0][category][value].images[i].image);
  }

  createGalleryTextElement(site.projects[0][category][value].name, site.projects[0][category][value].description);
  
  gallery_container.appendChild(gallery_images);

  showDivs(slideIndex);
}

function showProject(category, value){
  for(sectionName of sectionNames){
    sectionName.classList.remove('active-section');
  }
  createGalleryElements(category, value);
  document.getElementById("gallery").classList.add("active-section");
}