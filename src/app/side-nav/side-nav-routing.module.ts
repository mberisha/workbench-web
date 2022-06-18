import {NgModule} from '@angular/core';
import {ProduzierenComponent} from "../produzieren/produzieren.component";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const routes: Routes = [
  {path: 'produzieren', component: ProduzierenComponent},
];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InternalRoutingModule {

}
