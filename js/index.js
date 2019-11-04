const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add nav links
const navLinks = document.getElementsByTagName('a');
navLinks[0].textContent = (siteContent["nav"]["nav-item-1"]);
navLinks[1].textContent = (siteContent["nav"]["nav-item-2"]);
navLinks[2].textContent = (siteContent["nav"]["nav-item-3"]);
navLinks[3].textContent = (siteContent["nav"]["nav-item-4"]);
navLinks[4].textContent = (siteContent["nav"]["nav-item-5"]);
navLinks[5].textContent = (siteContent["nav"]["nav-item-6"]);

//set nav to green using Array.from
Array.from(navLinks).forEach(element => {
  element.style.color = "green";
});

//add event listener to nav elements
Array.from(navLinks).forEach(element => {
  element.addEventListener("click", () => {
    element.style.color = "blue";
    element.style.backgroundColor = "yellow";
  })
});

//add new items to nav
const blogItem = document.createElement("a");
const photoItem = document.createElement("a");

blogItem.textContent = ("Blog");
blogItem.style.color = "green";
photoItem.textContent = ("Photos");
photoItem.style.color = "green";

const navTag = document.querySelector("nav");
navTag.prepend(blogItem);
navTag.appendChild(photoItem);

//add cta h1
const h1Tag = document.getElementsByTagName("h1");
h1Tag[0].textContent = (siteContent["cta"]["h1"]);
h1Tag[0].style.color = "red";
h1Tag[0].style.backgroundColor = "yellow";

//add cta button
const buttonTag = document.getElementsByTagName("button");
buttonTag[0].textContent = (siteContent["cta"]["button"]);

//add event listener to button
buttonTag[0].addEventListener("dblclick", () => {
  buttonTag[0].style.color = "red";
  buttonTag[0].style.backgroundColor = "yellow";  
});

//add cta image
const codeImg = document.getElementById("cta-img");
codeImg.src = (siteContent["cta"]["img-src"]);

//add main-content h4
const mainH4 = document.getElementsByTagName("h4");
mainH4[0].textContent = (siteContent["main-content"]["features-h4"]);
mainH4[1].textContent = (siteContent["main-content"]["about-h4"]);
mainH4[2].textContent = (siteContent["main-content"]["services-h4"]);
mainH4[3].textContent = (siteContent["main-content"]["product-h4"]);
mainH4[4].textContent = (siteContent["main-content"]["vision-h4"]);

//add main-content paragraph
const mainParagraph = document.getElementsByTagName("p");
mainParagraph[0].textContent = (siteContent["main-content"]["features-content"]);
mainParagraph[1].textContent = (siteContent["main-content"]["about-content"]);
mainParagraph[2].textContent = (siteContent["main-content"]["services-content"]);
mainParagraph[3].textContent = (siteContent["main-content"]["product-content"]);
mainParagraph[4].textContent = (siteContent["main-content"]["vision-content"]);

//add middle code image
const middleImage = document.getElementById("middle-img");
middleImage.src = (siteContent["main-content"]["middle-img-src"]);

//add contact h4
const contactH4 = document.getElementsByTagName("h4");
contactH4[5].textContent = (siteContent["contact"]["contact-h4"]);

//add contact paragraphs
const contactInfo = document.getElementsByTagName("p");
contactInfo[5].textContent = (siteContent["contact"]["address"]);
contactInfo[6].textContent = (siteContent["contact"]["phone"]);
contactInfo[7].textContent = (siteContent["contact"]["email"]);

//add footer
const footerInfo = document.getElementsByTagName("p");
footerInfo[8].textContent = (siteContent["footer"]["copyright"]);
