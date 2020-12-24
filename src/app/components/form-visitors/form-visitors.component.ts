import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-visitors',
  templateUrl: './form-visitors.component.html',
  styleUrls: ['./form-visitors.component.css']
})
export class FormVisitorsComponent implements OnInit {

  @Output() visitor = new EventEmitter<any>();

  nameForm : string;
  firstNameForm : string;
  documentForm: string;

  constructor(private toastr: ToastrService) { 
    this.nameForm = "";
    this.firstNameForm = "";
    this.documentForm = "";
  }

  ngOnInit(): void {
  }

  resetFields() : void {
    this.nameForm = "";
    this.firstNameForm = "";
    this.documentForm = "";
  }

  addVisitor() : void {
    let name = this.nameForm;
    let firstName = this.firstNameForm;
    let document = this.documentForm;
    
    if (this.validacion()) {
      this.visitor.emit({name, firstName, document});
      this.resetFields();
    } 
  }

  validacion() : boolean {
    let boolDNI = this.validacionDNI(this.documentForm);
    let boolName = (this.nameForm !== "");
    let boolFirstName = (this.firstNameForm !== "");
    let boolReturn = boolName && boolFirstName && boolDNI;

    if (boolReturn) {
      this.toastr.success('Visitante añadido correctamente.');
    } else {
      this.toastr.error("Existen campos incorrectos.");
    }

    return boolReturn;
  }

  validacionDNI(argDocument : string) : boolean {
    let regExprDNI = new RegExp('[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]');
    let boolReturn = regExprDNI.test(argDocument);
    if (!boolReturn) { this.toastr.error("El DNI introducido no es correcto."); }
    return boolReturn;
  }

}
