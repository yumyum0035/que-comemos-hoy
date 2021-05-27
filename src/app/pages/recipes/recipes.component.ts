import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  allRecipes = [];
  type = ['Pasta','Arroces','Pescado','Carne','Pollo','Verduras','Vegano','Sin Gluten','Asiático','Variado']

  constructor(private router: Router, private recipeServ:RecipeBookService) {
    this.allRecipes = recipeServ.getAllRecipes();
  }

  ngOnInit(): void {
  }

  showDetail(id){
    this.router.navigateByUrl('/detail-recipe/'+id);
  }
}
