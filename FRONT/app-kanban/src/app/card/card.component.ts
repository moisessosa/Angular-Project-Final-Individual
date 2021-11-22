import { Component, Input, OnInit } from '@angular/core';

import { Work } from '../../shared/work.model';

//

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() titulo!:string;
auth!:string;
todasCards!:any;

  constructor() {

   }

  ngOnInit(): void {
    
  }

}
