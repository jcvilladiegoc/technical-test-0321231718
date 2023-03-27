import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  showMenu: boolean = false;

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
  }

}
