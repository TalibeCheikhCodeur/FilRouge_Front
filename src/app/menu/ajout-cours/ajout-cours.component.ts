import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonData, Modules } from 'src/app/modules';
import { Profs } from 'src/app/profs';
import { CoursServiceService } from 'src/app/cours-service.service';


@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent {

  public tabClasses!: FormArray<any>

  public dataclasses!: any[]
  message!: string

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private coursService: CoursServiceService) { }
  classeForm = this.formBuilder.group({
    module_id: ['', Validators.required],
    professeur_id: ['', Validators.required],
    semestre_id: ['', Validators.required],
    etat: ['', Validators.required],
    nombre_heures: ['', Validators.required],
    classes: this.formBuilder.array([])
  })
  modules: Modules[] = [];
  profs: Profs[] = [];
  semestres: Modules[] = []
  classe = []
  ngOnInit() {
    this.getModules();
    this.getprofs();
    this.getSemestres();
    this.getClasses();
  }

  get classes(): FormArray {
    return this.classeForm.get('classes') as FormArray;
  }

  ajouterClasse() {
    this.tabClasses = this.classeForm.get('classes') as FormArray
    this.tabClasses.push(this.row())
  }

  row() {
    return this.formBuilder.group({
      classe: this.formBuilder.control(0, Validators.required)
    })
  }

  getModules() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/modules').subscribe(response => {
      this.modules = Object.values(response)[0]
      console.log(this.modules);

    })
  }
  getprofs() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/profs').subscribe(response => {
      this.profs = Object.values(response)[0]
      console.log(this.profs);

    })
  }

  getSemestres() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/semestres').subscribe(response => {
      this.semestres = Object.values(response)[0]
      console.log(this.semestres);

    })
  }

  getClasses() {
    return this.http.get<JsonData>('http://127.0.0.1:8000/api/classes').subscribe(response => {
      this.dataclasses = Object.values(response)[0];
      console.log(this.dataclasses);


    })
  }

  onSubmit() {
    const formData = this.classeForm.value;
    console.log(formData);
    this.coursService.postCours(formData).subscribe(response => {
      console.log("insertion Reussi");
    })

    this.classeForm.reset();
  }

}
