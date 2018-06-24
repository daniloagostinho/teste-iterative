import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-pagamento',
  templateUrl: './confirm-pagamento.component.html',
  styleUrls: ['./confirm-pagamento.component.scss']
})
export class ConfirmPagamentoComponent implements OnInit {
  public getProdutosCarrinho;

  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProdutosCarrinho = JSON.parse(localStorage.getItem("compra"));
  }

  ngOnInit() {
    console.log(this.getProdutosCarrinho);
  }

  confirmCompra() {
    this.router.navigate(['feedback-usuario'])
  }
}
