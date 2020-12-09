import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  dato1: string;
  vector: number[];
  PI: number;
  persona: any;
  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Vamos por mas+++');
    }, 2000);
  });
  myDate: Date;
  cadena: string;

  constructor() {
    this.dato1 = 'Instituto';
    this.vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    this.PI = Math.PI;
    this.persona = {
      nombre: 'Richard',
      edad: 24,
      direccion: {
        calle: 'Armando Arias',
        ciudad: 'Zamora'
      }
    };
    // tslint:disable-next-line: new-parens
    this.myDate = new Date;
    this.cadena = 'aeiou';
  }

  ngOnInit(): void {
  }
}
