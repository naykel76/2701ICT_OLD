import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormModalPage } from '../modals/form-modal/form-modal.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private modalCtrl: ModalController) { }

    async openModal() {

        const modal = await this.modalCtrl.create({
            // the actual modal page class
            component: FormModalPage,
            // values to be passed into the modal
            componentProps: { }
        });

        // display the modal
        return modal.present();
    }
}
