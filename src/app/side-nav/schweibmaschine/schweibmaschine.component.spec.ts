import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchweibmaschineComponent } from './schweibmaschine.component';

describe('SchweibmaschineComponent', () => {
  let component: SchweibmaschineComponent;
  let fixture: ComponentFixture<SchweibmaschineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchweibmaschineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchweibmaschineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
