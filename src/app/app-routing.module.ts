import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConfigComponent } from './pages/config/config.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { CompletePageComponent } from './components/complete-page/complete-page.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  //canActivate: [AmILoggedGuard]
  //pathMatch: 'full',
 {
  path: '',
  component: CalendarComponent,
  pathMatch: 'full'
},
{
  path: 'recipes',
  component: RecipesComponent
},
{
  path: 'detail-recipe/:id',
  component: SelectedRecipeComponent
},
{
  path: 'shopping-list',
  component: ShoppingListComponent
},
{
  path: 'calendar',
  component: CalendarComponent
},
{
  path: 'config',
  component: ConfigComponent
},
{
  path: 'form',
  component: FormWizardComponent
},
{
  path: 'complete',
  component: CompletePageComponent
},
{
  path: 'tutorial',
  component: TutorialComponent
}
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
