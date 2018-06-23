import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCompraComponent } from './detalhe-compra.component';

describe('DetalheCompraComponent', () => {
  let component: DetalheCompraComponent;
  let fixture: ComponentFixture<DetalheCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
