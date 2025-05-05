import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingIntegrationSlideComponent } from './emerging-integration-slide.component';

describe('EmergingIntegrationSlideComponent', () => {
  let component: EmergingIntegrationSlideComponent;
  let fixture: ComponentFixture<EmergingIntegrationSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergingIntegrationSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergingIntegrationSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
