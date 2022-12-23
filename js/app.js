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
// varible to get the ul by id
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
function navBuild() {
// sections loop
   // let makenav= '';
    
    let j =0 ;
    while(j<sections.length){
        // varible stores id of section
        let secid = sections[j].id;
        // varible stores data set of section
        let secnav = sections[j].dataset.nav;
        //varible that target the ul tag 
        const mainList = document.querySelector('#navbar__list');
         // the html code i want to add 
        const htmlTextToAdd = (`<li><a class="menu__link" href="#${secid}">${secnav}</a></li>`);
        //adding to html page 
       mainList.insertAdjacentHTML('beforeend', htmlTextToAdd); 
       // the html code i want to add 
       // makenav= makenav +  `<li><a class="menu__link" href="#${secid}">${secnav}</a></li>`;

         j++
    }
    //nav.innerHTML = makenav;


}
//call function
navBuild();
// Add class 'active' to section when near top of viewport

function active(){
    document.addEventListener('scroll',function(){
        let i=0
        while(i<sections.length){
            //boundry of top
            
            const boundT = sections[i].getBoundingClientRect().top;
            // varible contains all lists
            const lists = document.querySelectorAll('li');
    // where you are
            if(boundT >-100&&boundT<300){
                // adding classes
                sections[i].classList.add("your-active-class")
               lists[i].classList.add("focusnav")
            }else {
                //removing classes
                sections[i].classList.remove("class","your-active-class")
                lists[i].classList.remove("focusnav")
            }
            i++
        }
    })
    }
    // call function
    active();


    function  scrolling(){
        for (let i=0;i<sections.length;i++){
    
                let myList= document.querySelectorAll('li')
                //store number of index of current list
                let myCurrentList =myList [i]; 
    
                
      // on click target section from list go to it with smoth way
                myCurrentList.addEventListener('click',function toSection(){
                    console.log("test event listener");
                    sections[i].scrollIntoView({behavior: "smooth", block: "start"})
                })
        };
    
    };
    //call function
    scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


