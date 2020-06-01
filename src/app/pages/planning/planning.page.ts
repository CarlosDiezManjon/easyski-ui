import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  displayedColumns: string[];
  profesores: string[];

  constructor() {
    this.displayedColumns = [
      '9:00', '10:00','11:00','12:00','13:00','14:00','15:00','16:00'
    ]
    this.profesores = [
      'Carlos','Diana','Zapata','Jorge','Alex','Fran','Alonso','Beltran','Peter'
    ]
   }

  ngOnInit() {
  }

}
