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

//parallax functionality of images that appear in the hero section
function scrollTrigger(){
    let els = document.querySelectorAll('.selector');
    els.forEach((el) => {
      addObserver(el)
    });
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

// Build menu
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

const sectionsHighlight = document.querySelectorAll('section');

//function to check if a section is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
    return(
      rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};



// Add class 'active' to section when near top of viewport
//function to handle active state
const setActiveSection = ()=>{
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target;
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      if(entry.isIntersecting) {
        section.classlist.add('active');
        navLink.classList.add('active');
      } else {
        section.classList.remove('active');
        navLink.classList.remove('active');
      }
    });
  });

  sectionsHighlight.forEach((section) => {
    observer.observe(section);
  });
};

// Set sections as active
//eventListener added to scroll
window.addEventListener('scroll', setActiveSection);


//add smooth scrolling
navbarList.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});

const headerFade = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;
  const opacity = Math.min(scrollPosition / headerHeight, 1);
  header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});

document.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0)
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const backgroundHighlight = document.querySelector('section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sectionHeight = section.offsetHeight;
  const opacity = Math.min(scrollPosition / sectionHeight, 1);
  section.style.border = `1px solid rgb(5, 29, 25)${opacity})`;
  section.style.backgroundColor = `rgb(5, 29, 25)${opacity}`
});

document.addEventListener('scroll', () => {
  let section = document.querySelector('section');
  section.classList.toggle("active",window.scrollY > 0)
  if (window.scrollY > 0) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});

function scrollToHash() {
  const viewSection = document.querySelector(this.getAttribute('href'));
  viewSection.scrollIntoView({behavior: smooth});
}

navbarList.querySelectorAll('a').forEach((anchor) => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    scrollToHash.call(this);
  });
});

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

const anchorLinks = document.querySelectorAll(`a[href^="#"]`);
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.hash);
    target.scrollIntoView({behavior: 'smooth'});
  });
});




/**
 * End Main Functions
 * Begin Events
 *
*/

//calling functions for parallax hero section

scrollTrigger(('.selector'), {
  rootMargin: '-200px'
})

scrollTrigger('.selector');
setActiveSection();






