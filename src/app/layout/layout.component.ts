import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  blocMenuOpen: boolean = false;
  guideMenuOpen: boolean = false; // ✅ NEW

  constructor(public router: Router) {
    // Garde le menu ouvert si on est dans /bloc/*
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.blocMenuOpen = this.router.url.startsWith('/bloc');
        this.guideMenuOpen = this.router.url.startsWith('/guide');
      }
    });
  }
  toggleGuideMenu(): void { // ✅ NEW
    this.guideMenuOpen = !this.guideMenuOpen;
  }
  toggleBlocMenu(): void {
    this.blocMenuOpen = !this.blocMenuOpen;
  }
}
