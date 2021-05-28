import { Injectable } from '@angular/core';
import { RecipeBookService } from '../recipe-book/recipe-book.service';
import { menu } from '../../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  lunch = [];
  dinner = [];
  semana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  userWeek = [];
  menuSemanal = [];

  constructor(private recipes: RecipeBookService) {

    this.menuSemanal = localStorage.getItem('weeklyMenu') ? JSON.parse(localStorage.getItem('weeklyMenu')) : this.menuSemanal;
  }

  setWeek(week){
    this.userWeek = week;
  }

  generatePlan(){
    this.lunch = this.recipes.getLunch();
    this.dinner = this.recipes.getDinner();
    this.menuSemanal = [];
    console.log('hola', this.lunch);
    this.semana.forEach((day, index) => {
      let menu:menu = {
        dia: day,
        isDay: day == this.userWeek[index] ? true : false,
        comida:this.lunch[index],
        cena:this.dinner[index]
      }
      this.menuSemanal.push(menu);
    });
    localStorage.setItem('weeklyMenu',JSON.stringify(this.menuSemanal));
    console.log('entra',this.menuSemanal);

  }

  getWeekPlan(){
    return this.menuSemanal;
  }


}
