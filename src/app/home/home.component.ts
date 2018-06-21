import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  public obj: any;
  public heroes: any;

  constructor(
    private data: DataService,
    private router: Router) {
    this.getAllHeroes();
   }


   ngOnInit() {
    //localStorage.removeItem('compra');
   }

  getAllHeroes() {
    this.data.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;

        console.log('todos os resultados >>>> ', this.heroes);

      });
  }

  getDescription(id:number){
    console.log(id);

    this.router.navigate(['description', {id: id}]);
  }

}
