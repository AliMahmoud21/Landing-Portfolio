(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
        })
    });
})();




const tabs = document.querySelectorAll('.tabs-headings .tab-link');
const tabsContents = document.querySelectorAll('.tabs-content .tab-content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabsContents.forEach((content) => {
            content.classList.remove('active');
        });
        
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabs[index].classList.add('active');
        tabsContents[index].classList.add('active');

    });
});


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 2,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });