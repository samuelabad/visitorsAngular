import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  visitantes : any[]; 

  constructor(private toastr: ToastrService){
    this.title = 'visitorsAngular';
    this.visitantes = [];
  }

  getVisitor(visitor : any) {
    this.visitantes.push(visitor);
  }
}
