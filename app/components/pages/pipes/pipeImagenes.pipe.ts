import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Imagenes'})
// tslint:disable-next-line: class-name
export class pipeImagenes implements PipeTransform {
    transform(valor: any): any {

 if (!valor) {
return 'assets/img/LOGOFIN.jpg';
} else if(valor.length==0) {
return 'assets/img/LOGOFIN.jpg';
}else{
return valor[0].url;
}
  }
}
