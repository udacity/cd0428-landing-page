/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

let bg = document.getElementById('sky-background');
let balloon1 = document.getElementById('balloons-transparent-1');
let balloon2 = document.getElementById('balloons-transparent-2');
let balloon3 = document.getElementById('balloons-transparent-3');
let balloon4 = document.getElementById('balloons-transparent-1');
let heading = document.getElementById('places-heading');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
document.addEventListener('scroll', function() {
    let value = window.scrollY;
    bg.style.bottom = value * 1 + 'px';
    balloon1.style.left = value * 1 + 'px';
    balloon2.style.left = value * 1 + 'px';
    balloon3.style.top = value * 1 + 'px';
    balloon4.style.top = value * 1 + 'px';
})



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

//paralax functionality of images that appear in the hero section
function scrollTrigger(selector){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el)
    })
}
function addObserver(el){
      // creating a new IntersectionObserver instance
      let observer = new IntersectionObserver((entries, observer) => { // takes a callback function that receives two arguments: the elements list and the observer instance.
        entries.forEach(entry => {
          // `if the element is visible entry.isIntersecting
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
          //removing the observer from the element after adding the active class
          observer.unobserve(entry.target)
        }
      })
    })
    // Adding the observer to the element
    observer.observe(el)
}


// build the nav

const navbarList = document.getElementById('navbar__list');
const sections = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

//looping through the sections array to populate the nav menu
sections.forEach((section, index) => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.classList.add('section-link');
    anchor.textContent = section;
    anchor.href = `#section${index + 1}`;
    listItem.appendChild(anchor);
    navbarList.appendChild(listItem);
})


//add smooth scrolling
navbarList.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});

document.addEventListener(scroll, () => {
  let header = document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0)
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

//calling functions for parallax hero section

scrollTrigger(('.selector'), {
    rootMargin: '-200px'
  })


// Build menu

// Scroll to section on link click

// Set sections as active


