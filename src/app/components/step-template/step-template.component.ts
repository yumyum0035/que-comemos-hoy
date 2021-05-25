import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step.model';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {

  @Input() step: StepModel;
  listCategories;
  selectedCategories = [];

  constructor(private recipesServ : RecipeBookService) {
    this.listCategories = this.recipesServ.type;
  }

  ngOnInit(): void {
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  addType(type){
    console.log(type);
    if(this.selectedCategories.indexOf(type) > -1 ){
      //Eliminamos del listado seleccionado
      let index = this.selectedCategories.indexOf(type);
      this.selectedCategories.splice(index,1);
      console.log(this.selectedCategories);
    }else{
      this.selectedCategories.push(type);
    }
    console.log(this.selectedCategories);
    this.initWizard();
  }

  initWizard(){
    //Limpiamos la lista por si se ha borrado alguna categoria
    this.recipesServ.clearWizard();
    //Generamos listado
    this.selectedCategories.forEach(type => {
      this.recipesServ.generateWizard(type);
    });
    this.checkStep();
  }

  checkStep(){
    //At least one category selected
    if(this.selectedCategories.length > 0){
      this.onCompleteStep();
    }else{
      this.step.isComplete = false;
    }
  }
}
