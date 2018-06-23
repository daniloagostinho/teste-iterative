import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.scss']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    EventEmitterService.get('textChange').emit(0);
  }

  getHomepage() {
    this.router.navigate(['home'])

    localStorage.clear();
  }
}
