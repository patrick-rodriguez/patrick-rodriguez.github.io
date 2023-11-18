const sections = document.querySelectorAll('.section'); // Select all elements with the class "section"
const sectBtns = document.querySelectorAll('.controls'); // Select elements with the class "controls" (encapsulating individual buttons)
const sectBtn = document.querySelectorAll('.control'); // Select individual buttons
const allSections = document.querySelector('.main-content'); // Select the entire body of the HTML page

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // Remove the active-btn class from all buttons
            sectBtn.forEach(btn => btn.classList.remove('active-btn'));
            
            // Add the active-btn class to the clicked button
            this.classList.add('active-btn');
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        if (id) {
            // Remove the active class from all sectBtns
            sectBtns.forEach((btn) => {btn.classList.remove('active')});

            // Remove the active class from all sections
            sections.forEach((section) => {section.classList.remove('active')});

            // Add the active class to the section with the corresponding id
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

pageTransitions();
