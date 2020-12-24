import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-visitors',
  templateUrl: './table-visitors.component.html',
  styleUrls: ['./table-visitors.component.css']
})
export class TableVisitorsComponent implements OnInit {

  @Input() listaVisitantes: any[];

  constructor() {

  }

  ngOnInit(): void {
  }

}
