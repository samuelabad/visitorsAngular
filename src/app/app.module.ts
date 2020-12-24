import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableVisitorsComponent } from './components/table-visitors/table-visitors.component';
import { FormVisitorsComponent } from './components/form-visitors/form-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableVisitorsComponent,
    FormVisitorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
