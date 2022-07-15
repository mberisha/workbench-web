import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  expandSubMenu: boolean = false;
  // @ts-ignore
  selectedSubMenuItems: 'selectedSubMenuItems';
  sideNavItemIndex: any;
  subMenuItemIndex: any;
  showSubMenuContent: boolean = false;
  subMenuSideNavItem: any;
  time = new Date();
  value = "";
  keyboard: any;

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showVirtualKeyboard: boolean = false;
  sideNavItems = [
    {
      name: 'Dashboard',
      icon: 'home',
      subMenuItems: [],
      isSelected: true
    },
    {
      name: 'Prozesse',
      icon: 'layers',
      subMenuItems: [{
        name: 'Produzieren',
        isSelected: false,
        subMenuSideNavItems: [
          {
            name: 'Montage Trettlager',
            count: 1,
            isSelected: false,
          },
          {
            name: 'Montage Hinterrad',
            count: 2,
            isSelected: false,
          }, {
            name: 'Montage Schaltwerk',
            count: 3,
            isSelected: false,
          }, {
            name: 'Sägemaschine',
            isSelected: false,
          }, {
            name: 'Schweißmaschine',
            isSelected: false,
          }, {
            name: 'Fräsmaschine',
            isSelected: false,
          }, {
            name: 'Drehmaschine',
            isSelected: false,
          }, {
            name: 'Montage Kette',
            count: 4,
            isSelected: false,
          }, {
            name: 'Montage Steuersatz',
            count: 5,
            isSelected: false,
          }
        ]
      },
        {
          name: 'Dispositionsproduktion',
          isSelected: false,
        }
      ],
      isSelected: false
    },
    {
      name: 'Intern',
      icon: 'account_circle',
      subMenuItems: [],
      isSelected: false
    },
    {
      name: 'Arbeitsschicherheit',
      icon: 'verified_user',
      subMenuItems: [
        {
          name: 'Unterweisung',
          isSelected: false,
          subMenuSideNavItems: [
            {
              name: 'Montage Trettlager',
              count: 1,
              isSelected: false
            },
            {
              name: 'Montage Hinterrad',
              count: 2,
              isSelected: false
            }, {
              name: 'Montage Schaltwerk',
              count: 3,
              isSelected: false
            }, {
              name: 'Sägemaschine',
              isSelected: false
            }, {
              name: 'Schweißmaschine',
              isSelected: false
            }, {
              name: 'Fräsmaschine',
              isSelected: false
            }, {
              name: 'Drehmaschine',
              isSelected: false
            }, {
              name: 'Montage Kette',
              count: 4,
              isSelected: false
            }, {
              name: 'Montage Steuersatz',
              count: 5,
              isSelected: false
            }
          ]
        },
        {
          name: 'Betriebsanweisung',
          isSelected: false
        },
        {
          name: 'Sonstige Unterlagen',
          isSelected: false
        }
      ],
      isSelected: false
    },
    {
      name: 'Wartung',
      icon: 'build',
      subMenuItems: [],
      isSelected: false
    },
    {
      name: 'Einstellungen',
      icon: 'settings',
      subMenuItems: [],
      isSelected: false
    }
  ]

  constructor() {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: (button: any) => this.onKeyPress(button),
      theme: "hg-theme-default myTheme1"
    });
  }

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

  expand() {
    this.expandSubMenu = true;
  }

  subMenuItemOnchange(subMenuItem: any, sideNavItemIndex: any, subMenuItemIndex: any) {
    this.showSubMenuContent = false;
    this.sideNavItemIndex = sideNavItemIndex;
    this.subMenuItemIndex = subMenuItemIndex;
    this.sideNavItems.forEach(sideNavI => {
      sideNavI.subMenuItems.forEach(s => {
        s.isSelected = false;
        if ((s.name === subMenuItem.name) && s.subMenuSideNavItems) {
          s.isSelected = true;
          // this.sideNavItemIndex = sideNavItemIndex;
          // this.subMenuItemIndex = subMenuItemIndex;
          this.showSubMenuContent = true;
        } else {
          s.isSelected = false;
        }
      });
    })
  }

  onClickSideNavItem(sideNaveItem: any) {
    this.sideNavItems.forEach(s => {
      if (s.name === sideNaveItem.name) {
        s.isSelected = !s.isSelected;
      } else {
        s.isSelected = false;
      }
    })
  }

  onClickSubMenuSideNav(subMenuSideNavItem: any) {
    this.sideNavItems[this.sideNavItemIndex]?.subMenuItems[this.subMenuItemIndex].subMenuSideNavItems?.forEach(s => {
      if (s.name === subMenuSideNavItem.name) {
        s.isSelected = !s.isSelected;
      } else {
        s.isSelected = false;
      }
    });
    this.subMenuSideNavItem = subMenuSideNavItem;
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  virtualKeyboard() {
    this.showVirtualKeyboard = !this.showVirtualKeyboard;
    console.log(this.showVirtualKeyboard)
  }
}
