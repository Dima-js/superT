import $ from 'jquery';
import "swiper";
import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {bindable, bindingMode} from 'aurelia-framework';
@inject(HttpClient)

export class One_platform {
    httpClient;
    username = '';
    sum_many = '';
    coment = '';

    //constructor(httpClient) {
    //    this.httpClient = httpClient;
    //
    //
    //
    //
    //}
    @bindable({defaultBindingMode: bindingMode.oneWay}) list;
    constructor(http){
        this.swiper = new Swiper();
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://tabletapp.nwdev.net/api/v1/');
        });

        this.http = http;
    }
    toggle() {
        this.display = !this.display;
    }
    attached(){
        var objSwiper;

        objSwiper = this.initSwiper();
    }

    initSwiper(){

        var swiper = new Swiper('.swiper-container', {
            slideClass: 'swiper-slide',
            wrapperClass: 'swiper-wrapper',
            initialSlide: 3,
            slidesPerView: 3,
            //pagination: '.tariffs-gallery__pagination',
            //slidesPerView: 3,
            //paginationClickable: true,
            //spaceBetween: 30,
            //freeMode: true,
            //paginationClickable: true,
            //prevButton: '.swiper-button-prev',
            //nextButton:'.swiper-button-next',
            loop: true,
            centeredSlides: true,
            spaceBetween: 30

        });
        return swiper;

    }

    postData() {
        var myPostData = {username: this.username, sum_many: this.sum_many, coment: this.coment};
        console.log(myPostData);
        return this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/campaigns', {
            method: 'post',
            body: json(myPostData)
        })
    }

    activate(params) {
        return this.http.fetch('campaigns/' + params.id)
            .then(response => response.json())
            .then(data => {
                    this.list = data.data.invoices;

                    console.log(this.list);
                }
            );
    }

}
