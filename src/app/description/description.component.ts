import { DataService } from './../services/data.service';
import { Hero } from './../hero/hero.model';
import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  public id;
  public obj: any;
  public hero: Hero;

  public minhaCompra: any;
  compra: any;
  texto: string;

  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private router: Router) {

    this.id = this.route.snapshot.params['id'];

    this.hero = new Hero();

    this.data.getDescription(this.id).then(data => {
      this.obj = data;

      console.log('todas as informacoes >>>>>>>> ', this.obj);

      this.hero.title = this.obj.data.results[0].title;
      this.hero.thumb = this.obj.data.results[0].thumbnail.path + "." + this.obj.data.results[0].thumbnail.extension;
      this.hero.description = this.obj.data.results[0].description,
      this.hero.price = this.obj.data.results[0].prices[0].price,
      this.hero.quantidade = this.obj.data.count,

      console.log('quantidade >>>>>', this.obj.data.count);

      this.minhaCompra = {
        title: this.hero.title,
        thumb: this.hero.thumb,
        description: this.hero.description,
        price: this.hero.price,
        quantidade: this.hero.quantidade = this.obj.data.count
      }

      this.compra = JSON.stringify(this.minhaCompra);
    });
  }

  getHomepage() {
    this.router.navigate(['home']);
  }

  adcionarAoCarrinho() {
    localStorage.setItem("compra", this.compra);
    EventEmitterService.get('textChange').emit(1);
  }

  verProdutosAdicionados() {

    this.router.navigate(['list-comics']);
  }

  getConfirmPagamento() {
    localStorage.setItem("compra", this.compra);
    this.router.navigate(['confirm-pagamento']);
  }
}
