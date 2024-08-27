const accordionBtns = document.querySelectorAll('.accordion-container__btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling
        console.log(accordionDescription)
        const plusIcon = this.querySelector('.accordion-container-icons__plus');
        const minusIcon = this.querySelector('.accordion-container-icons__minus');


        if(accordionDescription.style.maxHeight) {
            console.log(accordionDescription.style.maxHeight)
            accordionDescription.style.maxHeight = null
            console.log(accordionDescription.style.maxHeight)
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
            console.log(accordionDescription.style.maxHeight)
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
            
        }
    });
})