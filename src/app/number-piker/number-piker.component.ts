import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-piker',
  templateUrl: './number-piker.component.html',
  styleUrls: ['./number-piker.component.scss']
})
export class NumberPikerComponent implements OnInit {
  @Input() valor: number = 0;

  constructor() { }

  descrementa() {
    this.valor--;
  }

  incrementa() {
    this.valor++;
  }

  ngOnInit() {
  }

}
