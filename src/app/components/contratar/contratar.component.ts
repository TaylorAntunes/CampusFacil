// contratar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Package {
  name: string;
  price: string;
  features: string[];
  isOpen: boolean;
}

@Component({
  selector: 'app-contratar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss'],
})
export class ContratarComponent {
  title = 'contratar-page';

  // Controla a visibilidade dos modais
  isRegisterModalOpen: boolean = false;
  isLoginModalOpen: boolean = false;

  // Lista de pacotes
  packages: Package[] = [
    {
      name: 'Básico',
      price: 'R$ 839,70',
      features: [
        '1 Conceito + HD JPEGs, PNGs e arquivos vetoriais',
        'Entrega em 2 dia(s)',
        '2 revisões',
      ],
      isOpen: false,
    },
    {
      name: 'Padrão',
      price: 'R$ 1.299,70',
      features: [
        '3 Conceitos + HD JPEGs, PNGs e arquivos vetoriais',
        'Entrega em 3 dia(s)',
        '3 revisões',
      ],
      isOpen: false,
    },
    {
      name: 'Premium',
      price: 'R$ 2.199,70',
      features: [
        '5 Conceitos + HD JPEGs, PNGs e arquivos vetoriais',
        'Entrega em 5 dia(s)',
        '5 revisões',
      ],
      isOpen: false,
    },
  ];

  // Funções para abrir e fechar os modais
  openRegisterModal(): void {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal(event?: MouseEvent): void {
    if (event && event.target === event.currentTarget) {
      this.isRegisterModalOpen = false;
    } else if (!event) {
      this.isRegisterModalOpen = false;
    }
  }

  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  closeLoginModal(event?: MouseEvent): void {
    if (event && event.target === event.currentTarget) {
      this.isLoginModalOpen = false;
    } else if (!event) {
      this.isLoginModalOpen = false;
    }
  }

  // Método para alternar a abertura do pacote
  togglePackage(index: number): void {
    this.packages[index].isOpen = !this.packages[index].isOpen;
  }
}
