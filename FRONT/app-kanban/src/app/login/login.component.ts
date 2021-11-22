import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/shared/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 senha:string ="";
 login:string="";
 loginError:boolean = false;
  
 constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
  }
  checkPassword(){
    this.api
      .getAuthorizationToken(this.login, this.senha)
      .subscribe((token) => {
        if (token) {
          this.api.setAuth(token);
          // console.log(this.api.authorization);
          this.router.navigateByUrl('/kanban');//redirecciona
          this.loginError = false;
        } else {
          console.log('Não autorizado', this.login, this.senha);
          this.loginError = true;
          this.api.clearAuth()
        }
      });
 
     console.log(this.senha, this.login);
  
  }
  escribir(evt: any, tipo: string){
    if(tipo==="senha"){
      this.senha=evt.target.value;

    } else{
      this.login=evt.target.value;
    }
    console.log(this.senha, this.login);
  }
}
