import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../services/event-emitter.service';
@Component({
  selector: 'app-quantidade-comics',
  templateUrl: './quantidade-comics.component.html',
  styleUrls: ['./quantidade-comics.component.scss']
})
export class QuantidadeComicsComponent implements OnInit {
  public getProdutosCarrinho;
  keys;
  quantidade_comics;
  title;
  constructor() {
    EventEmitterService.get('textChange').subscribe(data => this.title = data);

    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));

    if (this.hasChaveLocalStorage("compra")) {
      this.keys = Object.keys(this.getProdutosCarrinho).map(key => key);
      this.title = 1;
    } else {
      this.title = 0;
    }
  }

  ngOnInit() {

  }

  public hasChaveLocalStorage(key: string): boolean {
    return !!localStorage.getItem(key)
  }
}
