import { Component, OnInit } from '@angular/core';
import rice from '../../../assets/data/rice.json'
import pasta from '../../../assets/data/pasta.json';
import fish from '../../../assets/data/fish.json';
import meat from '../../../assets/data/meat.json';
import gluten from '../../../assets/data/glutenFree.json';
import vegan from '../../../assets/data/vegan.json';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = rice;
  recipes2 = pasta;
  recipes3 = fish;
  recipes4 = gluten;
  recipes5 = meat;
  recipes6 = vegan;

  constructor() { }

  ngOnInit(): void {
  }

}
