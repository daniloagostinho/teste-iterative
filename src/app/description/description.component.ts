import { Hero } from './../hero/hero.model';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public id;
  public obj: any;
  public hero: Hero;
  public minhaCompra: any;
  compra: any;
  
  constructor(public data: DataService, private route:ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.hero = new Hero();
    this.data.getDescription(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);

      this.hero.name = this.obj.data.results[0].name; 
      this.hero.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.hero.description =  this.obj.data.results[0].description;

      console.log(this.hero);

      this.minhaCompra = {
        name: this.hero,
        thumb: this.hero.thumb,
        description:  this.hero.description
      }

      this.compra = JSON.stringify(this.minhaCompra);

      localStorage.setItem("compra", this.compra);
    });
  }
  

  ngOnInit() {
  }

  getHomepage() {
    this.router.navigate(['home']);
  }

}
