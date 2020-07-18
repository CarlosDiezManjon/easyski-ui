import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clase } from 'src/app/models/clase.model';

@Component({
  selector: 'app-modal-clase',
  templateUrl: './modal-clase.component.html',
  styleUrls: ['./modal-clase.component.scss'],
})
export class ModalClaseComponent implements OnInit {

  clase: Clase;
  formClase: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalClaseComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {

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
