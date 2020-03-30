import { Component } from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    contacts = [{
        firstName: 'Billy',
        lastName: 'Jones',
        email: 'billy@email.com.au'
    },
    {
        firstName: 'Sue',
        lastName: 'Williams',
        email: 'sue@email.com.au'
    },
    {
        firstName: 'Mike',
        lastName: 'McDingle',
        email: 'mike@email.com.au'
    }];

    constructor(private modalController:ModalController){ }

    addContact(){
        alert('hey');
    }

}
