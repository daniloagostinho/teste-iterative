import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantidade-comics',
  templateUrl: './quantidade-comics.component.html',
  styleUrls: ['./quantidade-comics.component.scss']
})
export class QuantidadeComicsComponent implements OnInit {

  constructor() { }

  quantidade_comics = 0;

  ngOnInit() {
  }

}
