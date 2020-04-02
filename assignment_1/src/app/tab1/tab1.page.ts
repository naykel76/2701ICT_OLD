import { Component } from '@angular/core';

import TYPES from './test.json';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    x = data.name;
    constructor() {
        alert(this.x);
    }

}
