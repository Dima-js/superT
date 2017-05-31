import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
@inject(HttpClient)
export class Platform {
    httpClient;

    constructor(httpClient) {

        this.httpClient = httpClient;

        this.getData_platform();
        this.header_name = 'Кампании';
    }

    //img_news = "http://tabletapp.nwdev.net/"+ error.image;


    toggle1() {
        this.display1 = !this.display1;
    }

    toggle2() {
        this.display2 = !this.display2;
    }

    toggle3() {
        this.display3 = !this.display3;
    }

    getData_platform() {
        this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/campaigns')
            .then(response => response.json())
            .then(data => {
                this.myData = data;
                console.log(data);
                console.log(this.myData);

            });

    }
}



