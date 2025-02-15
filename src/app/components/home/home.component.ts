import { AuthserviceService } from './../../services/authservice.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment.prod';
import { MessageService } from '../../services/message.service';
import { Router} from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../model/user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Adicione o CommonModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent {
  title = 'login-page';

  name = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9]+$')
  ]);
  re_password = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])

  private readonly baseUrl = environment.baseUrl;


  constructor(private httpClient: HttpClient, private messageService: MessageService, private router: Router, private authserviceService: AuthserviceService) {}

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
  onLogin(){
    console.log('oi')
  }

  onRegister() {
    let customMessage = '';

    const registerData: User = {
      name: this.name.value || '',
      email: this.email.value || '',
      password: this.password.value || '',
      re_password: this.re_password.value || '',
    };

    this.authserviceService.register(registerData).subscribe({
      next: () => {
        this.messageService.message('Registro realizado com sucesso!');
        console.log(registerData)
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao registrar usuário:', err);

        if (err && err.error) {
          const errorResponse = err.error;

          if (errorResponse.username) {
            customMessage = 'Já existe um usuário com esse nome de usuário.';
          }

          if (errorResponse.email && customMessage === '') {
            customMessage = 'Já existe um usuário com esse email.';
          }

          if (errorResponse.password && customMessage === '') {
            customMessage = 'Esta senha ou é muito curta, comum ou inteiramente numérica.';
          }

          if (errorResponse.faculty && customMessage === '') {
            customMessage = 'O campo faculdade não pode ficar em branco.';
          }

          if (errorResponse.course && customMessage === '') {
            customMessage = 'O campo curso não pode ficar em branco.';
          }
        }

        if(customMessage === '') {
          customMessage = 'Erro ao registrar usuário. Tente novamente!';
        }

        this.messageService.message(customMessage);
      }

    });
  }
}
