const slider = tns({
    container: '.carousel__inner',
    items: 1,
    autoplay: false,
    nav: false,
    controls: false
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};