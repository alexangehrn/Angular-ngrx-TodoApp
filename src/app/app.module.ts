import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// todo-app-angular/src/app/app.module.ts
import { StoreModule } from '@ngrx/store';
import { todos } from './reducers/reducer';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos }),
    AppRoutingModule
  ],
  providers: [ TodoDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
