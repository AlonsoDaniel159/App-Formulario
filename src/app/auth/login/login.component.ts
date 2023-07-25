import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]);

  constructor(private router: Router) {}


  ingresar() {
    localStorage.setItem('logeado', "true");
    this.router.navigate(['/formulario']);
  }
}
