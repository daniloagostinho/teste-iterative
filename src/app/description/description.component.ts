import { Hero } from './../hero/hero.model';
import { Component } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

import { Router } from '@angular/router';

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

  constructor(
    public data: DataService,
    private route:ActivatedRoute,
    private router: Router) {

    this.id = this.route.snapshot.params['id'];

    this.hero = new Hero();

    this.data.getDescription(this.id).then(data => {
      this.obj = data;

      this.hero.title = this.obj.data.results[0].title;
      this.hero.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.hero.description =  this.obj.data.results[0].description;

      console.log('title >> ', this.hero.title);
      console.log('thumb >> ', this.hero.thumb);
      console.log('description >> ', this.hero.description);


      console.log(this.hero);

      this.minhaCompra = {
        title: this.hero.title,
        thumb: this.hero.thumb,
        description:  this.hero.description
      }

      this.compra = JSON.stringify(this.minhaCompra);
    });
  }


  getHomepage() {
    this.router.navigate(['home']);
  }

  adcionarAoCarrinho() {
    localStorage.setItem(this.hero.title, this.compra);
  }
}
