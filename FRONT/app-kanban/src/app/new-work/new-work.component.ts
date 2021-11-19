import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {
work!: FormGroup; //para poder trabajar con Forms
titulo!:string;
conteudo!:string;
  constructor() { }

  ngOnInit(): void {
    this.work = new FormGroup({
    'id':new FormControl(null),
    'titulo': new FormControl(null),
    'conteudo': new FormControl(null),
    'lista': new FormControl("To Do")
    });
  }
 addWork(){
  
  console.log(this.work.value.id);
  console.log(this.work.value.titulo);
  console.log(this.work.value.conteudo);
  console.log(this.work.value.lista);
  /* <div *ngSwitchCase="'Doing'"class="card text-white bg-secondary mb-3">
  <app-fill-card [titulo] = "titulo"></app-fill-card>   
</div> */
this.work.reset();
} 
escribir = ($event: any, elemento: string)=>{
  
  if(elemento =="titulo"){
    this.titulo = $event.target.value;
  }else if(elemento=="conteudo"){
    this.conteudo = $event.target.value;
}

}
}


