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
  edit:boolean=true;
  editMode(mode:string){
    this.edit= !this.edit;
    if(mode==='n') window.location.reload();
   
    
  }
  buttonRight(id:string,titulo:string, conteudo:string,lista:string){
    console.log (id,titulo, conteudo,lista)
    if(lista =="To Do"){
      this.api.changeCardById(id,titulo, conteudo,"Doing").subscribe((data) => {
        
      }, error => alert(`oops, ${error.status}, ${error.statusText}`));
    }else if(lista =="Doing"){
      this.api.changeCardById(id,titulo, conteudo,"Done").subscribe((data) => {
        
      }, error => {alert(`oops, ${error.status}, ${error.statusText}`);
      window.location.href = "http://127.0.0.1:4200/login";});
    }
    window.location.reload();
  }
  buttonLeft(id:string,titulo:string, conteudo:string,lista:string){
    console.log (id,titulo, conteudo,lista)
    if(lista =="Done"){
      this.api.changeCardById(id,titulo, conteudo,"Doing").subscribe((data) => {
        
      }, error => {alert(`oops, ${error.status}, ${error.statusText}`);
      window.location.href = "http://127.0.0.1:4200/login";});
    }else if(lista =="Doing"){
      this.api.changeCardById(id,titulo, conteudo,"To Do").subscribe((data) => {
        
      }, error => {alert(`oops, ${error.status}, ${error.statusText}`);
      window.location.href = "http://127.0.0.1:4200/login";});
    }
    window.location.reload();
  }
  delete(id:string){
    
    this.api.deleteCardById(id).subscribe((data) => {
     
    },error => {alert(`oops, ${error.status}, ${error.statusText}`)
    window.location.href = "http://127.0.0.1:4200/login";});
    window.location.reload();
  }
  save(id:string,titulo:string, conteudo:string,lista:string){
    console.log(id,titulo, conteudo,lista);
    this.api.changeCardById(id,titulo, conteudo,lista).subscribe((data) => {
        
    }, error => {alert(`oops, ${error.status}, ${error.statusText}`)
    window.location.href = "http://127.0.0.1:4200/login";});
    window.location.reload();
  }
  constructor(private api: APIService) { }

  ngOnInit(): void {
  }

}
