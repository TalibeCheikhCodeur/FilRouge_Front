import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private http:HttpClient,private router: Router){}

  logOut(){
    return this.http.get<any>('http://127.0.0.1:8000/api/logout').subscribe(response => {
      this.router.navigate([''])
      localStorage.removeItem('token');
    })
  }

}
