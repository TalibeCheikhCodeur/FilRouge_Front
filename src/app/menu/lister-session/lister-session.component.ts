import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Session, SessionInterface } from 'src/app/session-interface';

@Component({
  selector: 'app-lister-session',
  templateUrl: './lister-session.component.html',
  styleUrls: ['./lister-session.component.css']
})
export class ListerSessionComponent {

  constructor(private http: HttpClient) {

  }
  // sessions: CalendarEvent[]
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  calendarView = CalendarView;
  events: CalendarEvent[] = []
  activeDayIsOpen = false;

  ngOnInit() {
    this.loadSessions();
  }

  setView(view: CalendarView) {
    this.view = view
  }

  loadSessions() {
    return this.http.get<SessionInterface>("http://127.0.0.1:8000/api/sessions").subscribe((response: SessionInterface) => {

      this.events = this.displayEvent(response.data)
      console.log(response.data);


    });
  }

  displayEvent(session: Session[]) {
    return session.map((item: Session) => ({
      title: item.module,
      start: new Date(item.date + 'T' + item.heure_debut),
      end: new Date(item.date + 'T' + item.heure_fin),
      salle: item.salle_id

    }))
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length===0) {
        this.activeDayIsOpen = false;
      }else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date
    }
  }

}
