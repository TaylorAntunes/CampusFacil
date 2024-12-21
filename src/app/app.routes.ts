import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ContratarComponent } from './components/contratar/contratar.component';
import { HomeComponent } from './components/home/home.component';
import { TornarPrestadorComponent } from './components/tornarprestador/tornarprestador.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contratar",
    component: ContratarComponent
  },
  {
    path: "tornarprestador",
    component: TornarPrestadorComponent
  },
  {
    path: "manutencao",
    component: ManutencaoComponent
  }
]
