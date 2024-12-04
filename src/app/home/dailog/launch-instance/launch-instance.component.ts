import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-launch-instance',
  templateUrl: './launch-instance.component.html',
  styleUrls: ['./launch-instance.component.scss']
})
export class LaunchInstanceComponent implements OnInit {
  launchInstanceForm!: FormGroup;
  regions: any[] = []
  constructor(
    // public formValidation: FormValidationService
    private apiService: ApiService,
    private snackBar: SnackbarService,
    private dailogRef: MatDialogRef<LaunchInstanceComponent>
  ) { }

  // {
  //   "region": "eu-south-2",
  //   "project": "Mongo",
  //   "subdomain": "probeplus",
  //   "instance1_docker_tag": "latest",
  //   "instance2_docker_tag": "latest"
  // }
  ngOnInit(): void {
    this.apiService.getRegions().subscribe((res) => {
      console.log(res);
      this.regions = res.data
      console.log(this.regions);
    }, (error) => {
      console.log(error)
    })
    this.launchInstanceForm = new FormGroup({
      project: new FormControl(null),
      region: new FormControl(null),
      subdomain: new FormControl(null),
      mongodb_tag: new FormControl('latest'),
      mongoexpress_tag: new FormControl('latest'),
    });

  }
  onFormSubmitted() {
    const formValue = this.launchInstanceForm.getRawValue();
    const requestBody = {
      ...formValue,
      // mongodb_tag: "latest",
      // mongoexpress_tag: "latest"
    }
    console.log(requestBody);

    this.apiService.createInstance(requestBody).subscribe((res) => {
      console.log(res);
      if (res) {
        this.snackBar.openSnackBar({
          message: 'Instance Created Successfully',
          type: 'success',
        });
      }
      this.dailogRef.close();
    }, (error) => {
      this.snackBar.openSnackBar({
        message: 'Failed to Create Instance',
        type: 'error',
      });
    })
  }

  handleValidation(
    validation:
      | 'alphabetsOnly'
      | 'alphaNumericsOnly'
      | 'numericsOnly'
      | 'alphaNumericsOnlyCapital'
      | 'validEmailCharacters'
      | 'alphabetsOnlyWithoutSpace',
    event: KeyboardEvent
  ) {
    // this.formValidation.validateForm(validation, event);
  }


}
