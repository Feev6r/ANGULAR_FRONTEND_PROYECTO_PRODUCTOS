import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSignUpComponent } from './registro-sign-up.component';

describe('RegistroSignUpComponent', () => {
  let component: RegistroSignUpComponent;
  let fixture: ComponentFixture<RegistroSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
