import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  descripcion:string;
  listaEstudiantes: string[];
  constructor() {
    this.descripcion="taller de aplicaciones en internet";
    this.listaEstudiantes = ['carlos', 'edson', 'jhaziel', 'saul', 'boris','fausto','alan'];
    console.log(this.descripcion);
    console.log(this.listaEstudiantes);
  }
}
