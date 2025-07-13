document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.querySelector('.burger-toggle');
    const body = document.body;

    burgerToggle.addEventListener('change', () => {
        if (burgerToggle.checked) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });
});