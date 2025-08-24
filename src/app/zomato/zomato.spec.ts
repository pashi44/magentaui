import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zomato } from './zomato';

describe('Zomato', () => {
  let component: Zomato;
  let fixture: ComponentFixture<Zomato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zomato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zomato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
