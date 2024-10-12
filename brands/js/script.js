let brandsBtn = document.getElementById('brands-btn');
let brandsList = document.querySelector('.brands__list');
let readMoreText = document.querySelector('.read-more__text');

brandsBtn.addEventListener('click', () => {
    brandsList.classList.toggle('open');
    brandsBtn.classList.toggle('arr');

    if (readMoreText.textContent === 'Показать все') {
        readMoreText.textContent = 'Скрыть';
      } else {
        readMoreText.textContent = 'Показать все';
    }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  width: 240,
  spaceBetween: 16,
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },
});
