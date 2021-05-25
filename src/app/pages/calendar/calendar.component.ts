import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  week = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
  day = new Date();
  n:number;
  lunch = [];
  dinner = [];

  constructor(private recipesServ : RecipeBookService) {
    this.n = this.day.getDay(); //0->Domingo - 6->Sábado
    this.n == 0 ? this.n = 6 : this.n--; //0->Lunes - 6->Domingo
  }

  ngOnInit(): void {
    this.recipesServ.generateMeals();
    this.lunch = this.recipesServ.getLunch();
    this.dinner = this.recipesServ.getDinner()
  }

}
