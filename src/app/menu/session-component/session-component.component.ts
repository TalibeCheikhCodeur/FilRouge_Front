import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Profs } from 'src/app/profs';
import { JsonData } from 'src/app/modules';
import { Salles } from 'src/app/salle-interface';
import { Classe } from 'src/app/classe-interface';

@Component({
  selector: 'app-session-component',
  templateUrl: './session-component.component.html',
  styleUrls: ['./session-component.component.css']
})
export class SessionComponentComponent {
  profs: Profs[] = [];
  salles: Salles[] = [];
  classes: Classe[] = [];
  public sessionForm!: FormGroup
  tabIdclasse!: FormArray<any>

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.sessionForm = this.formBuilder.group({
      heure_debut: ["", Validators.required],
      heure_fin: ["", Validators.required],
      type_cours: ["", Validators.required],
      cours_global_classe_id: [[],Validators.required],
      salle_id: ["", Validators.required],
      etat: ["", Validators.required],
      professeur_id: ["", Validators.required],
      date: ["", Validators.required]
    })
  }

  ngOnInit() {
    this.getprofs();
    this.getSalles();
    this.getClasses()
  }

  getprofs() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/profs').subscribe(response => {
      this.profs = Object.values(response)[0]
      // console.log(this.profs);
    })
  }

  getSalles() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/salles').subscribe(response => {
      this.salles = Object.values(response)[0]
      // console.log(this.salles);
    })
  }

  getClasses() {
    let cour_id = localStorage.getItem('cour_id')
    console.log(cour_id);
    return this.http.post('http://127.0.0.1:8000/api/getClasse', { "cour_id": cour_id }).subscribe((response: any) => {
      this.classes= response.data
      // console.log(this.classes);
    })
  }

  submit(){
    const data = this.sessionForm.value
    console.log(data);
    this.http.post('http://127.0.0.1:8000/api/sessions',data).subscribe(response =>{
      console.log(response);
      
    })
    
  }

}
