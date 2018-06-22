import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantidade-comics',
  templateUrl: './quantidade-comics.component.html',
  styleUrls: ['./quantidade-comics.component.scss']
})
export class QuantidadeComicsComponent implements OnInit {
  public getProdutosCarrinho;
  keys;
  quantidade_comics

  constructor() {
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));

    if(this.hasChaveLocalStorage("compra")) {
      this.keys = Object.keys(this.getProdutosCarrinho).map(key => key);
      this.quantidade_comics = 1;
    } else {
      this.quantidade_comics = 0;
    }

  }


  ngOnInit() {
  }

  public hasChaveLocalStorage(key: string): boolean {
    return !!localStorage.getItem(key)
  }


}
