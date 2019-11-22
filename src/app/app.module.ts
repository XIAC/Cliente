import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
<<<<<<< HEAD
import { ContactoDosComponent } from './contacto-dos/contacto-dos.component';
=======
import { EmpleadoDosComponent } from './empleado-dos/empleado-dos.component';
>>>>>>> eb55676efb476bc2839e481e560031f0ce3f4d1d
// import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
<<<<<<< HEAD
    ContactoDosComponent,
=======
    EmpleadoDosComponent,
>>>>>>> eb55676efb476bc2839e481e560031f0ce3f4d1d
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
