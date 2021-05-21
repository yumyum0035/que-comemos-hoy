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
  type = ['Pasta','Arroces','Pescado','Carne','Pollo','Verduras','Vegano','Sin Gluten','Asiático','Variado']

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
  }

  getAllRecipes(){
    return this.allRecipes;
  }

}
