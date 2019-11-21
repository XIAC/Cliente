import { Component, OnInit } from '@angular/core';
import { Empleado } from './shared/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  persona: Empleado;
  listaPersonas: Empleado[];
  constructor() {
    this.persona = new Empleado();
    this.listaPersonas = [];
  }

  ngOnInit() {
  }
  guardar() {

    console.log(this.persona);
    this.listaPersonas.push(this.persona);
    console.log(this.listaPersonas);
    this.persona = new Empleado();
  }
}
