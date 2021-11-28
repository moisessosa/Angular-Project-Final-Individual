import { Component, Input, OnInit } from '@angular/core';

import { Work } from 'src/shared/work.model';
import { APIService } from 'src/shared/api.service';

//

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() titulo!:string;
 
/* cards!:Work[]; */ 

  constructor(private api: APIService) {
    /* this.api.getAllCards().subscribe((data) => {
      this.cards = data;
      console.log("card compmente",this.cards)
    }); */
   }

  ngOnInit(): void {//
    /* this.api.getAllCards().subscribe((data) => {
      this.cards=data;
     console.log("dentro de cards",this.cards)
    }); */
    
  }

}
