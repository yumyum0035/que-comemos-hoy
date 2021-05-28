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
  type = ['Pasta','Arroces','Pescado','Carne','Pollo','Verduras','Vegano','Sin Gluten','Asiático','Variado'];
  foodName = ['Pasta']
  foods;
 /*  pasta;
  rice;
  fish;
  meat;
  chicken;
  veggies;
  vegan;
  gluten;
  asian;
  trend; 
  type */
  

  form: FormGroup;

  constructor(private router: Router, private recipeServ:RecipeBookService, private formBuilder: FormBuilder) {
    this.allRecipes = recipeServ.getAllRecipes();
    console.log(this.allRecipes);

    this.form = this.formBuilder.group({
      filter: this.formBuilder.array([], [Validators.required])
    })

  }

  ngOnInit(): void {
    
  }

  onCheckboxChange(e) {
    const filter: FormArray = this.form.get('filter') as FormArray;
  
    if (e.target.checked) {
      filter.push(new FormControl(e.target.value));
    } else {
       const index = filter.controls.findIndex(x => x.value === e.target.value);
       filter.removeAt(index);
    }
  }
  
  submit(){
    this.foods = Object.values(this.form.value)
    this.foods = this.foods[0]
    console.log('foods',this.foods);

  }

  showDetail(id){
    this.router.navigateByUrl('/detail-recipe/'+id);
  }
}
