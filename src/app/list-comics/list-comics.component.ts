import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent implements OnInit {

  public getProdutosCarrinho;
  keys;
  quantidade_comics


  constructor() {
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));
  }

  ngOnInit() {
  }

  removerDoCarrinho() {
    localStorage.clear();
  }
}
