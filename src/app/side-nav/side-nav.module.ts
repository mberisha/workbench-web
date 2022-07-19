import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProduzierenComponent} from "../produzieren/produzieren.component";
import {AppRoutingModule} from "../app-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {SideNavComponent} from "./side-nav.component";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { SchweibmaschineComponent } from './schweibmaschine/schweibmaschine.component';
import { MatTableModule} from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';
import { SideNavService } from './side-nav.service';


@NgModule({
  declarations: [
    SideNavComponent,
    ProduzierenComponent,
    SchweibmaschineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [SideNavService],
  exports: [SideNavComponent, SchweibmaschineComponent]
})
export class SideNavModule { }
