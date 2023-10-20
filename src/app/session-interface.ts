export interface SessionInterface {
    data: Session[]
}
export interface Session {
    module:string
    heure_debut: string
    heure_fin: string
    duree: number
    etat: string
    type_cours: string
    salle_id: string
    date: string
}
