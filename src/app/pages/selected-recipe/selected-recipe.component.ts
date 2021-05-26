import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrls: ['./selected-recipe.component.scss']
})
export class SelectedRecipeComponent implements OnInit {

  id:String;
  recipe = [];

  constructor(private recipesServ : RecipeBookService, private router:Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe( params => this.id = params.id);
    console.log(this.id);
    //Tengo el id de la receta, ahora lo tengo que buscar para mostrar la info.
    this.recipe = this.recipesServ.getMealById(this.id);
    console.log(this.recipe);
  }


}
