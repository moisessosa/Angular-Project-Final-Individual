import { Component, OnInit } from '@angular/core';
import { Work } from 'src/shared/work.model';
import { APIService } from 'src/shared/api.service';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  cards!:Work[];

   constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getAllCards().subscribe((data) => {
      this.cards=data;
      console.log(this.cards)
    });
  }


}
