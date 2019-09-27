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
  private babyBirthDate: string = "27-9-2018";
  constructor() { }

  ngOnInit() {
    this.categories.push(new Category("Baby", "What did "+ this.babyName + " do today?"));
    this.categories.push(new Category("SoundBoard", "Try the soundboard!" ));
    this.categories.push(new Category("Camera", "IP-Camera connectivity"));
    this.categories.push(new Category("Illness", "What diseases could "+ this.babyName + " get?"));
    this.categories.push(new Category("News", "Recent news about babies"));
    this.categories.push(new Category("Toys", "Recommended toys for babies"));

  }

}
