


function menuToggle() {
  document.getElementById('menu-toggle').classList.toggle("menu-button-clicked");
  document.getElementById('menu-list').classList.toggle("menu-list-show");
  document.getElementsByClassName('menu-list-one')[0].classList.remove("menu-list-one-hide");
  document.getElementsByClassName('menu-list-two')[0].classList.remove("menu-list-two-hide");
  document.getElementsByClassName('menulist-back-one')[0].classList.remove("menulist-back-one-active");
}

function open_menu_two() {
  document.getElementsByClassName('menu-list-one')[0].classList.toggle("menu-list-one-hide");
  document.getElementsByClassName('menu-list-two')[0].classList.toggle("menu-list-two-hide");
  document.getElementsByClassName('menulist-back-one')[0].classList.toggle("menulist-back-one-active");
}

var sectionNames = document.getElementsByClassName("section");

function opensection(sectionTab){
  for(sectionName of sectionNames){
    sectionName.classList.remove('active-section');
  }
  
  document.getElementById(sectionTab).classList.add("active-section");
  // onLoadDisplay();
  menuToggle()
}


let site = `{
  "home": [
    {
      "image": "../images/project_1/5.jpg",
      "quote": "Chasing dreams and making memories."
    },
    {
      "image": "../images/project_1/6.jpg",
      "quote": "Adventure awaits around every corner."
    },
    {
      "image": "../images/project_2/1.png",
      "quote": "Finding beauty in the simple things."
    },
    {
      "image": "../images/project_2/2.png",
      "quote": "Chasing dreams and making memories."
    },
    {
      "image": "../images/project_4/1.png",
      "quote": "Adventure awaits around every corner."
    },
    {
      "image": "../images/project_4/2.png",
      "quote": "Finding beauty in the simple things."
    },
    {
      "image": "../images/project_3/1.jpg",
      "quote": "Chasing dreams and making memories."
    },
    {
      "image": "../images/project_3/2.jpg",
      "quote": "Adventure awaits around every corner."
    }
  ],
  "projects": [
    {
      "academic": [
        {
          "name": "IIM Karjat",
          "caption": "Indian Institute of Management Studies in the state of Maharashtra",
          "description": "<div class='design-philosophy'><div class='image-1'><img src = '../images/project_1/10.png'></div><div class = 'description'><div class= 'heading'>Design Philosophy</div><p>The aim is to protect, manage, conserve and eventually restore the Dhanauri wetlands U.P. The purpose in achieving these points is through having a research centre and generating awareness among the masses about the importance of wetlands and its vast biodiversity. Scientific ways to be implemented to rejuvenate the wetlands back to its original state over a period. Finally showcase and elaborate various experience to attract tourist with the help of interactive design spaces.</p></div></div><div class='design-objectives'><div class = 'image-2'><img src = '../images/project_1/8.png'></div><div class = 'description'><div class='heading'>Design Objectives</div><p>To study the rich flora and fauna of the region. To implement ways to preserve/conserve the rich ecology of wetlands. To implement scientific interventions to restore the wetlands back to its original glory. Create awareness among the masses through eco-tourism, eventually generate socio-economic values over the area. To create interactive design spaces keeping wetlands in background.</p></div></div><div class = 'floor-plan'><div class = 'ground'><div class = 'image-1'><img src = '../images/project_1/11.png'></div><div class = 'heading'>Ground Floor Plan</div></div><div class = 'first'></div></div><div class='site-plan'><div class = 'image-3'><img src = '../images/project_1/9.png'></div><div class = 'description'>Site Plan</div></div>",
          "images": [
            {
              "image": "../images/project_3/1.jpg"
            },
            {
              "image": "../images/project_3/2.jpg"
            },
            {
              "image": "../images/project_3/3.jpg"
            }
          ]
        },
        {
          "name": "Nesting Neighbors",
          "caption": "A Mixed-use Mass Housing Complex in the suburbs of Mumbai",
          "description": "<div class='design-philosophy'><div class='image-1'><img src = '../images/project_1/10.png'></div><div class = 'description'><div class= 'heading'>Design Philosophy</div><p>The aim is to protect, manage, conserve and eventually restore the Dhanauri wetlands U.P. The purpose in achieving these points is through having a research centre and generating awareness among the masses about the importance of wetlands and its vast biodiversity. Scientific ways to be implemented to rejuvenate the wetlands back to its original state over a period. Finally showcase and elaborate various experience to attract tourist with the help of interactive design spaces.</p></div></div><div class='design-objectives'><div class = 'image-2'><img src = '../images/project_1/8.png'></div><div class = 'description'><div class='heading'>Design Objectives</div><p>To study the rich flora and fauna of the region. To implement ways to preserve/conserve the rich ecology of wetlands. To implement scientific interventions to restore the wetlands back to its original glory. Create awareness among the masses through eco-tourism, eventually generate socio-economic values over the area. To create interactive design spaces keeping wetlands in background.</p></div></div><div class = 'floor-plan'><div class = 'ground'><div class = 'image-1'><img src = '../images/project_1/11.png'></div><div class = 'heading'>Ground Floor Plan</div></div><div class = 'first'></div></div><div class='site-plan'><div class = 'image-3'><img src = '../images/project_1/9.png'></div><div class = 'description'>Site Plan</div></div>",
          "images": [
            {
              "image": "../images/project_2/1.png"
            },
            {
              "image": "../images/project_2/2.png"
            },
            {
              "image": "../images/project_2/3.png"
            },
            {
              "image": "../images/project_2/4.png"
            },
            {
              "image": "../images/project_2/5.png"
            },
            {
              "image": "../images/project_2/6.png"
            }
          ]
        },
        {
          "name": "Maritime Museum Views",
          "caption": "Landscape Design in an Eco-Resort in the district of Jodhpur",
          "description": "<div class='design-philosophy'><div class='image-1'><img src = '../images/project_1/10.png'></div><div class = 'description'><div class= 'heading'>Design Philosophy</div><p>The aim is to protect, manage, conserve and eventually restore the Dhanauri wetlands U.P. The purpose in achieving these points is through having a research centre and generating awareness among the masses about the importance of wetlands and its vast biodiversity. Scientific ways to be implemented to rejuvenate the wetlands back to its original state over a period. Finally showcase and elaborate various experience to attract tourist with the help of interactive design spaces.</p></div></div><div class='design-objectives'><div class = 'image-2'><img src = '../images/project_1/8.png'></div><div class = 'description'><div class='heading'>Design Objectives</div><p>To study the rich flora and fauna of the region. To implement ways to preserve/conserve the rich ecology of wetlands. To implement scientific interventions to restore the wetlands back to its original glory. Create awareness among the masses through eco-tourism, eventually generate socio-economic values over the area. To create interactive design spaces keeping wetlands in background.</p></div></div><div class = 'floor-plan'><div class = 'ground'><div class = 'image-1'><img src = '../images/project_1/11.png'></div><div class = 'heading'>Ground Floor Plan</div></div><div class = 'first'></div></div><div class='site-plan'><div class = 'image-3'><img src = '../images/project_1/9.png'></div><div class = 'description'>Site Plan</div></div>",
          "images": [
            {
              "image": "../images/project_4/1.png"
            },
            {
              "image": "../images/project_4/2.png"
            },
            {
              "image": "../images/project_4/3.png"
            },
            {
              "image": "../images/project_4/4.png"
            }
          ]
        }
      ],
      "professional": [
        {
          "name": "Dhanuari Wetlands: Conservation and Restoration of its Multifarious Ecology",
          "description": "<div class='design-philosophy'><div class='image-1'><img src = '../images/project_1/10.png'></div><div class = 'description'><div class= 'heading'>Design Philosophy</div><p>The aim is to protect, manage, conserve and eventually restore the Dhanauri wetlands U.P. The purpose in achieving these points is through having a research centre and generating awareness among the masses about the importance of wetlands and its vast biodiversity. Scientific ways to be implemented to rejuvenate the wetlands back to its original state over a period. Finally showcase and elaborate various experience to attract tourist with the help of interactive design spaces.</p></div></div><div class='design-objectives'><div class = 'image-2'><img src = '../images/project_1/8.png'></div><div class = 'description'><div class='heading'>Design Objectives</div><p>To study the rich flora and fauna of the region. To implement ways to preserve/conserve the rich ecology of wetlands. To implement scientific interventions to restore the wetlands back to its original glory. Create awareness among the masses through eco-tourism, eventually generate socio-economic values over the area. To create interactive design spaces keeping wetlands in background.</p></div></div><div class = 'floor-plan'><div class = 'ground'><div class = 'image-1'><img src = '../images/project_1/11.png'></div><div class = 'heading'>Ground Floor Plan</div></div><div class = 'first'></div></div><div class='site-plan'><div class = 'image-3'><img src = '../images/project_1/9.png'></div><div class = 'description'>Site Plan</div></div>",
          "images": [
            {
              "image": "../images/project_1/1.png"
            },
            {
              "image": "../images/project_1/2.png"
            },
            {
              "image": "../images/project_1/3.png"
            },
            {
              "image": "../images/project_1/4.jpg"
            },
            {
              "image": "../images/project_1/5.jpg"
            },
            {
              "image": "../images/project_1/6.jpg"
            },
            {
              "image": "../images/project_1/7.png"
            }
          ]
        }
      ]
    }
  ],
  "contact": ""
}`;

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
var gallery_slideshow = gallery_container.querySelector(".slideshow");

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
  gallery_slideshow.appendChild(image_slideshow);
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
  
  if (elements.length > 0) {
    for (i = elements.length - 1; i > -1; i--) {
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
  
  removeMultipleElements(gallery_slideshow, "image_slideshow")
  removeSingleElement(gallery_container, "project_title")
  removeSingleElement(gallery_container, "project_detail")
  removeSingleElement(gallery_container, "project_gallery")

  var gallery_images = document.createElement("div");
  gallery_images.className = "project_gallery";

  gallery_title = document.createElement("div");
  gallery_title.className = 'gallery_title';
  gallery_title.innerHTML = "Gallery";

  for(var i = 0; i < site.projects[0][category][value].images.length; i++){
    createGallerySlideElement(gallery_images, site.projects[0][category][value].images[i].image);
  }

  createGalleryTextElement(site.projects[0][category][value].name, site.projects[0][category][value].description);
  
  gallery_container.appendChild(gallery_title);
  gallery_container.appendChild(gallery_images);  

  showDivs(slideIndex = 1);
}

function showProject(category, value){
  for(sectionName of sectionNames){
    sectionName.classList.remove('active-section');
  }
  createGalleryElements(category, value);
  document.getElementById("gallery").classList.add("active-section");
}

function onLoadDisplay() {
  var logo_img = document.getElementById('logo'); 
  var logo_title = document.getElementsByClassName('logo_title');  
  var loading_page = document.getElementById("onLoadDisplay");
  
  loading_page.classList.remove("onLoadDisplay_deactive");
  loading_page.classList.remove("onLoadDisplay_active");
  logo_img.classList.remove("logo_image_active");
  logo_title[0].classList.remove("logo_title_active");
  
  setTimeout(() => {
    logo_img.classList.add("logo_image_active");
    // for (i=0; i < logo_title.length; i++) {
    logo_title[0].classList.add("logo_title_active");
    // }
  }, 2500); 

  setTimeout(() => {
    loading_page.classList.add("onLoadDisplay_active");
  }, 3000); 

  setTimeout(() => {
    loading_page.classList.add("onLoadDisplay_deactive");
  }, 4000); 
}