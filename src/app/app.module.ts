import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableVisitorsComponent } from './components/table-visitors/table-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableVisitorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
