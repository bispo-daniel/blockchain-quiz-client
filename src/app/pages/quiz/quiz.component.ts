import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizService, QuizQuestion } from '../../core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[] = [];
  picked: number[] = [];

  @ViewChild('mainSwiper', { static: true })
  mainSwiper!: ElementRef<HTMLElement>;

  constructor(private qs: QuizService) {}

  async ngOnInit() {
    this.questions = await this.qs.getQuiz();
    this.picked = Array(this.questions.length).fill(-1);
  }

  choose(qIdx: number, optIdx: number) {
    this.picked[qIdx] = optIdx;

    setTimeout(() => {
      if (qIdx < this.questions.length - 1) {
        (this.mainSwiper.nativeElement as any).swiper.slideNext();
      }
    }, 400);
  }

  get score() {
    return this.questions.reduce(
      (sum, q, i) => (this.picked[i] === q.correct ? sum + 1 : sum),
      0
    );
  }
}
