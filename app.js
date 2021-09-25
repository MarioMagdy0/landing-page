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
 * Define Global Variables
 * 
*/
// Build menu 
// build the nav
const department = Array.from(document.querySelectorAll('section'));
const overAll = document.getElementById('navbar__list');
let sumOflistDepartment = department.lenght ;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createSectionsList(){
    for(section of department){
        departmentName = section.getAttribute('data-nav');
        departmentLink = section.getAttribute('id');
        listDepartment = document.createElement('li');
        listDepartment.innerHTML = "<a class='menu__link' href=#"+departmentLink+">"+departmentName+"</a>";
        overAll.appendChild(listDepartment);
    }
}
// Add class 'active' to section when near top of viewport
function singleInViewPort (element) {
    let sectionLocation= element.getBoundingClientRect();
    return(sectionLocation.top >= 0 );
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Scroll to section on link click
// Set sections as active
function thisActiveOne(){
    for (section of department){
        if (singleInViewPort(section)){
            if(!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        } else { section.classList.remove('your-active-section');
    }
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/
createSectionsList();
// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', thisActiveOne);