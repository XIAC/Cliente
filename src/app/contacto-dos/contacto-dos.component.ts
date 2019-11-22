import { Component, OnInit } from '@angular/core';
import { Contactitos } from './shared/contactitos.model';

@Component({
  selector: 'mis-contactos',
  templateUrl: './contacto-dos.component.html',
  styleUrls: ['./contacto-dos.component.css']
})
export class ContactoDosComponent implements OnInit {

  contactito: Contactitos;
  listaContactitos: Contactitos[];
  constructor() {
    this.contactito = new Contactitos();
    this.listaContactitos = [];
  }


  ngOnInit() {
  }

  guardar() {
    this.listaContactitos.push(this.contactito);
    console.log(this.listaContactitos);
    this.contactito = new Contactitos();
  }

}
