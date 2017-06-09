import $ from 'jquery';
import "swiper";
import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {bindable, bindingMode} from 'aurelia-framework';
@inject(HttpClient)
export class About {
    toggle() {
        this.display = !this.display;
    }

    constructor(httpClient) {
        this.httpClient = httpClient;


        this.id     = null;
        this.value  = null;
        this.active = null;

        this.swiper = new Swiper();
        this.getData();


    }
    getData() {
        this.httpClient.fetch(' http://tabletapp.nwdev.net/api/v1/banners')
            .then(response => response.json())
            .then(data => {
                this.myData = data;
                this.list = this.myData.data[2].items;
                console.log(this.list);

            });
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
