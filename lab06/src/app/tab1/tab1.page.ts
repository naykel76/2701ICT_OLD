import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    firstName: string;
    lastName: string;
    email: string;

    contactsArr = [{
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

    constructor(private modalController: ModalController) { }

    async addContact() {
        const modal = await this.modalController.create({
            // component to display (the actual modal)
            component: ModalPage,
            // values to be passed into the modal
            componentProps: {  }
        });

        // why wont this catch the undefined? it returns object regardless
        modal.onDidDismiss().then((val) => {
            if(val.data !== undefined){
                this.contactsArr.push(val.data);
            }
        });

        return modal.present();
    }

    async editContact(index: number) {

        const modal = await this.modalController.create({
            // component to display (the actual modal)
            component: ModalPage,
            // values to be passed into the modal
            componentProps: {
                firstName: this.contactsArr[index].firstName,
                lastName: this.contactsArr[index].lastName,
                email: this.contactsArr[index].email,
            }
        });

        // on close pass back data
        modal.onDidDismiss().then((val) => {
            this.contactsArr[index].firstName = val.data.firstName,
            this.contactsArr[index].lastName = val.data.lastName,
            this.contactsArr[index].email = val.data.email
        });

        return modal.present();
    }

    deleteContact(index: number) {
        if (confirm("Delete " + this.contactsArr[index].firstName + ' ?')) {
            this.contactsArr.splice(index, 1);
        }
    }

}
