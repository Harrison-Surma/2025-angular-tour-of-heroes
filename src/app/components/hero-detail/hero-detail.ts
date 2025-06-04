import { Component, Input } from '@angular/core';
import { Hero } from '@interface/hero';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})

export class HeroDetail {
  @Input() hero? : Hero;
}