
const accordionBtns = document.querySelectorAll('.accordion-container__btn');
let focusedIndex = -1;


function setInitialFocus() {
    if (accordionBtns.length > 0) {
        accordionBtns[0].focus();
        focusedIndex = 0;
    }
}

function toggleAccordion(event) {
    const isActive = this.classList.toggle('active');
    const accordionDescription = this.nextElementSibling;
    const plusIcon = this.querySelector('.accordion-container-icons__plus');
    const minusIcon = this.querySelector('.accordion-container-icons__minus');

    if (isActive) {
        accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
    } else {
        accordionDescription.style.maxHeight = null;
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
        this.setAttribute('aria-expanded', 'false');
    }
}

function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        focusedIndex = (focusedIndex + 1) % accordionBtns.length;
        accordionBtns[focusedIndex].focus();
    } else if (event.key === 'ArrowUp') {
        focusedIndex = (focusedIndex - 1 + accordionBtns.length) % accordionBtns.length;
        accordionBtns[focusedIndex].focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAccordion.call(this);
    }
}



accordionBtns.forEach((btn) => {
    btn.addEventListener('click', toggleAccordion);
    btn.addEventListener('keydown', handleKeyDown);
});


window.addEventListener('load', setInitialFocus);
