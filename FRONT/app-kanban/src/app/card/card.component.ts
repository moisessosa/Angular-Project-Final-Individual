import { Component, Input, OnInit } from '@angular/core';

import { Work } from '../../shared/work.model';
import { APIService } from '../../shared/api.service';

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

  constructor(private api: APIService) {

   }

  ngOnInit(): void {//
    const data = this.api.getAllCards()
    console.log("RECUPERACION",data)
  }
}
