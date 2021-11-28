import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCardComponent } from './fill-card.component';

describe('FillCardComponent', () => {
  let component: FillCardComponent;
  let fixture: ComponentFixture<FillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
