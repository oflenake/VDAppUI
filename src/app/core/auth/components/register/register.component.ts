import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { RegisterInterface } from '../../interfaces/register-interface.model';
import { RepositoryService } from '../../../../shared/services/repository.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';
import { SuccessDialogComponent } from '../../../../shared/dialogs/success-dialog/success-dialog.component';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Properties
  vdFaAngleUp = faAngleUp;
  private dialogConfig;
  public registerForm: FormGroup;

  // Constructor
  constructor(
    private location: Location, private repository: RepositoryService,
    private dialog: MatDialog, private errorService: ErrorHandlerService
  ) { }

  // Initialize
  ngOnInit() {
    this.registerForm = new FormGroup({
      controlFirstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      controlLastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      controlUserName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      controlEmail: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      controlPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      controlRepeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    // Success and Error dialogConfig for the opened dialog function
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  // Public Method Functions - hasError function for registerForm controls validation
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  // Public Method Functions - onCancel function for registerForm events cancellation
  public onCancel = () => {
    this.location.back();
  }

  // Public Method Functions - registerAccountApi function for registerForm.valid state checking through registerFormValue
  public registerAccountApi = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.executeAccountRegistration(registerFormValue);
    }
  }

  // Private Method Functions - executeAccountRegistration helper function for registerFormValue controls validation
  private executeAccountRegistration = (registerFormValue) => {
    let registerInterface: RegisterInterface = {
      FirstName: registerFormValue.controlFirstName,
      LastName: registerFormValue.controlLastName,
      UserName: registerFormValue.controlUserName,
      Email: registerFormValue.controlEmail,
      Password: registerFormValue.controlPassword,
      RepeatPassword: registerFormValue.controlRepeatPassword
    }

    let apiRegisterUrl = 'api/register';
    this.repository.createRepoApi(apiRegisterUrl, registerInterface)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig); // SuccessDialogComponent's reference

        // Subscribing to [mat-dialog-close] attribute as soon as it is clicked on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
      (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      })
      )
  }

}
