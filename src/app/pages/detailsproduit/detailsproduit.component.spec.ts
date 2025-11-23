import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproduitComponent } from './detailsproduit.component';

describe('DetailsproduitComponent', () => {
  let component: DetailsproduitComponent;
  let fixture: ComponentFixture<DetailsproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsproduitComponent]
    });
    fixture = TestBed.createComponent(DetailsproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
