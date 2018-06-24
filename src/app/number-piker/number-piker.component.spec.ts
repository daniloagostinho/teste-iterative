import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPikerComponent } from './number-piker.component';

describe('NumberPikerComponent', () => {
  let component: NumberPikerComponent;
  let fixture: ComponentFixture<NumberPikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
