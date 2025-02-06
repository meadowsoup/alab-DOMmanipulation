//! DOM MANIPULATION

//todo: Getting Started 

// select and cache the <main> element in a variable
const mainEl = document.querySelector("main");
// set background color of the main to value inside the CSS property
mainEl.style.backgroundColor = "var(--main-bg)";
// set content to <h1>...
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// add a flex center class
mainEl.classList.add("flex-ctr");


//todo: Creating a Menu Bar & Creating the Submenu

// select and cache the <nav id> element in another variable
const topMenuEl = document.getElementById("top-menu");
// set height to 100 percent
topMenuEl.style.height = "100%";
// set background color of the main to value inside the CSS property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// add a flex around class
topMenuEl.classList.add("flex-around");

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//todo: Adding Menu Buttons & Adding Menu Interaction

// go through each element in the array and link each one with an object
const menuLinks = [ // create <a> aka "anchor" element
     // add href attribute to new element set to the href property of the linked object
     {text: "About", href: "/about"},
     {text: "Catalog", href: "#", subLinks: [
          {text: "All", href: "/catalog/all"}
     ]},
     {text: "Orders", href: "/orders"},
     {text: "Account", href: "/account"}
];

const topMenuEl2 = document.getElementById('top-menu');

menuLinks.forEach(link => { // set new elements content value of the text property of the linked object
     const linkEl = document.createElement('a')
     linkEl.setAttribute('href', link.href)
     linkEl.textContent = link.text
     topMenuEl2.appendChild(linkEl) // append new element to other
});

//! PART 2

//todo: Creating the Submenu

// // select and store new element
// const subMenuEl = document.getElementById("sub-menu");
// // set 100% height
// subMenuEl.style.height = "100%";
// //using CSS custom property to set background color
// subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--sub-menu-bg");
// // add flex class to new variable
// subMenuEl.classList.add("flex-around");
// // setting new variable sub to absolute
// subMenuEl.style.position = "absolute";
// // setting top to 0
// subMenuEl.style.top = "0";


//todo: Adding Menu Interaction

// update array!
// const newMenuLinks = [
//      {text: "about", href: "/about"},
//      {text: "catalog", href: "/catalog"},
//      {text: "orders", href: "/orders"},
//      {text: "account", href: "/account"}
// ];

// select and store menu elements
// const newTopMenu = document.getElementById("top-menu");
// const topMenuLinks = newTopMenu.querySelectorAll("a");

// add event listener
// newTopMenu.addEventListener("click", function(event) {
//      event.preventDefault(); // prevent default link action
//      if (!event.target.matches("a"))
//           return; // ignore click on non-links
//      const clickedLink = event.target; // store clicked link
//      console.log(clickedLink.textContent); // log the clicked link text

//      // remove "active" class from all links
//      menuLinks.forEach(link => link.classList.remove("active"));

//      // toggle active class from links
//      if (!clickedLink.classList.contains("active")) {
//           clickedLink.classList.add("active");
//      }
// });
