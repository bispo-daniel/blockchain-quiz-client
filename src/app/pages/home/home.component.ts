import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroSlideComponent } from './slides/intro-slide/intro-slide.component';
import { WhatIsSlideComponent } from './slides/what-is-slide/what-is-slide.component';
import { HowItWorksSlideComponent } from './slides/how-it-works-slide/how-it-works-slide.component';
import { RealWorldSlideComponent } from './slides/real-world-slide/real-world-slide.component';
import { TypesConsensusSlideComponent } from './slides/types-consensus-slide/types-consensus-slide.component';
import { FutureSlideComponent } from './slides/future-slide/future-slide.component';
import { EmergingIntegrationSlideComponent } from './slides/emerging-integration-slide/emerging-integration-slide.component';
import { StudySlideComponent } from './slides/study-slide/study-slide.component';
import { QuizCallSlideComponent } from './slides/quiz-call-slide/quiz-call-slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  slides = [
    IntroSlideComponent,
    WhatIsSlideComponent,
    HowItWorksSlideComponent,
    RealWorldSlideComponent,
    TypesConsensusSlideComponent,
    EmergingIntegrationSlideComponent,
    FutureSlideComponent,
    StudySlideComponent,
    QuizCallSlideComponent,
  ];
}
