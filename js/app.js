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
// varible to get the nav by id
const nav=document.getElementById('navbar__list');
// varible contains all sections
const sections=document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuild = () => {
// sections loop
    var n = '';
    
    sections.forEach(section => {

        const secid = section.id;
        const secnav = section.dataset.nav;

        n = n +  `<li><a class="menu__link" href="#${secid}">${secnav}</a></li>`;

    });
  
    nav.innerHTML = n;


};

navBuild();

// Add class 'active' to section when near top of viewport


const specifications = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// delete active class
const deleteActive = (section) => {
    section.classList.remove('your-active-class');
};
// add activee class
const addActiveClass = (j, section) => {
    if(j){
        section.classList.add('your-active-class');

        
   
    };
};

//fuction to make section you in active 

const activateSection = () => {
    sections.forEach(section => {
        const y = specifications(section);

        xv = () => y < 150 && y >= -150;

        deleteActive(section);
        addActiveClass(xv(),section);
    });
};

window.addEventListener('scroll' ,activateSection);






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


