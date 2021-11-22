import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { FillCardComponent } from './card/fill-card/fill-card.component';
import { NewWorkComponent } from './new-work/new-work.component';
import { LoginComponent } from './login/login.component';
import { KanbanComponent } from './kanban/kanban.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { APIService } from 'src/shared/api.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    CardComponent,
    FillCardComponent,
    NewWorkComponent,
    LoginComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
