import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dailogRef: MatDialogRef<ConfirmationPopupComponent>,
  ) { }
 
  ngOnInit(): void {
  
  }
  confirm() {
    this.dailogRef.close(true)
  }
}
