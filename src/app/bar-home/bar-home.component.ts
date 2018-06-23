import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-home',
  templateUrl: './bar-home.component.html',
  styleUrls: ['./bar-home.component.scss']
})
export class BarHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaCarrinho() {
    this.router.navigate(['list-comics']);
  }

  irParaHome() {
    this.router.navigate(['home'])
  }

}
