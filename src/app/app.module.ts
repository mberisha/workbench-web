import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PartListComponent } from './part-list/part-list.component';
import { WorkStepsComponent } from './work-steps/work-steps.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ControlElementsComponent } from './control-elements/control-elements.component';
import { WorkInstructionsComponent } from './work-instructions/work-instructions.component';
import {SideNavModule} from "./side-nav/side-nav.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    WorkStepsComponent,
    ArticleSearchComponent,
    ControlElementsComponent,
    WorkInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
