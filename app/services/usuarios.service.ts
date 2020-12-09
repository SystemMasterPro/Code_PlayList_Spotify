import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://localhost:8080/api/";
  
  constructor(private service: HttpClient) { }
  
  public listar(): Observable<Usuarios[]> { 
    return this.service.get<Usuarios[]>(this.url + "usuarios");
  }

  public create(usuario: Usuarios): Observable<Usuarios> { 
    return this.service.post<Usuarios>(this.url +"usuario", usuario);
  }

   public update(usuario: Usuarios): Observable<Usuarios> { 
    return this.service.put<Usuarios>(this.url +"usuario", usuario);
   }
  
   public delete(id:number): Observable<any> { 
    return this.service.delete<any>(this.url +"usuario/"+id);
   }
  
  public findById(id: number): Observable<Usuarios> { 
    return this.service.get<Usuarios>(this.url+"usuario-busqueda/"+id)
  }
}
