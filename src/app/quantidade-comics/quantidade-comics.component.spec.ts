import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeComicsComponent } from './quantidade-comics.component';

describe('QuantidadeComicsComponent', () => {
  let component: QuantidadeComicsComponent;
  let fixture: ComponentFixture<QuantidadeComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantidadeComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadeComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
