import { Component, OnInit, Input, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { StepModel } from '../../models/step.model';
import { RecipeBookService } from '../../services/recipe-book/recipe-book.service';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements AfterContentInit {

  @Input() step: StepModel;
  listCategories;
  selectedCategories = [];
  selectedWeek = new Array(7);

  constructor(private recipesServ: RecipeBookService, private menu: MenuService) {
    this.listCategories = this.recipesServ.type;
  }

  ngAfterContentInit(): void {
    //Simulate the 'magic' of creating menu plan
    if(this.step.stepIndex == 3){
      setTimeout(() => {
        this.onCompleteStep();
      },2000);

    }
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  selectWeek(dia) {
    if (this.selectedWeek.indexOf(dia) > -1) {
      let index = this.selectedWeek.indexOf(dia);
      this.selectedWeek[index] = '';
    } else {
      this.checkDay(dia);
      // this.selectedWeek.push(dia);
    }
    this.checkStep();
    this.menu.setWeek(this.selectedWeek);
    console.log(this.selectedWeek);
  }

  checkDay(dia){
    switch (dia){
      case 'toda':
        this.selectedWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo','toda']
        break;
      case 'Lunes':
        this.selectedWeek.splice(0,1,dia);
        break;
      case 'Martes':
        this.selectedWeek.splice(1,1,dia);
        break;
      case 'Miércoles':
        this.selectedWeek.splice(2,1,dia);
        break;
      case 'Jueves':
        this.selectedWeek.splice(3,1,dia);
        break;
      case 'Viernes':
        this.selectedWeek.splice(4,1,dia);
        break;
      case 'Sábado':
        this.selectedWeek.splice(5,1,dia);
        break;
      case 'Domingo':
        this.selectedWeek.splice(6,1,dia);
        break;
    }
  }

  addType(type) {
    if (this.selectedCategories.indexOf(type) > -1) {
      //Eliminamos del listado seleccionado
      let index = this.selectedCategories.indexOf(type);
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(type);
    }
    this.initWizard();
  }

  initWizard() {
    //Limpiamos la lista por si se ha borrado alguna categoria
    this.recipesServ.clearWizard();
    //Generamos listado
    this.selectedCategories.forEach(type => {
      this.recipesServ.generateWizard(type);
    });
    this.checkStep();
  }

  checkStep() {
    //At least one category selected
    if (this.selectedCategories.length > 0 || this.selectedWeek.length > 0) {
      this.onCompleteStep();
    } else {
      this.step.isComplete = false;
    }
  }

}
