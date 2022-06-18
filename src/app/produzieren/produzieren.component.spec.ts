import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduzierenComponent } from './produzieren.component';

describe('ProduzierenComponent', () => {
  let component: ProduzierenComponent;
  let fixture: ComponentFixture<ProduzierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduzierenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduzierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
