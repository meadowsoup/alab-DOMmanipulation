//! PART 1

//todo: Getting Started

// select and cache the <main> element in a variable
const mainEl = document.querySelector("main");
// set background color of the main to value inside the CSS property
mainEl.style.backgroundColor = "var(--main-bg)";
// set content to <h1>...
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// add a flex center class
mainEl.classList.add("flex-ctr");


//todo: Creating a Menu Bar

// select and cache the <nav id> element in another variable
const topMenuEl = document.getElementById("top-menu");
// set height to 100 percent
topMenuEl.style.height = "100%";
// set background color of the main to value inside the CSS property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// add a flex around class
topMenuEl.classList.add("flex-around");


//todo: Adding Menu Buttons

// go through each element in the array and link each one with an object
const menuLinks = [ // create <a> aka "anchor" element
     // add href attribute to new element set to the href property of the linked object
     {text: "Home", href: "/"},
     {text: "About", href: "/about"},
     {text: "Services", href: "/services"},
     {text: "Contact", href: "/contact"}
];

const topMenuEl2 = document.getElementById('top-menu');

menuLinks.forEach(link => { // set new elements content value of the text property of the linked object
     const linkEl = document.createElement('a')
     linkEl.setAttribute('href', link.href)
     linkEl.textContent = link.text
     topMenuEl2.appendChild(linkEl) // append new element to other
});

//! PART 2

