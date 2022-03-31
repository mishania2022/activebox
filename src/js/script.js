import Swiper, { Pagination } from 'swiper';

    const swiper = new Swiper(".swiper", {
        loop: true,

        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination",
        },
      });