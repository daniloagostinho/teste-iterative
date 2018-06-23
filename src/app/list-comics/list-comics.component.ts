import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EventEmitterService } from '../services/event-emitter.service';
@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent {

  getProdutosCarrinho;
  keys;
  quantidade_comics;
  showComics;
  constructor(private router: Router) {

    EventEmitterService.mostrarQuadrinho('mostrarMemsagemVazio').subscribe(data => this.showComics = data);
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));

    if (this.getProdutosCarrinho) {
      this.showComics = true;
    }
  }
  irParaHome() {
    this.router.navigate(['home'])
  }
}
