import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abouts } from './abouts';

describe('Abouts', () => {
  let component: Abouts;
  let fixture: ComponentFixture<Abouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abouts],
    }).compileComponents();

    fixture = TestBed.createComponent(Abouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
