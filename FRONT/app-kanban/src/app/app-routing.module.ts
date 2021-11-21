import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KanbanComponent } from "./kanban/kanban.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '' , redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'kanban', component: KanbanComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}