import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-view-stacks',
  templateUrl: './view-stacks.component.html',
  styleUrls: ['./view-stacks.component.scss']
})
export class ViewStacksComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dailogRef: MatDialogRef<ViewStacksComponent>,
    private apiService: ApiService
  ) { }
  fileSelected: any;
  @ViewChild('uploadFile') uploadFile!: ElementRef;
  stackName: string = '';

  // data: any[] = [
  //   { key: 'Heading1', value: 'Data1' },
  //   { key: 'Heading2', value: 'Data2' },
  //   { key: 'Heading3', value: 'Data3' },
  //   { key: 'Heading4', value: 'Data4' },
  //   { key: 'Heading5', value: 'Data5' },
  //   { key: 'Heading6', value: 'Data6' },
  // ]
  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data[0].value);
    this.stackName = this.data[0].value;
    this.apiService.getStackEvents(this.stackName).subscribe((res) => {
      console.log(res);

    })
  }
  fileChosen(event: any) {
    this.fileSelected = event.target.files[0].name;
    console.log(this.fileSelected);

  }
  deleteSelectedFile() {
    this.fileSelected = null;
    this.uploadFile.nativeElement.value = null;
  }
  submit() {
    this.dailogRef.close(this.fileSelected)
  }
}
