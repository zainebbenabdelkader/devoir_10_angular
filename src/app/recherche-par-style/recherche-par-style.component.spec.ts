import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParStyleComponent } from './recherche-par-style.component'; // Updated to match the new component name

describe('RechercheParStyleComponent', () => { // Changed component name to RechercheParStyleComponent
  let component: RechercheParStyleComponent;
  let fixture: ComponentFixture<RechercheParStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParStyleComponent] // Ensure you are importing the correct component
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParStyleComponent); // Changed to the correct component
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
