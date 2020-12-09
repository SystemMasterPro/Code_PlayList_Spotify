import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuario: Usuarios[];
  
  constructor(private service:UsuariosService) { }
  
  ngOnInit(): void {
    
    this.service.listar().subscribe(usuariosResp => {
      this.usuario = usuariosResp;
      
    });
  }

   eliminar(usuario: Usuarios) { 
    Swal.fire({
      title: 'Confirmacion de eliminacion',
      html: `Desea eliminar al usuario <b>${usuario.nombres} ${usuario.apellidos}<b>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(usuario.id).subscribe(() => {
          Swal.fire('Exito', 'Usuario eliminado con exito', 'info');
          this.usuario = this.usuario.filter(us => us.id != usuario.id);
        });
      }
    });
  }
}
