import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoDosComponent } from './contacto-dos/contacto-dos.component';
// import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ContactoDosComponent,
    // PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
