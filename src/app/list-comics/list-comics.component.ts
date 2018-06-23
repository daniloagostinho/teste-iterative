import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent implements OnInit {

  public getProdutosCarrinho;
  keys;
  quantidade_comics;
  showComics;
  constructor(private router: Router) {
    EventEmitterService.get('removeComics').subscribe(data => this.showComics = data);
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));

    if (this.getProdutosCarrinho) {
      this.showComics = true;
    }
  }


  ngOnInit() {
  }


  removerDoCarrinho() {
    localStorage.clear();
  }

  irParaHome() {
    this.router.navigate(['home'])
  }
}
