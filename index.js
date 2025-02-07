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

// select and store new element
const subMenuEl = document.getElementById("sub-menu");
// set 100% height
subMenuEl.style.height = "100%";
//using CSS custom property to set background color
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// add flex class to new variable
subMenuEl.classList.add("flex-around");
// setting new variable sub to absolute
subMenuEl.style.position = "absolute";
// setting top to 0
subMenuEl.style.top = "0";

//todo: Adding Menu Buttons & Adding Menu Interaction

// go through each element in the array and link each one with an object
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const topMenuLinks = document.getElementById("top-menu");

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener("click", function (event) {
  // Prevent the default behavior
  event.preventDefault();

  // Return immediately if the clicked element is not an <a>
  if (event.target.tagName !== "a") return;

  // Remove active class from all menu links
  topMenuLinks.forEach((menuLinks) => menuLinks.classList.remove("active"));

  // toggle active class on the clicked link
  event.target.classList.toggle("active");

  // show or hide sub menu based on whether it's sub linked
  if (linkObj && linkObj.subLinks) {
     subMenuEl.style.top = "100%"
  } else {
     subMenuEl.style.top = "0"
  }

  // Log the content of the <a> element
  console.log(event.target.textContent);
});

// attach click event to sub
subMenuEl.addEventListener("click", function(event) {
     // prevent default behavior
     event.preventDefault();

     // return if clicked element is not an <a>
     if (event.target.tagName !== "a")
          return;
     // log content
     console.log(event.target.textContent);

     //hide sub menu
     subMenuEl.style.top = "0";

     // remove active class from menu links
     topMenuLinks.forEach(menuLinks => menuLinks.classList.remove("active"));

     // update main content to sub item
     mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
