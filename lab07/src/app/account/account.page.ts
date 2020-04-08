import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-account",
    templateUrl: "./account.page.html",
    styleUrls: ["./account.page.scss"]
})
export class AccountPage implements OnInit {

    users = [
        {
            imgPath: "./assets/character - sexy - cop.svg",
            name: "Candy McLean"
        },
        {
            imgPath: "./assets/character - mobster.svg",
            name: "Franko The Mouth"
        },
        {
            imgPath: "./assets/character - pirate.svg",
            name: "Paul McDoogle"
        },
        {
            imgPath: "./assets/character - napoleon.svg",
            name: "Napoleon Smith"
        }
    ]

    username: string;
    selectedUser;
    routeParamsSubscription; // why do we need to initialize??

    // Modify your code to receive the parameters using an observables by subscribing to the route.paramMap method.
    // Clicking on any of the list items will redisplay the Account page with the name of the selected user and the same list of names.

    // the publisher is the subject and the subscriber is the observer

    constructor(private route: ActivatedRoute) {
        console.log(ActivatedRoute);
    }

    ngOnInit() {
        // this.username = this.route.snapshot.paramMap.get("username");
        this.routeParamsSubscription = this.route.params.subscribe(params => {
            this.username = params['username'];
        })
    }

    ngOnDestroy() {
        this.routeParamsSubscription.unsubscribe();
    }

    displayCurrent(user){
        this.username = user.name;
        console.log(this.username);
    }
}
