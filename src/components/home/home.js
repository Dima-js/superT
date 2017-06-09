import {HttpClient} from "aurelia-fetch-client";

export class Home {
    //users = [];
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
                console.log(this.list);
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
}
