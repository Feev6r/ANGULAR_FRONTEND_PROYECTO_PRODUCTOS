import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductComponent } from './Show-Product.component';

describe('MostrarProductosComponent', () => {
  let component: ShowProductComponent;
  let fixture: ComponentFixture<ShowProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
