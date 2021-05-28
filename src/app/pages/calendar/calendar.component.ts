import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';
import { Router} from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  week = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];
  day = new Date();
  n:number;
  //lunch = [];
  //dinner = [];
  ingredients = [];
  ingredientsNames = [];
  wizardDone = false;
  menuSemanal = [];

  constructor(private recipesServ : RecipeBookService, private router:Router,private menu: MenuService) {
    this.n = this.day.getDay(); //0->Domingo - 6->Sábado
    this.n == 0 ? this.n = 6 : this.n--; //0->Lunes - 6->Domingo

    //Reordeno la semana


  }

  ngOnInit(): void {
    this.wizardDone=localStorage.getItem('wizardDone') ? JSON.parse(localStorage.getItem('wizardDone')) : this.wizardDone;
    //this.recipesServ.generateMeals();
    //this.lunch = this.recipesServ.getLunch();
    //this.dinner = this.recipesServ.getDinner();
    this.menuSemanal = this.menu.getWeekPlan();
    console.log(this.menuSemanal);

  }


  editMeal(e,type,index){
    switch(type){
      case 'lunch':
        let newMeal = this.recipesServ.getOneLunch();
        this.menuSemanal[index].comida = newMeal;
        break;
      case 'dinner':
        let newMeal2 = this.recipesServ.getOneDinner();
        this.menuSemanal[index].cena = newMeal2;
        break;
    }
    e.stopPropagation();
  }

  showDetail(type,index){
    switch(type){
      case 'lunch':
        this.router.navigateByUrl('/detail-recipe/'+this.menuSemanal[index].comida.id);
        break;
      case 'dinner':
        this.router.navigateByUrl('/detail-recipe/'+this.menuSemanal[index].cena.id);
        break;
    }
  }

  wizard(){
    this.router.navigateByUrl('/form')
  }




}
