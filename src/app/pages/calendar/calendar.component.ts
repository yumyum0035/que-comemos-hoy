import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  week = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];

  constructor() { }

  ngOnInit(): void {
  }

}
