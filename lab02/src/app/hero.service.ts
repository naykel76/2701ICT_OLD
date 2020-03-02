import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        // pseudoSays: with this injected messageService, using the
        // messageService.add() method send the message
        // (after fetching the heroes)
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}
