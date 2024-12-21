// tornarprestador.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tornarprestador',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tornarprestador.component.html',
  styleUrls: ['./tornarprestador.component.scss'],
})
export class TornarPrestadorComponent {
  // Taxa de conclusão fixa em 25%
  taxaConclusao: number = 25;

  // Formulário Reativo
  prestadorForm: FormGroup;

  // Campo temporário para adicionar idiomas
  novoIdioma: string = '';

  constructor(private fb: FormBuilder) {
    this.prestadorForm = this.fb.group({
      informacoesPessoais: this.fb.group({
        nomeCompleto: ['', Validators.required],
        primeiroNome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        nomeExibicao: ['', Validators.required],
        fotoPerfil: [null],
        descricao: ['', [Validators.required, Validators.minLength(150), Validators.maxLength(600)]],
        idiomas: this.fb.array([], Validators.required),
      }),
      informacoesProfissionais: this.fb.group({
        profissao: ['', Validators.required],
        experiencia: ['', Validators.required],
        projetos: ['', Validators.required],
      }),
      segurancaConta: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', Validators.required],
      }, { validators: this.passwordMatchValidator }),
    });
  }

  // Validador para confirmar senha
  passwordMatchValidator(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { mismatch: true };
  }

  // Getter para idiomas
  get idiomas(): FormArray {
    return this.prestadorForm.get('informacoesPessoais.idiomas') as FormArray;
  }

  // Adicionar idioma
  adicionarIdioma() {
    const idioma = this.novoIdioma.trim();
    if (idioma && !this.idiomas.value.includes(idioma)) {
      this.idiomas.push(this.fb.control(idioma));
      this.novoIdioma = '';
    }
  }

  // Remover idioma
  removerIdioma(index: number) {
    this.idiomas.removeAt(index);
  }

  // Manipular upload de imagem
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.prestadorForm.patchValue({
        informacoesPessoais: {
          fotoPerfil: file,
        },
      });
    }
  }

  // Submeter formulário
  onSubmit() {
    if (this.prestadorForm.valid) {
      console.log('Formulário submetido:', this.prestadorForm.value);
      alert('Formulário submetido com sucesso!');
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    } else {
      console.log('Formulário inválido');
      this.prestadorForm.markAllAsTouched();
    }
  }
}
