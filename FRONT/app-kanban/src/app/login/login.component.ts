import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 senha:string =""
  constructor() { }

  ngOnInit(): void {
  }
  checkPassword(){
  if(this.senha=='123')
     console.log('logeo');
  
  }
  escribir(evt: any){
    this.senha=evt.target.value;

  }
}
