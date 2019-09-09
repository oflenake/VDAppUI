import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    // Properties
    vdFaAngleUp = faAngleUp;

    // Constructor
    constructor() { }

    // Initialize
    ngOnInit() {
    }

}
