import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cliente';
  // descripcion:string;
  listaEstudiantes: string[];
  persona: Persona;
  listaPersonas: Persona[];
  constructor() {
    this.persona = new Persona();
    // this.descripcion="taller de aplicaciones en internet";
    this.listaEstudiantes = ['carlos', 'edson', 'jhaziel', 'saul', 'boris','fausto','alan'];
    // console.log(this.descripcion);
    console.log(this.listaEstudiantes);
  }
  guardar() {
    console.log( "dd" );
  }
}
