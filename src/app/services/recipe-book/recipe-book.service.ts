import { Injectable } from '@angular/core';
import rice from '../../../assets/data/rice.json';
import pasta from '../../../assets/data/pasta.json';
import fish from '../../../assets/data/fish.json';
import meat from '../../../assets/data/meat.json';
import gluten from '../../../assets/data/gluten.json';
import vegan from '../../../assets/data/vegan.json';
import vegetables from '../../../assets/data/vegetables.json';
import asiatic from '../../../assets/data/asiatic.json';
import trend from '../../../assets/data/trending.json';
import chicken from '../../../assets/data/chicken.json';
import { recipe, ingredient, step } from '../../interfaces/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  allRecipes:recipe[] = [];
  type = ['Pasta','Arroces','Pescado','Carne','Pollo','Verduras','Vegano','Sin Gluten','Asiático','Variado'];
  wizardRecipes:recipe[] = [];
  userRecipes:recipe[] = [];
  randomRecipes:recipe[] = [];
  lunch:recipe[] = [];
  dinner:recipe[] = [];

  constructor() {
    /*
    //DATA LIMPIA
    chicken.forEach(element => {
      let aux:recipe = {
        id: element.id,
        name: element.name,
        type: element.type,
        description: element.description,
        image_alt_tag:element.image_alt_tag,
        image: element.images[0].url,
        total_time: element.total_time,
        dificulty: 1,
        favorited: false,
        portion: element.portion,
        ingredients_amount : element.ingredients_amount,
        ingredients : [{
          measure: '0',
          value: '0',
          ingredient_type:'0',
          image:'0',
          name: '0',
          shopping_list_category_es: '0'
        }],
        steps:[{
          name: '0',
          priority:0
        }]
      };

      element.ingredients.forEach(i => {
        let ing: ingredient = {
          measure:  i.measure,
          value:i.value,
          ingredient_type : i.ingredient_type,
          image : i.image,
          name : i.name,
          shopping_list_category_es : i.shopping_list_category_es
        }
        aux.ingredients.push(ing);
      });

      element.steps.forEach(i => {
        let st:step = {
          name : i.name,
          priority : i.priority
        }
        aux.steps.push(st);
      });
      console.log(aux);
      this.data.push(aux);
    });

    console.log('LIMPIEZA DE DATOS');
    console.log(this.data);

    //eliminamos primer elemento:
    this.data.forEach(element => {
      element.ingredients.shift();
      element.steps.shift();
    });
    console.log('LIMPIEZA DE DATOS 2');
    console.log(this.data);
    console.log(JSON.stringify(this.data));

    */

    this.allRecipes.push(pasta as recipe);
    this.allRecipes.push(rice as recipe);
    this.allRecipes.push(fish as recipe);
    this.allRecipes.push(meat as recipe);
    this.allRecipes.push(chicken as recipe);
    this.allRecipes.push(vegetables as recipe);
    this.allRecipes.push(vegan as recipe);
    this.allRecipes.push(gluten as recipe);
    this.allRecipes.push(asiatic as recipe);
    this.allRecipes.push(trend as recipe);
    this.generateAllRandomRecipes();
    this.userRecipes = localStorage.getItem('userRecipes') ? JSON.parse(localStorage.getItem('userRecipes')) : this.userRecipes;
  }

  getAllRecipes(){
    return this.allRecipes;
  }

  getPastaRecipes(){
    const pastaRecipes:recipe[] = [];
    pastaRecipes.push(pasta as recipe);
    return pastaRecipes;
  }

  getRiceRecipes(){
    const riceRecipes:recipe[] = [];
    riceRecipes.push(rice as recipe);
    return riceRecipes;
  }

  getFishRecipes(){
    const fishRecipes:recipe[] = [];
    fishRecipes.push(fish as recipe);
    return fishRecipes;
  }

  getMeatRecipes(){
    const meatRecipes:recipe[] = [];
    meatRecipes.push(meat as recipe);
    return meatRecipes;
  }

  getChickenRecipes(){
    const chickenRecipes:recipe[] = [];
    chickenRecipes.push(chicken as recipe);
    return chickenRecipes;
  }

  getVegetablesRecipes(){
    const vegetablesRecipes:recipe[] = [];
    vegetablesRecipes.push(vegetables as recipe);
    return vegetablesRecipes;
  }

  getVeganRecipes(){
    const veganRecipes:recipe[] = [];
    veganRecipes.push(vegan as recipe);
    return veganRecipes;
  }

  getGlutenFreeRecipes(){
    const glutenRecipes:recipe[] = [];
    glutenRecipes.push(gluten as recipe);
    return glutenRecipes;
  }

  getAsiaticRecipes(){
    const asiaticRecipes:recipe[] = [];
    asiaticRecipes.push(asiatic as recipe);
    return asiaticRecipes;
  }

  getTrendRecipes(){
    const trendRecipes:recipe[] = [];
    trendRecipes.push(trend as recipe);
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
    localStorage.setItem('userRecipes',JSON.stringify(this.userRecipes));
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
    return this.randomRecipes;
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

  getOneLunch(){
    let random = Math.floor(Math.random() * this.lunch.length) + 7;
    return this.lunch[random];
  }

  getOneDinner(){
    let random = Math.floor(Math.random() * this.dinner.length) + 7;
    return this.dinner[random];
  }

  getDinner(){
    return this.dinner;
  }

  getMealById(id){
    let receta:recipe;
    //Comprovamos si hay recetas del usuario
    if(this.userRecipes.length > 0){
      this.userRecipes.forEach(element => {
        element.id == id ? receta = element : null;
      });
    }else{
      this.randomRecipes.forEach(element => {
        element.id == id ? receta = element : null;
      });
    }
    return receta;
  }
}
