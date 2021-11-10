import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';
import { EditarcursoComponent } from './editarcurso/editarcurso.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"crearCurso",component:CrearcursoComponent},
  {path:"editarCurso/:id",component:EditarcursoComponent},
  {path:"editarCurso",component:EditarcursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
