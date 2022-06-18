import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-produzieren',
  templateUrl: './produzieren.component.html',
  styleUrls: ['./produzieren.component.scss']
})
export class ProduzierenComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor() {
  }
  ngOnInit() {
  }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
