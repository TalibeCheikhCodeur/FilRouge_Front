import { Component } from '@angular/core';
import { CoursServiceService } from 'src/app/cours-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  public tab: any;
  public excelData: any
  public message!: string

  constructor(private coursService: CoursServiceService) {

  }



  importFiles(event: any) {
    const files = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(files);

    fileReader.onload = (e) => {
      let workbook = XLSX.read(fileReader.result, { type: 'binary' })
      let sheetNames = workbook.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      this.tab = {
        tab: this.excelData
      }
      console.log(this.tab);
    }
  }

  inscrire() {
    this.coursService.postInscrire(this.tab).subscribe(response => {
      this.message = response.message;
      setTimeout(() => {
        this.message = "";
      }, 3000);

    })
  }

}
