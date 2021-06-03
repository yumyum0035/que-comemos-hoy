import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';
import { MenuService } from '../../services/menu/menu.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ownedIngredients = [];
  missingIngredients = [];
  menuSemanal = [];
  allRecipes;
  result;
  wizardDone;

  constructor(private router: Router, private util: RecipeBookService, private menu: MenuService) { }


  /*
  select recipe and that recipe tells me the position in the array and then i run a ng for for the elements of that recipe */
  ngOnInit(): void {
    this.ownedIngredients = localStorage.getItem('ownedIngredients') ? JSON.parse(localStorage.getItem('ownedIngredients'))  : this.ownedIngredients;
    this.missingIngredients = localStorage.getItem('missingIngredients') ? JSON.parse(localStorage.getItem('missingIngredients'))  : this.missingIngredients;
    this.menuSemanal = localStorage.getItem('weeklyMenu') ? JSON.parse(localStorage.getItem('weeklyMenu')) : this.menuSemanal;
    localStorage.getItem('wizardDone') == "false" ? false : this.getEverything();
  }

  getWeekPlan(){
    this.menuSemanal = this.menu.getWeekPlan()
  }

  getEverything() {
    this.getWeekPlan()
    this.getIngredientWeekPlan(this.menuSemanal)
    this.filterOnlyUniqueName()
  }

  getIngredientWeekPlan(weekPlan) {
    this.result = [];
    let totalIngredientsArrayStrings
    weekPlan.forEach(day => {

      if (day.isDay == true) {
      this.result.push(...day.cena.ingredients)
      this.result.push(...day.comida.ingredients)
      totalIngredientsArrayStrings = this.result.map(foodMaterial => foodMaterial.name);
    }
    });
    this.missingIngredients = this.result

  }

  filterOnlyUniqueName() {
    /* change id to name */
    let flags = {};

    /* add to flags then check if its inside */
    let uniqueIngredients = this.result.filter((ingredient: any) => {

      if (flags[ingredient.name]) {
        return false
      }
      flags[ingredient.name] = true
      return true
    });
    console.log(flags);
    this.missingIngredients = uniqueIngredients
  }

  addIngredient(missingIngredient) {
    this.missingIngredients.push(missingIngredient)
    this.ownedIngredients = this.ownedIngredients.filter(e => e !== missingIngredient);
    localStorage.setItem('ownedIngredients', JSON.stringify(this.ownedIngredients));
    localStorage.setItem('missingIngredients', JSON.stringify(this.missingIngredients));
  }

  delIngredient(ownedIngredient) {
    this.ownedIngredients.push(ownedIngredient)
    this.missingIngredients = this.missingIngredients.filter(e => e !== ownedIngredient);
    localStorage.setItem('ownedIngredients', JSON.stringify(this.ownedIngredients));
    localStorage.setItem('missingIngredients', JSON.stringify(this.missingIngredients));

  }
}
