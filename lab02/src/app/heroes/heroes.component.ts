import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"; // import the Hero interface
import { HEROES } from "../mock-heroes"; // import the Mock-Heroes array

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes = HEROES; // set 'heroes = to the imported HEROES array
    selectedHero: Hero; // WTF: what is this doing?

    constructor() { }

    ngOnInit() {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
