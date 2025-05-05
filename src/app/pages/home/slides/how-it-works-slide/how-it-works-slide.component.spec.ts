import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksSlideComponent } from './how-it-works-slide.component';

describe('HowItWorksSlideComponent', () => {
  let component: HowItWorksSlideComponent;
  let fixture: ComponentFixture<HowItWorksSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
