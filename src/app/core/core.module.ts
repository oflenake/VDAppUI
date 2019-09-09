import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// Icons - Generic
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { AccountComponent } from './auth/components/account/account.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class CoreModule {

  // Constructor
  constructor(library: FaIconLibrary) {
  // Adding dynamic icons to library for use
    library.addIcons(faAngleUp);
  }

}
