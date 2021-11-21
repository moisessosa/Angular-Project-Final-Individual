import { Component, Input, OnInit } from '@angular/core';
import { ApiConectService } from '../shared/api-conect.service';
import { Work } from '../shared/work.model';

//


const URL_API = "http://localhost:5000/";
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
