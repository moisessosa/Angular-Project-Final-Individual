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
 //loginError:boolean = false;
  
 constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
  }
  checkPassword(){
    this.api
      .getAuthorizationToken(this.login, this.senha)
      .subscribe((token) => {
        if (token) {
          this.api.setAuth(token);
          
          this.router.navigateByUrl('/kanban');//redirecciona
         // this.loginError = false;
        } else {
          alert(`Não autorizado ${this.login} não existe ou Senha Invalida`);
         // this.loginError = true;
          this.api.limparAuth()
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
    /* console.log(this.senha, this.login); */
  }
}
