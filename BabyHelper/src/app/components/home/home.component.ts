import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private categories : Category[] = [];

  constructor() { }

  ngOnInit() {
    this.categories.push(new Category("Baby"));
    this.categories.push(new Category("SoundBoard"));
  }

}
