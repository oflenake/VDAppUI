import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    // Properties
    vdFaAngleUp = faAngleUp;

    // Constructor
    constructor() { }

    // Initialize
    ngOnInit() {
    }

}
