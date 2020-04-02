import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { Contact } from '../interfaces/contact'

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    // contact: Contact = {
    //     firstName: 'Billy',
    //     lastName: 'Carter',
    //     email: 'bc@email.com.au'
    // };

    firstName = "";
    lastName = "";
    email = "";
    addEditBtn = "";

    constructor(private modalController: ModalController, private navParams: NavParams) { }

    ngOnInit() {
        // console.log(this.firstName);

        this.firstName = this.navParams.get('firstName');
        this.lastName = this.navParams.get('lastName');
        this.email = this.navParams.get('email');

        if (this.firstName !== "") {
            console.log('has');
            this.addEditBtn = 'Add';
        } else {
            console.log('has not');
            this.addEditBtn = 'Edit';
        }
    }

    closeModal() {
        // this.modalController.dismiss(this.contact);
        this.modalController.dismiss({
            firstName: this.firstName,
            lastName: this.firstName,
            email: this.email
        });
    }
}
