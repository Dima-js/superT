import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

//let httpClient = new HttpClient();
@inject(HttpClient)
export class One_news {

    httpClient;

    //constructor(httpClient) {
    //
    //    this.httpClient = httpClient;
    //
    //    this.getData(params);
    //}
    //
    //getData(params) {
    //    this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/news/'+params.id)
    //        .then(response => response.json())
    //        .then(data => {
    //            this.myData = data;
    //            console.log(data);
    //            console.log(this.myData);
    //
    //        });
    //}


    contact = '';
///
    constructor(http){
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://tabletapp.nwdev.net/api/v1/');
        });

        this.http = http;
    }

    activate(params) {
        return this.http.fetch('news/' + params.id)
            .then(response => response.json())
            .then(data => {
                    this.myData = data;
                    console.log(data);
                    console.log(this.myData);
                }
            );
    }

}