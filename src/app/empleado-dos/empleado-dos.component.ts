import { Component, OnInit } from '@angular/core';
import { Empleado_dos } from './shared/empleado-dos.model';
@Component({
  selector: 'app-empleado-dos',
  templateUrl: './empleado-dos.component.html',
  styleUrls: ['./empleado-dos.component.css']
})
export class EmpleadoDosComponent implements OnInit {
  empleado: Empleado_dos;
  listaEmpleados: Empleado_dos[];

  constructor() {
    this.empleado = new Empleado_dos();
    this.listaEmpleados = [];
  }

  ngOnInit() { }

  guardar() {
    console.log(this.empleado);
    this.listaEmpleados.push(this.empleado);
    console.log(this.listaEmpleados);
    this.empleado = new Empleado_dos();
  }
}
