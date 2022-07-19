import {Component, OnInit} from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-schweibmaschine',
  templateUrl: './schweibmaschine.component.html',
  styleUrls: ['./schweibmaschine.component.scss']
})
export class SchweibmaschineComponent implements OnInit {
  dataSource = [
    {
      artikelnum: 'FR-M21S-44',
      artikelname: 'Lorem ipsum',
      anhang: '',
      gebucht: 0,
      gesamt: 1,
      unbestat: 0
    }, {
      artikelnum: 'FR-M21S-44',
      artikelname: 'Lorem ipsum',
      anhang: '',
      gebucht: 0,
      gesamt: 1,
      unbestät: 0
    },
    {
      artikelnum: 'FR-M21S-44',
      artikelname: 'Lorem ipsum',
      anhang: '',
      gebucht: 0,
      gesamt: 1,
      unbestät: 0
    },
    {
      artikelnum: 'FR-M21S-44',
      artikelname: 'Lorem ipsum',
      anhang: '',
      gebucht: 0,
      gesamt: 1,
      unbestät: 0
    }
  ]
  workbenchItems: any[] = [];
  constructor(public sideNavService: SideNavService) {
  }

  ngOnInit(): void {
    this.getWorkbenchItems();
  }

  getWorkbenchItems(){
   this.sideNavService.getWorkbench().subscribe(res=> {
    this.workbenchItems = res;
    console.log('workbench', this.workbenchItems);
   })
  }

}
