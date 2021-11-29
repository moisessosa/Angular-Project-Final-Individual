import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KanbanComponent } from "./kanban/kanban.component";
import { LoginComponent } from "./login/login.component";
import { ErroComponent } from './erro/erro.component';

const appRoutes: Routes = [
    { path: '' , redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'kanban', component: KanbanComponent },
    { path: 'erro', component: ErroComponent },
    { path:  '**', component: ErroComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}