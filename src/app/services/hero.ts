import { Injectable } from '@angular/core';
import { HEROES } from '@data/mock-heroes';
import { Hero } from '@interface/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
