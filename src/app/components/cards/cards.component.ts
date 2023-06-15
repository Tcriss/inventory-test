import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cards:Card[] = [
    {
      icon: 'tuiIconPackageLarge',
      count: 25,
      view: 'Total Items'
    },
    {
      icon: 'tuiIconPackageLarge',
      count: 25,
      view: 'Total Items'
    },
    {
      icon: 'tuiIconPackageLarge',
      count: 25,
      view: 'Total Items'
    }
  ]
}
