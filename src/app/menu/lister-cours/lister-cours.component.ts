import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cours } from 'src/app/cours-interface';
import { JsonData } from 'src/app/modules';

@Component({
  selector: 'app-lister-cours',
  templateUrl: './lister-cours.component.html',
  styleUrls: ['./lister-cours.component.css']
})
export class ListerCoursComponent {
  constructor(private http: HttpClient,private router:Router) {

  }
  @ViewChild('cour_id') btnSession!:ElementRef
  Cours!: Cours[]

  ngOnInit() {
    this.getCours()
  }

  getCours() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/cours').subscribe(response => {
      this.Cours = Object.values(response)[0]
      console.log(this.Cours);

    })
  }

  clickAjoutSession(id:number){
    localStorage.setItem('cour_id',id.toString())
    this.router.navigate(['menu/listCours/ajoutSession'])
  }
}
