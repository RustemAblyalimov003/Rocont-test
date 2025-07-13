
document.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 8,
        slideToClickedSlide: true,
        navigation: {
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
        },
    });
});
