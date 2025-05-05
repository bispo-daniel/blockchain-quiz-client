import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesConsensusSlideComponent } from './types-consensus-slide.component';

describe('TypesConsensusSlideComponent', () => {
  let component: TypesConsensusSlideComponent;
  let fixture: ComponentFixture<TypesConsensusSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesConsensusSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesConsensusSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
