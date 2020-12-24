import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visitorsAngular';
  visitanteNuevo = 'jj';
  visitantes = [
    {name:'Juan', firstName:'Perez', document: '78670377J'}, 
    {name:'Alberto', firstName:'Dominguez', document: '58960377L'}, 
    {name:'Luis', firstName:'Gonzalez', document: '72149375R'},
    {name:'Enrique', firstName:'Martinez', document: '54963247P'}
  ]; 

  getVisitor(visitor : any) {
    this.visitantes.push(visitor);
    console.log(visitor);
    console.log(this.visitantes);
  }
}
