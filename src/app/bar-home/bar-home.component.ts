import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-home',
  templateUrl: './bar-home.component.html',
  styleUrls: ['./bar-home.component.scss']
})
export class BarHomeComponent {

  constructor(private router: Router) { }

  irParaCarrinho() {
    this.router.navigate(['list-comics']);
  }

  irParaHome() {
    this.router.navigate(['home'])
  }

}
