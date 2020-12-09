import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Caracteres'})
// tslint:disable-next-line: class-name
export class pipePersonalizado implements PipeTransform {
    transform(valor: string): string {

      for (let index = 0; index < valor.length; index++) {

        switch (valor.charAt(index)) {
          case 'a':
              valor = valor.replace('a' , '@');
              break;
          case 'e':
              valor = valor.replace('e', '_');
              break;
          case 'i':
              valor = valor.replace('i', '#');
              break;
          case 'o':
              valor = valor.replace('o', '!');
              break;
          case 'u':
              valor = valor.replace('u', '?');
              break;
        }
      }
      return valor;
  }
}
