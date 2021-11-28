import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-card',
  templateUrl: './fill-card.component.html',
  styleUrls: ['./fill-card.component.css']
})
export class FillCardComponent implements OnInit {
  @Input() titulo!:string;
  @Input() lista!:string;
  @Input() id!:string;
  @Input() conteudo!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
