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
  userRecipes = [];

  constructor(private recipes: RecipeBookService) {

    this.menuSemanal = localStorage.getItem('weeklyMenu') ? JSON.parse(localStorage.getItem('weeklyMenu')) : this.menuSemanal;
    this.userRecipes = localStorage.getItem('userRecipes') ? JSON.parse(localStorage.getItem('userRecipes')) : this.userRecipes;

  }

  setWeek(week){
    this.userWeek = week;
  }

  generatePlan(){
    this.lunch = this.recipes.getLunch();
    this.dinner = this.recipes.getDinner();
    this.menuSemanal = [];
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
  }

  getWeekPlan(){
    return this.menuSemanal;
  }

  updateLocalStorage(){
    localStorage.setItem('weeklyMenu',JSON.stringify(this.menuSemanal));
  }

  getOneLunch(){
    if(this.lunch.length > 1){
      let random = Math.floor(Math.random() * this.lunch.length) + 7;
      return this.lunch[random];
    }else{
      let random = Math.floor(Math.random() * this.userRecipes.length)
      return this.userRecipes[random];
    }

  }

  getOneDinner(){
    if(this.dinner.length > 1){
      let random = Math.floor(Math.random() * this.dinner.length) + 7;
      return this.dinner[random];
    }else{
      let random = Math.floor(Math.random() * this.userRecipes.length)
      return this.userRecipes[random];
    }
  }

}
