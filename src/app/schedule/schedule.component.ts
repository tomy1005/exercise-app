import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }


  form: any = {
    nombre: null,
    apellido: null,
    edad: null,
    email: null
  };

  guardarError: any = {
    nombre: null,
    apellido: null,
    edad: null,
    email: null
  };
  
  listaPersonas:any[]= [];

  guardar() {

    if (this.form.nombre == null)
      this.guardarError.nombre = "Ingrese el nombre.";

    if (this.form.apellido == null)
      this.guardarError.apellido = "Ingrese el apeliido.";

    if (this.form.edad == null)
      this.guardarError.edad = "Ingrese la edad.";

    if (this.form.email == null)
      this.guardarError.email = "Ingrese el E-mail.";

      
    if (this.form.nombre != null && this.form.apellido != null && this.form.edad != null && this.form.email != null){
    this.listaPersonas.push(this.form);
    this.form =  {
      nombre: null,
      apellido: null,
      edad: null,
      email: null
    };
    this.guardarError={
      nombre: null,
      apellido: null,
      edad: null,
      email: null
    };

    }
  }

  ngOnInit() {
  }

}
