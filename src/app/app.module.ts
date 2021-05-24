import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConfigComponent } from './pages/config/config.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { CompletePageComponent } from './components/complete-page/complete-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipesComponent,
    ShoppingListComponent,
    SelectedRecipeComponent,
    CalendarComponent,
    ConfigComponent,
    StepsComponent,
    StepTemplateComponent,
    FormWizardComponent,
    CompletePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
