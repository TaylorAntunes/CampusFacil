import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Adicione o CommonModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'login-page';

  // Controla a visibilidade dos modais
  isRegisterModalOpen: boolean = false;
  isLoginModalOpen: boolean = false;

  // Funções para abrir e fechar o modal de registro
  openRegisterModal(): void {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal(event?: MouseEvent): void {
    if (event && event.target === event.currentTarget) {
      this.isRegisterModalOpen = false; // Fecha se clicar fora do modal
    } else if (!event) {
      this.isRegisterModalOpen = false;
    }
  }

  // Funções para abrir e fechar o modal de login
  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  closeLoginModal(event?: MouseEvent): void {
    if (event && event.target === event.currentTarget) {
      this.isLoginModalOpen = false; // Fecha se clicar fora do modal
    } else if (!event) {
      this.isLoginModalOpen = false;
    }
  }
}
