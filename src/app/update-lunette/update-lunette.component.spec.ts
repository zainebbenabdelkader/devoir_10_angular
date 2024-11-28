import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateLunetteComponent } from './update-lunette.component';

describe('UpdateLunetteComponent', () => {
  let component: UpdateLunetteComponent;
  let fixture: ComponentFixture<UpdateLunetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLunetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
