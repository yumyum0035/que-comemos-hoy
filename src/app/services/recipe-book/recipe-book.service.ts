import { Injectable } from '@angular/core';
import rice from '../../../assets/data/rice.json'
import pasta from '../../../assets/data/pasta.json';
import fish from '../../../assets/data/fish.json';
import meat from '../../../assets/data/meat.json';
import gluten from '../../../assets/data/glutenFree.json';
import vegan from '../../../assets/data/vegan.json';
import vegetables from '../../../assets/data/vegetables.json';
import asiatic from '../../../assets/data/asiatic.json';
import trend from '../../../assets/data/trending.json';
import chicken from '../../../assets/data/chicken.json';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  allRecipes = [];
  type = ['Pasta','Arroces','Pescado','Carne','Pollo','Verduras','Vegano','Sin Gluten','Asiático','Variado'];
  wizardRecipes = [];
  userRecipes = [];
  randomRecipes = [];
  lunch = [];
  dinner = [];

  constructor() {
    this.allRecipes.push(pasta);
    this.allRecipes.push(rice);
    this.allRecipes.push(fish);
    this.allRecipes.push(meat);
    this.allRecipes.push(chicken);
    this.allRecipes.push(vegetables);
    this.allRecipes.push(vegan);
    this.allRecipes.push(gluten);
    this.allRecipes.push(asiatic);
    this.allRecipes.push(trend);
    this.generateAllRandomRecipes();
  }

  getAllRecipes(){
    return this.allRecipes;
  }

  getPastaRecipes(){
    const pastaRecipes = [];
    pastaRecipes.push(pasta);
    return pastaRecipes;
  }

  getRiceRecipes(){
    const riceRecipes = [];
    riceRecipes.push(rice);
    return riceRecipes;
  }

  getFishRecipes(){
    const fishRecipes = [];
    fishRecipes.push(fish);
    return fishRecipes;
  }

  getMeatRecipes(){
    const meatRecipes = [];
    meatRecipes.push(meat);
    return meatRecipes;
  }

  getChickenRecipes(){
    const chickenRecipes = [];
    chickenRecipes.push(chicken);
    return chickenRecipes;
  }

  getVegetablesRecipes(){
    const vegetablesRecipes = [];
    vegetablesRecipes.push(vegetables);
    return vegetablesRecipes;
  }

  getVeganRecipes(){
    const veganRecipes = [];
    veganRecipes.push(vegan);
    return veganRecipes;
  }

  getGlutenFreeRecipes(){
    const glutenRecipes = [];
    glutenRecipes.push(gluten);
    return glutenRecipes;
  }

  getAsiaticRecipes(){
    const asiaticRecipes = [];
    asiaticRecipes.push(asiatic);
    return asiaticRecipes;
  }

  getTrendRecipes(){
    const trendRecipes = [];
    trendRecipes.push(trend);
    return trendRecipes;
  }

  generateWizard(type){
    switch(type){
      case 'Pasta':
        this.wizardRecipes.push(this.getPastaRecipes()[0]);
        break;
      case 'Arroces':
        this.wizardRecipes.push(this.getRiceRecipes()[0]);
        break;
      case 'Pescado':
        this.wizardRecipes.push(this.getFishRecipes()[0]);
        break;
      case 'Carne':
        this.wizardRecipes.push(this.getMeatRecipes()[0]);
        break;
      case 'Pollo':
        this.wizardRecipes.push(this.getChickenRecipes()[0]);
        break;
      case 'Verduras':
        this.wizardRecipes.push(this.getVegetablesRecipes()[0]);
        break;
      case 'Vegano':
        this.wizardRecipes.push(this.getVeganRecipes()[0]);
        break;
      case 'Sin Gluten':
        this.wizardRecipes.push(this.getGlutenFreeRecipes()[0]);
        break;
      case 'Asiático':
        this.wizardRecipes.push(this.getAsiaticRecipes()[0]);
        break;
      case 'Asiático':
        this.wizardRecipes.push(this.getTrendRecipes()[0]);
        break;
    }

    this.userRecipes = this.randomWizard(this.wizardRecipes);
    return this.userRecipes;

  }

  clearWizard(){
    this.wizardRecipes = [];
  }

  randomWizard(recipes){
    let randomRecipes = [];

    //All recipes merged
    recipes.forEach(recipe => {
      recipe.forEach( item => {
        randomRecipes.push(item);
      });
    });

    //Randomize recipeBook
    randomRecipes = randomRecipes.sort(() => Math.random() - 0.5)

    return randomRecipes;
  }

  getUserRecipes(){
    return this.userRecipes;
  }

  generateAllRandomRecipes(){
    let recipes = this.getAllRecipes();
    this.randomRecipes = this.randomWizard(recipes);
  }

  generateMeals(){
    if(this.userRecipes.length > 0){
      let index = this.userRecipes.length / 2;
      this.lunch = this.userRecipes.slice(0,index);
      this.dinner = this.userRecipes.slice(index);
    }else{
      let index = this.randomRecipes.length / 2;
      this.lunch = this.randomRecipes.slice(0,index);
      this.dinner = this.randomRecipes.slice(index);
    }
  }

  getLunch(){
    return this.lunch;
  }

  getDinner(){
    return this.dinner;
  }

}
