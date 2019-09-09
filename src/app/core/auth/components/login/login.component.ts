import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

/**
 * @title Login Card with multiple sections
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Properties
  vdFaAngleUp = faAngleUp;
  options: FormGroup;

  // Constructor
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      rememberMeCheck: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
