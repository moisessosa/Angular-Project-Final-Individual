import { Component } from '@angular/core';
import { APIService } from 'src/shared/api.service';
import { Work } from 'src/shared/work.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards!:Work[];
  constructor(private api: APIService) {
    this.api.getAllCards().subscribe((data) => {
      this.cards=data;
      console.log("dentro de cards",this.cards)
    });
  }
  
 
}