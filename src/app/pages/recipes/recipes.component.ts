import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from 'src/app/interfaces/recipe';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  allRecipes:recipe[];
  type = ["Pasta", "Pescado", "Arroces", "Carne","Pollo","Verduras","Vegano","Sin Gluten","Asiático", "Variado"];
  foods = [];
  form: FormGroup;
  filterVisibility = true
  filterEmpty = true
  show: string = "Mostrar";

  constructor(private router: Router, private recipeServ:RecipeBookService, private formBuilder: FormBuilder) {
    this.allRecipes = recipeServ.getAllRecipes();
    this.form = this.formBuilder.group({
      filter: this.formBuilder.array([], [Validators.required])
    })
  }

  ngOnInit(): void { }

  onCheckboxChange(e) {
    const filter: FormArray = this.form.get('filter') as FormArray;

    if (e.target.checked) {
      filter.push(new FormControl(e.target.value));
    } else {
       const index = filter.controls.findIndex(x => x.value === e.target.value);
       filter.removeAt(index);
    }
  }


  showDetail(id){
    this.router.navigateByUrl('/detail-recipe/'+id);
  }


  submit(){
    this.foods = Object.values(this.form.value)
    this.foods = this.foods[0]
    this.filterEmpty = false
  }

  filterShowHide() {
    this.filterVisibility = !this.filterVisibility;
    if (this.filterVisibility) { 
      this.show = "Mostrar"
    } else { this.show = "Ocultar" }
  }

  difficultyClass(recipe) {
    let className;
    if(recipe.dificulty === 1) {
      className ="low";
    } else if (recipe.dificulty === 2) {
      className = "medium";
    } else {
      className = "high";
    }

    return className;
  }

  showFilterEmpty() {
    this.filterVisibility = true
    this.filterEmpty = true
    this.foods = []

  }
}
