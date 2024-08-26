import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreviewedProductComponent } from './show-previewed-product.component';

describe('ShowPreviewedProductComponent', () => {
  let component: ShowPreviewedProductComponent;
  let fixture: ComponentFixture<ShowPreviewedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPreviewedProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPreviewedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
