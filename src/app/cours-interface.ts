export interface JsonData {
    data: Cours[]
}

export interface Cours {
  id:number
  module: string
  professeur: string
  semestre: string
  etat: string
  heures: Heure[]
}

export interface Heure {
    nombre_heures: number
    nombre_heures_effectues: number
  }