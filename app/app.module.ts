import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { IntroduccionComponent } from './components/pages/introduccion/introduccion.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';
import { pipePersonalizado } from './components/pages/pipes/pipePersonalizado.pipe';
import { AlbunmsComponent } from './components/albunms/albunms.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { pipeImagenes } from './components/pages/pipes/pipeImagenes.pipe';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from './components/usuarios/form-usuario/form-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroduccionComponent,
    PipesComponent,
    pipePersonalizado,
    AlbunmsComponent,
    SearchComponent,
    pipeImagenes,
    ArtistasComponent,
    UsuariosComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
