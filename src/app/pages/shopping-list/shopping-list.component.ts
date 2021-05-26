import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ownedIngredients = [];
  missingIngredients = [];
  userRecipes: any[];
  allRecipes;
  array = [];
  result;

  constructor(private router: Router, private util: RecipeBookService) { }


  /*
  select recipe and that recipe tells me the position in the array and then i run a ng for for the elements of that recipe */
  ngOnInit(): void {
    this.ownedIngredients = localStorage.getItem('ownedIngredients') ? JSON.parse(localStorage.getItem('ownedIngredients'))  : this.ownedIngredients;
    this.missingIngredients = localStorage.getItem('missingIngredients') ? JSON.parse(localStorage.getItem('missingIngredients'))  : this.missingIngredients;


  }

  getAllRecipes() {
    /* random */
    this.allRecipes = this.util.generateAllRandomRecipes()
  }
  getUserRecipes() {
    this.userRecipes = this.util.getUserRecipes()
    console.log('getUserRecipes',this.userRecipes);
  }

  getEverything() {
    this.getAllRecipes()
    this.getIngredientFromRecipe(this.allRecipes)
    this.filterOnlyUniqueId()
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

  getIngredientFromRecipe(recipes) {
    this.result = [];

    recipes.forEach(recipe => {
      this.result.push(...recipe.ingredients)

    });
  }

  filterOnlyUniqueId() {
    let flags = {};

    /* add to flags then check if its inside */
    let uniqueIngredients = this.result.filter((ingredient: any) => {

      if (flags[ingredient.id]) {
        return false
      }
      flags[ingredient.id] = true
      return true



    });
    /* this.missingIngredients = this.result */
    this.missingIngredients = uniqueIngredients

  }

  standarizeWordsInArray(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    }

     array = array.filter(word => {
      return word.includes(word)})

    array = array.filter(this.onlyUnique)
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
}
