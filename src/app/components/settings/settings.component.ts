import { SettingsDialogComponent } from './../settings-dialog/settings-dialog.component';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });


  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>, private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public dataDialog: any,) {}
  
  alertFormValues(formGroup: FormGroup) {
    // manejador del submit event

    // JSON.stringify(formGroup.value, null, 2)
    
  }



}
