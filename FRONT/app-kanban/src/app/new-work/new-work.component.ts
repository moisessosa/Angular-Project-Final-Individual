import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 addWork(){
  console.log("titulo, descripcion")
} 
}
