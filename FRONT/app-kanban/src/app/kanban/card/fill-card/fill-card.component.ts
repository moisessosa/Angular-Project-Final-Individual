import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-card',
  templateUrl: './fill-card.component.html',
  styleUrls: ['./fill-card.component.css']
})
export class FillCardComponent implements OnInit {
  @Input() titulo!:string;
  @Input() tarefa!:string;
  @Input() id!:string;
  @Input() description!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
