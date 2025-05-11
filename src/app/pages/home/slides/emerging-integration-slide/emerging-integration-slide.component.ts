import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCardComponent } from '../../../../components/image-card/image-card.component';

@Component({
  selector: 'app-emerging-integration-slide',
  imports: [ImageCardComponent, CommonModule],
  standalone: true,
  templateUrl: './emerging-integration-slide.component.html',
  styleUrl: './emerging-integration-slide.component.css',
})
export class EmergingIntegrationSlideComponent {
  images = [
    {
      imageUrl: 'assets/animations/blockchain.webp',
      title: 'Blockchain',
    },
    {
      imageUrl: 'assets/images/AI.jpg',
      title: 'Inteligência Artificial',
    },
    {
      imageUrl: 'assets/images/IoT.jpg',
      title: 'Internet das Coisas',
    },
    {
      imageUrl: 'assets/animations/big-data.webp',
      title: 'Big Data',
    },
  ];
}
