import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    // Properties
    vdFaAngleUp = faAngleUp;

    // Constructor
    constructor() { }

    // Initialize
    ngOnInit() {
    }

}
