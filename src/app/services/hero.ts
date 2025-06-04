import { Injectable } from '@angular/core';
import { HEROES } from '@data/mock-heroes';
import { Hero } from '@interface/hero';
import { Observable, of } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: Message) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
