import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // Field Properties
    @Output() public sidenavToggle = new EventEmitter();
    isCollapsed: boolean;

    // Icons - Main Navigation
    vdFaBars = faBars;
    vdFaEnvelope = faEnvelope;
    vdFaUser = faUser;
    vdFaUserCircle = faUserCircle;
    vdFaSignInAlt = faSignInAlt;
    vdFaQuestionCircle = faQuestionCircle;
    vdFaWrench = faWrench;
    vdFaCog = faCog;
    vdFaCogs = faCogs;

    // Icons - Brands
    vdFaFacebook = faFacebook;
    vdFaTwitter = faTwitter;
    vdFaGithub = faGithub;

    // Constructor
    constructor() { }

    // Initialize
    ngOnInit() {
    }

    // Function Methods - onToggleSidenav mat-icon-button click event function
    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

}
