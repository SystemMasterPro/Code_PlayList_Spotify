import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuarios } from '../../../models/usuarios';
import { UsuariosService } from '../../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Direccion } from 'src/app/models/direccion';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  usuario: Usuarios;
  titulo: string;
  constructor(private service: UsuariosService, private activatedRouter:ActivatedRoute, private router:Router) {
    this.usuario = new Usuarios();
    this.usuario.direccion = new Direccion();
    this.titulo = "Nuevo Usuario";
   }

  ngOnInit(): void {
    // Obteniendo los parametros de la ruta
    this.activatedRouter.params.subscribe(p => {
      if (p['id']) {
        this.service.findById(p['id']).subscribe(us => {
          this.usuario = us;
        });
        this.titulo = "Editar Usuario";
      }
    });
  }

  guardar() { 
    this.service.create(this.usuario).subscribe(us => { 
      Swal.fire('Exito', 'Usuario guardado con exito', 'success');
      this.usuario = new Usuarios();
    })
  }

  edit() { 
    this.service.update(this.usuario).subscribe(us => { 
      Swal.fire('Exito', 'Usuario actualizado con exito', 'success');
      // this.usuario = new Usuarios();
      this.router.navigate(['/usuarios']);
    })
  }
}
