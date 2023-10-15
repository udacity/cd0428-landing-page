//declare global variables.
const ul = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
const sectionCollection = document.getElementsByTagName('section');
const sections = Array.from(sectionCollection);
const navList = [
    'section 1',
    'section 2',
    'section 3',
    'section 4',
  ];

// assign nav list items.
function creatNavList() {
    let counter = 0;
    for (let item of navList) {
      const li = document.createElement('li');
      li.innerHTML = item;
      li.classList.add('list');
      li.setAttribute('id', counter++);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    navigate();
}

// make section active relative to the viewport
function makeActice() {
    let counter = 0;
    for(const section of sectionCollection){
        const li = document.getElementById(counter++);
        const box = section.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){
            li.classList.add('active');
        }else{
            li.classList.remove('active');
        }
    }
}

// navigate to selected section.
function navigate() {
    ul.addEventListener('click', function (event) {
        const name = event.target.nodeName;
        const id = event.target.id;
        if(name === 'LI') {
            sections[id].scrollIntoView({behavior: 'smooth'});
        }
    });
}
// main function to run the project.
function main() {
    creatNavList();
    document.addEventListener('scroll', function() {
        makeActice();
    });
}

main();
