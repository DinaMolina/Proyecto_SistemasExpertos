import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]), 
    tipoUsuario: new FormControl('',[Validators.required])
  });
  
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(){
  }

  onLogin(form): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl(`/${res.dataUser.pagina}`);
    });
  }
}
