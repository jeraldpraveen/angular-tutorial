import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDerivativeDemoComponent } from './custom-derivative-demo.component';

describe('CustomDerivativeDemoComponent', () => {
  let component: CustomDerivativeDemoComponent;
  let fixture: ComponentFixture<CustomDerivativeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDerivativeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDerivativeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
