import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formClient!: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {

    if(localStorage.getItem('logeado') != "true") {
      this.router.navigate(['/login']);
    } 

    this.formClient = this.fb.group({
      'nombres': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      'apellidos': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      'dni': ['', [Validators.required, Validators.pattern('^[0-9]{1}[0-9]{7}$')]],
      'telefono': ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      'direccion': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      'fecha': ['', Validators.required]
    })
  }
  

  get nombres() {
    return this.formClient.get('nombres') as FormControl;
  }

  get apellidos() {
    return this.formClient.get('apellidos') as FormControl;
  }

  get dni() {
    return this.formClient.get('dni') as FormControl;
  }

  get telefono() {
    return this.formClient.get('telefono') as FormControl;
  }

  get direccion() {
    return this.formClient.get('direccion') as FormControl;
  }

  get fecha() {
    return this.formClient.get('fecha') as FormControl;
  }

  validar() {
    
    if(this.nombres.invalid || this.apellidos.invalid || this.dni.invalid || this.telefono.invalid || 
      this.direccion.invalid || this.fecha.invalid) {
        return true;
    }

    return false;
  }

  enviar() {
    alert('Formulario Enviado!')
    console.log(this.formClient.value);
    this.formClient.reset();
  }

  salir() {
    this.router.navigate(['/login']);
    localStorage.setItem('logeado', "false");
  }
}
