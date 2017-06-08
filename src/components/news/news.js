import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

//let httpClient = new HttpClient();
@inject(HttpClient)
export class News {

    httpClient;

    constructor(httpClient) {

        this.httpClient = httpClient;

        this.getData();
    }
    toggle1() {
        this.display1 = !this.display1;
    }

    //img_news = "http://tabletapp.nwdev.net/"+ error.image;
    getData() {
        this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/news')
            .then(response => response.json())
            .then(data => {
                this.myData = data;
                console.log(data);
                console.log(this.myData);

            });
    }

    //exitFromApp()
    //    {
    //        navigator.app.exitApp();
    //    }


}
