import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { recipe } from 'src/app/interfaces/recipe';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrls: ['./selected-recipe.component.scss']
})
export class SelectedRecipeComponent implements OnInit {

  id:String;
  recipe:recipe;
  ingredientes = [];
  pasos = [];
  portions:number = 2;

  constructor(private recipesServ : RecipeBookService, private router:Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe( params => this.id = params.id);
    //Tengo el id de la receta, ahora lo tengo que buscar para mostrar la info.
    this.recipe = this.recipesServ.getMealById(this.id);
    this.recipe['ingredients'].forEach(ingredient => {
      this.ingredientes.push(ingredient);
    });

    this.recipe['steps'].forEach(paso => {
      this.pasos.push(paso);
    });
  }

  addFav(){
    console.log(this.recipe);
    if(this.recipe.favorited){
      this.recipe.favorited = false;
    }else{
      this.recipe.favorited = true;
    }
    this.recipesServ.setMealById(this.id,this.recipe.favorited);
  }

  difficultyClass() {
    let className;
    if(this.recipe.dificulty === 1) {
      className ="low";
    } else if (this.recipe.dificulty === 2) {
      className = "medium";
    } else {
      className = "high";
    }

    return className;
  }

  portionCalc(operand:string) {
    if (operand == "plus") {
      this.portions += 1;
    } else if (operand == "less") {
      if (this.portions == 1) {
        this.portions = 1;
      } else { this.portions -= 1; }
    }
  }

}
