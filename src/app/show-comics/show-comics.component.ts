import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-show-comics',
  templateUrl: './show-comics.component.html',
  styleUrls: ['./show-comics.component.scss']
})
export class ShowComicsComponent implements OnInit {
  public getProdutosCarrinho;
  keys;
  quantidade_comics

  showComics: boolean;


  constructor(private router: Router) {
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));
  }

  ngOnInit() {
  }

  loadingFeedback() {
    this.router.navigate(['feedback-usuario']);
  }

  removeComics() {

    localStorage.clear();

    EventEmitterService.get('textChange').emit(0);


    EventEmitterService.mostrarQuadrinho('mostrarMemsagemVazio').emit(false);
  }

}
