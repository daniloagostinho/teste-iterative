import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPagamentoComponent } from './confirm-pagamento.component';

describe('ConfirmPagamentoComponent', () => {
  let component: ConfirmPagamentoComponent;
  let fixture: ComponentFixture<ConfirmPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
