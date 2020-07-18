import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clase } from 'src/app/models/clase.model';

@Component({
  selector: 'app-modal-clase',
  templateUrl: './modal-clase.component.html',
  styleUrls: ['./modal-clase.component.scss'],
})
export class ModalClaseComponent implements OnInit {

  clase: Clase = new Clase();
  formClase: FormGroup;

  modalidades = [
    "Esqui",
    "Snowboard",
    "Adaptado"
  ]
  tipoClase = [
    "Individual",
    "Grupal",
    "Club"
  ]

  constructor(
    private dialogRef: MatDialogRef<ModalClaseComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.clase.profesor.nombre = data.prof;
      this.clase.fhInicio = data.hora;
    } else {
      this.clase = new Clase();
    }
    this.formClase = new FormGroup({
      'fhInicio': new FormControl(),
      'fhFin': new FormControl(),
      'cliente': new FormControl(),
      'numAlumnos': new FormControl()
    })
  }

  ngOnInit() { }

  onSave() {

  }
  onClose() {
    this.dialogRef.close();
  }

}
