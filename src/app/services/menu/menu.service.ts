import { Injectable } from '@angular/core';
import { RecipeBookService } from '../recipe-book/recipe-book.service';
import { menu } from '../../interfaces/menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  lunch = [];
  dinner = [];
  week;
  menus:[menu];

  constructor(private recipes: RecipeBookService) {
    this.lunch = recipes.getLunch();
    this.dinner = recipes.getDinner();
   }
   
   setWeek(week){
    this.week = week;
    let menu:menu = { 
      dia:this.week[0],
      isDay:true,
      comida:this.lunch,
      cena:this.dinner
    }
   }
}
