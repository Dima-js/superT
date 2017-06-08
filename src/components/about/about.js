import $ from 'jquery';
import "swiper";
export class About {
    toggle() {
        this.display = !this.display;
    }

    constructor() {
        this.id     = null;
        this.value  = null;
        this.active = null;

        this.swiper = new Swiper();

    }

    attached(){
        var objSwiper;

        objSwiper = this.initSwiper();
    }

    initSwiper(){

        var swiper = new Swiper('.swiper-container', {
            slideClass: 'swiper-slide',
            wrapperClass: 'swiper-wrapper',
            initialSlide: 1,
            pagination: '.tariffs-gallery__pagination',
            //slidesPerView: 3,
            paginationClickable: true,
            //spaceBetween: 30,
            //freeMode: true,
            //paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton:'.swiper-button-next',
            loop: true

        });
        return swiper;

    }


}
