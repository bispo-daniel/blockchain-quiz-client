import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../../../components/card/card.component';

@Component({
  selector: 'app-real-world-slide',
  imports: [CardComponent, CommonModule],
  standalone: true,
  templateUrl: './real-world-slide.component.html',
  styleUrl: './real-world-slide.component.css',
})
export class RealWorldSlideComponent {
  pyramidTop = [
    {
      title: 'Criptomoedas',
      content: 'Pagamentos descentralizados e sem intermediários.',
    },
    {
      title: 'Contratos Inteligentes',
      content: 'Automatizam acordos sem burocracia.',
    },
  ];
  pyramidBottom = [
    {
      title: 'Votação Digital',
      content: 'Transparência e segurança nas eleições.',
    },
    {
      title: 'Cadeias de Suprimentos',
      content: 'Rastreabilidade de ponta a ponta.',
    },
    {
      title: 'Registros Médicos',
      content: 'Históricos seguros e imutáveis.',
    },
  ];
}
