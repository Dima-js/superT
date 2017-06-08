import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {bindable, bindingMode} from 'aurelia-framework';
@inject(HttpClient)
//let httpClient = new HttpClient();
export class Faq {

    email = '';
    fio = '';
    message = '';

    @bindable({defaultBindingMode: bindingMode.oneWay}) list;
    toggle() {
        this.display = !this.display;
    }

    constructor(httpClient) {
        this.httpClient = httpClient;

        this.getData();
        //this.postData();
    }

    //myPostData = {
    //    id: 101
    //};
    //signup() {
    //    var myUser = { email: this.email, name: this.name, message: this.message };
    //    console.log(myUser);
    //};

    //signup() {
    //     myUser = { email: this.email, name: this.name, massage: this.massage};
    //    console.log(myUser);
    //
    //};


    postData() {
       var myPostData = {email: this.email, fio: this.fio, message: this.message};
        console.log(myPostData);
        return this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/feedback', {
            method: 'post',
            body: json(myPostData)
        })


    }



    //postData(myPostData) {
    //
    //    this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/feedback', {
    //            method: "POST",
    //            body: JSON.stringify(myPostData)
    //        })
    //
    //        .then(response => response.json())
    //        .then(data => {
    //            console.log(data);
    //            console.log(myPostData);
    //        });
    //
    //}
    getData() {
        this.httpClient.fetch('http://tabletapp.nwdev.net/api/v1/questions')
            .then(response => response.json())
            .then(data => {
                this.myData = data;
                //console.log(data);
                //console.log(this.myData);
                this.list = data.data;
                //console.log(this.list);



            });
    }


    show(element){
        if (element.active == true) {
            element.active = false;
        } else {
            this.list.forEach((row) => {
                row.active = false;
            });

            element.active = true;
        }
    }

}
