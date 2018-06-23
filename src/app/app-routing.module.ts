import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { ListComicsComponent } from './list-comics/list-comics.component';
import { FeedbackUsuarioComponent } from './feedback-usuario/feedback-usuario.component';
import { ConfirmPagamentoComponent } from './confirm-pagamento/confirm-pagamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'description', component: DescriptionComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'list-comics', component: ListComicsComponent
  },
  {
    path: 'feedback-usuario', component: FeedbackUsuarioComponent
  },
  {
    path: 'confirm-pagamento', component: ConfirmPagamentoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
