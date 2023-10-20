import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiUrl = 'http://127.0.0.1:8000/api/login'
  constructor(private router: Router, private http: HttpClient) { }
  versMenu() {
    const login = (<HTMLInputElement>document.getElementById('login')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    const loginData: any = {
      login: login,
      password: password
    };
    console.log(loginData);
    

    this.http.post(this.apiUrl, loginData).subscribe({
      next: (response: any) => {
        console.log(response);
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['menu']);
      },
      error: (error: any) => {
        console.error(error);
        console.log('bap');
        
      }
    });
  }

}
