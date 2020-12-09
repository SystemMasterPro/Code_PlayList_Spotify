import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduccionComponent } from './components/pages/introduccion/introduccion.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';
import { AlbunmsComponent } from './components/albunms/albunms.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
  component: IntroduccionComponent,
  },
  {
    path: 'introduccion',
  component: IntroduccionComponent,
  },
  {
    path: 'pipes',
  component: PipesComponent,
  },
  {
    path: 'albums',
  component: AlbunmsComponent,
  },
  {
    path: 'search',
  component: SearchComponent,
  },
  {
    path: 'artist',
  component: ArtistasComponent,
  },
  {
    path: 'artist/:id',
  component: ArtistasComponent,
  },
  {
    path: 'usuarios',
  component: UsuariosComponent,
  },
  {
    path: 'nuevo-usuario',
  component: FormUsuarioComponent,
  },
  {
    path: 'editar-usuario/:id',
  component: FormUsuarioComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
