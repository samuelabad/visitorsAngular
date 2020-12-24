import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { 
    this.nameForm = "";
    this.firstNameForm = "";
    this.documentForm = "";
  }

  ngOnInit(): void {
  }

  addVisitor() {
    let name = this.nameForm;
    let firstName = this.firstNameForm;
    let document = this.documentForm;

    this.visitor.emit({name, firstName, document});
  }

}
