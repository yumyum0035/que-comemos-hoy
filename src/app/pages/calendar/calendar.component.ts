import { Component, OnInit } from '@angular/core';
import { ElementArrayFinder } from 'protractor';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';
import { Router} from '@angular/router';

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
  ingredients = [];
  ingredientsNames = [];
  constructor(private recipesServ : RecipeBookService, private router:Router) {
    this.n = this.day.getDay(); //0->Domingo - 6->Sábado
    this.n == 0 ? this.n = 6 : this.n--; //0->Lunes - 6->Domingo

    //Reordeno la semana

  }

  ngOnInit(): void {
    this.recipesServ.generateMeals();
    this.lunch = this.recipesServ.getLunch();
    this.dinner = this.recipesServ.getDinner();
  }

  editMeal(type,index){
    switch(type){
      case 'lunch':
        let newMeal = this.recipesServ.getOneLunch();
        this.lunch[index] = newMeal;
        break;
      case 'dinner':
        let newMeal2 = this.recipesServ.getOneDinner();
        this.dinner[index] = newMeal2;
        break;
    }
  }

  showDetail(type,index){
    switch(type){
      case 'lunch':
        this.router.navigateByUrl('/detail-recipe/'+this.lunch[index].id);
        break;
      case 'dinner':
        this.router.navigateByUrl('/detail-recipe/'+this.dinner[index].id);
        break;
    }

  }




}
