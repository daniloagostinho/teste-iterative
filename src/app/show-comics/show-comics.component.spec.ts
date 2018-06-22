import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComicsComponent } from './show-comics.component';

describe('ShowComicsComponent', () => {
  let component: ShowComicsComponent;
  let fixture: ComponentFixture<ShowComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
