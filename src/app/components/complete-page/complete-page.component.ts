import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent implements OnInit {

  constructor(private recipesServ : RecipeBookService, private router:Router, private menu: MenuService) { }

  ngOnInit(): void {


  }

  home(){
    this.router.navigateByUrl('/calendar')
  }
}
