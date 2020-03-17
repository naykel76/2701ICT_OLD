import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-tab2",
    templateUrl: "tab2.page.html",
    styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
    loginCount: number = 0;
    username: string = "";

    constructor(private router: Router) {
        console.log(this.username);
    }

    incrementCounter() {
        this.loginCount++;
    }

    login() {
        this.incrementCounter();
        // this.router.navigateByUrl('/account');
        this.router.navigateByUrl("/account/" + this.username);
    }
}
