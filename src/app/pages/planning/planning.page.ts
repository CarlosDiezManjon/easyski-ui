import { ModalClaseComponent } from './../../components/modal-clase/modal-clase.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  horas: string[];
  profesores: string[];

  constructor(
    private dialog: MatDialog
  ) {
    this.horas = [
      '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
    ]
    this.profesores = [
      'Carlos', 'Diana', 'Zapata', 'Jorge', 'Alex', 'Fran', 'Alonso', 'Beltran', 'Peter'
    ]
  }

  ngOnInit() {
  }


  openModal(hora, prof) {
    const dialogRef = this.dialog.open(ModalClaseComponent, {
      panelClass: 'modal-clase',
      data: {
        hora: hora,
        prof: prof
      }
    });

    dialogRef.afterClosed().subscribe(result => {


    });
  }

  onDrop(evento: CdkDragDrop<any>) {
    console.log(event)
    const anterior = evento.previousIndex;
    const actual = evento.currentIndex;
    moveItemInArray(this.horas, anterior, actual);
  }
}
