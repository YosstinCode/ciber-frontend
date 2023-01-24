import { SettingsComponent } from './../settings/settings.component';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {
  @Output() eventSettingsData = new EventEmitter()
  @Input() name: string = 'not name';

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {name:this.name}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.eventSettingsData.emit(result)
    })

  }

}
