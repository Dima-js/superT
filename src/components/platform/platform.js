import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
@inject(HttpClient)
export class Platform {
    httpClient;
    constructor(httpClient) {

        this.httpClient = httpClient;

        //this.getData_platform();
        this.header_name = 'Кампании';
    }
    eyeColors = [];
    filters = [
        {value: '', keys: ['name', 'target']},
        {value: '', keys: ['category']}
    ];

    bind(){
        let client = new HttpClient();

        return client.fetch('http://tabletapp.nwdev.net/api/v1/campaigns')
            .then(response => response.json())
            .then(data => {
                this.list = data.data;
                console.log(data);
            })
            .then(() => this.populateColors())
    }
    populateColors(){
        this.eyeColors.push('');
        for(let next of this.list){
            var nextColor=next.category;

            if(this.eyeColors.indexOf(nextColor ) === -1){
                this.eyeColors.push(nextColor );
            }
        }
    }

    toggle1() {
        this.display1 = !this.display1;
    }

    toggle2() {
        this.display2 = !this.display2;
    }

    toggle3() {
        this.display3 = !this.display3;
    }





}



