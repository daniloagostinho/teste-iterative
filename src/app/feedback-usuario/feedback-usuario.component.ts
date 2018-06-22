import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.scss']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  getHomepage() {
    this.router.navigate(['home'])
  }


}
