import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";

@Injectable()
export class DataService {
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load() {
    return new Promise(resolve => {
      let md5 = new Md5();

     
    
      var timestamp = Number(new Date());

      console.log('o que timestamp >>>>>', timestamp);
      
      var hash = Md5.hashStr(
        timestamp +
          "f7be00fbdb5e1c5192dc5fe856f9c249ec1de8688ab1d6f7835c26570c1d08f495ecadee"
      );

      this.http
        .get(
          `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&limit=20&apikey=8ab1d6f7835c26570c1d08f495ecadee&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getDescription(id: number) {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`
        )
        .map(res => res.json())   
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}