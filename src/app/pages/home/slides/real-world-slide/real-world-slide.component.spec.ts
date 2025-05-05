import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealWorldSlideComponent } from './real-world-slide.component';

describe('RealWorldSlideComponent', () => {
  let component: RealWorldSlideComponent;
  let fixture: ComponentFixture<RealWorldSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealWorldSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealWorldSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
