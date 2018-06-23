import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public obj?: any;
  public heroes?: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.load()
    .then(data => {
      this.obj = data;
      this.heroes = this.obj.copyright;
    });
  }

}
