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
  @Input() titulo!:string
  @Input() lista!:string;
  
  @Input() id!:string;
  @Input() conteudo!:string;
 
/* cards!:Work[];  */
  constructor(/* private api: APIService */) {
    /* this.api.getAllCards().subscribe((data) => {
      this.cards = data;
      console.log("card componente",this.cards)
    }); */
   }

  ngOnInit(): void {//
   
    
  }

}
