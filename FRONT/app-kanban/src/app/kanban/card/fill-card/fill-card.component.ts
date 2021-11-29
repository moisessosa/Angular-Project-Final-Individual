import { Component, Input, OnInit } from '@angular/core';
import { APIService } from '../../../../shared/api.service';

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
  buttonRight(id:string,titulo:string, conteudo:string,lista:string){
    console.log (id,titulo, conteudo,lista)
    if(lista =="To Do"){
      this.api.changeCardById(id,titulo, conteudo,"Doing").subscribe((data) => {
        
      });
    }else if(lista =="Doing"){
      this.api.changeCardById(id,titulo, conteudo,"Done").subscribe((data) => {
        
      });;
    }
    window.location.reload();
  }
  buttonLeft(id:string,titulo:string, conteudo:string,lista:string){
    console.log (id,titulo, conteudo,lista)
    if(lista =="Done"){
      this.api.changeCardById(id,titulo, conteudo,"Doing").subscribe((data) => {
        
      });
    }else if(lista =="Doing"){
      this.api.changeCardById(id,titulo, conteudo,"To Do").subscribe((data) => {
        
      });
    }
    window.location.reload();
  }
  delete(id:string){
    
    this.api.deleteCardById(id).subscribe((data) => {
     
    });
    window.location.reload();
  }
  constructor(private api: APIService) { }

  ngOnInit(): void {
  }

}
