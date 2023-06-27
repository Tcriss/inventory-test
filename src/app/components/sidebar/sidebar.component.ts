import { Component } from '@angular/core';
import { NavItem } from '../../models/navItems.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  routes: NavItem[] = [
    { 
      icon: 'tuiIconHomeLarge',
      path: '/dashboard'
    },
    {
      icon: 'tuiIconPackageLarge',
      path: '/items'
    }
  ]
}
