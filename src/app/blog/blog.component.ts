import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    // Properties
    vdFaAngleUp = faAngleUp;

    // Constructor
    constructor() { }

    // Initialize
    ngOnInit() {
    }

}
