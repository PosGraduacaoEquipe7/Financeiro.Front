import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './components/contrato/contrato.component';
import { HomeComponent } from './components/home/home.component';
import { ImprimirBoletoComponent } from './components/imprimir-boleto/imprimir-boleto.component';
import { LoginComponent } from './components/login/login.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { ParcelasComponent } from './components/parcelas/parcelas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parcelas', component: ParcelasComponent },
  { path: 'parcelas/:id', component: ImprimirBoletoComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'contrato/:id', component: ContratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
