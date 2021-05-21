import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import rice from '../../../assets/data/rice.json'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ownedIngredients = ['pan','queso','azúcar','cafe'];
  missingIngredients = ['carne','pollo','pescado','chocolate'];
  constructor(private router: Router) { }


  /*
  select recipe and that recipe tells me the position in the array and then i run a ng for for the elements of that recipe */
  ngOnInit(): void {
    console.log(rice[0].ingredients[0].name
      );
  }

  addIngredient(missingIngredient) {
    /* console.log('addIngredient works', missingIngredient); */
    this.missingIngredients.push(missingIngredient)
    this.ownedIngredients = this.ownedIngredients.filter(e => e !== missingIngredient)
  }

  delIngredient(ownedIngredient) {
    /* console.log('delIngredient works', ownedIngredient); */
    this.ownedIngredients.push(ownedIngredient)
    this.missingIngredients = this.missingIngredients.filter(e => e !== ownedIngredient)

  }
}
