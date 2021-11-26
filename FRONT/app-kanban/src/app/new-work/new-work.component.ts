import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../../shared/api.service';
import { Work } from '../../shared/work.model';


@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {
work!: FormGroup; //para poder trabajar con Forms
titulo!:string;
conteudo!:string;
cards!:Work[];
respuesta!: any;
 
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.work = new FormGroup({
    'id':new FormControl(null),
    'titulo': new FormControl(null),
    'conteudo': new FormControl(null),
    'lista': new FormControl("To Do")
    });
  }
 addWork(){
  

  this.api.createNewCard(this.work.value.titulo,this.work.value.conteudo,this.work.value.lista).
  subscribe((data) => {
    this.respuesta = data;
  });

  this.work.reset();
  window.location.reload();/* para que el formulario funcione */
  /* this.api.getAllCards().subscribe((data) => {
    this.cards=data;
    console.log(this.cards)
  });//Ya no hace falta aqui */
    
} 
escribir = ($event: any, elemento: string)=>{
  
  if(elemento =="titulo"){
    this.titulo = $event.target.value;
  }else if(elemento=="conteudo"){
    this.conteudo = $event.target.value;
}

}
}


