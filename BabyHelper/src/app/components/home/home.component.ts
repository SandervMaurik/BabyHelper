import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private categories : Category[] = [];

  private babyName: string = "Test";
  constructor() { }

  ngOnInit() {
    this.categories.push(new Category("Baby", "What did "+ this.babyName + " do today?"));
    this.categories.push(new Category("SoundBoard", "Is " + this.babyName + " having trouble sleeping? Try some of these sounds!" ));
  }

}
