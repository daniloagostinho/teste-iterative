import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarHomeComponent } from './bar-home/bar-home.component';
import { QuantidadeComicsComponent } from './quantidade-comics/quantidade-comics.component';
import { DescriptionComponent } from './description/description.component';
import { FeedbackUsuarioComponent } from './feedback-usuario/feedback-usuario.component';
import { HomeComponent } from './home/home.component';
import { ListComicsComponent } from './list-comics/list-comics.component';
import { ShowComicsComponent } from './show-comics/show-comics.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './rating/rating.component';
import { ConfirmPagamentoComponent } from './confirm-pagamento/confirm-pagamento.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarHomeComponent,
    QuantidadeComicsComponent,
    DescriptionComponent,
    FeedbackUsuarioComponent,
    HomeComponent,
    ListComicsComponent,
    ShowComicsComponent,
    FooterComponent,
    RatingComponent,
    ConfirmPagamentoComponent
    ],
  exports: [
    BarHomeComponent,
    QuantidadeComicsComponent,
    DescriptionComponent,
    FeedbackUsuarioComponent,
    HomeComponent,
    ListComicsComponent,
    ShowComicsComponent,
    RatingComponent,
    ConfirmPagamentoComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
