import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {  }

  closeModal(){
      this.modalCtrl.dismiss();
  }
}
