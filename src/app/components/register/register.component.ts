import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],       
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  mensaje: string = '';

  constructor(private router: Router) { }

  register() {
    if (this.email === '' || this.password === '' || this.confirm_password === '') {
        this.mensaje = 'Por favor completá todos los campos.';
        return;
    }

    if(this.password != this.confirm_password){
        this.mensaje = 'Las contraseñas ingresadas no coinciden';
        return 
    }

    
      this.mensaje = 'Usuario registrado!';
      return
    
  }


}









