import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

const routes: Routes = [
  //canActivate: [AmILoggedGuard]
  //pathMatch: 'full',
 {
  path: '',
  component: RecipesComponent,
  pathMatch: 'full'
},
{
  path: 'recipes',
  component: RecipesComponent
},
{
  path: 'shopping-list',
  component: ShoppingListComponent
},
//{ //if path isn't anything listed on this list ^ it will take you to this link
   //path: "**",
   //redirectTo: "MainComponent",
   //pathMatch: "full"
 //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
