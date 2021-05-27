import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent implements OnInit {

  lunch = [];
  dinner = [];
  week = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado','Domingo'];

  constructor(private recipesServ : RecipeBookService, private router:Router) { }

  ngOnInit(): void {
    this.recipesServ.generateMeals();
    this.lunch = this.recipesServ.getLunch();
    this.dinner = this.recipesServ.getDinner()
    /* console.log('lunch',this.lunch);
    console.log('dinner',this.dinner); */
  }

  home(){
    this.router.navigateByUrl('/calendar')
  }
}
