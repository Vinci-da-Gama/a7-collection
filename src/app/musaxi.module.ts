import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MusaxiRoutingModule } from './musaxi-routing.module';
import { MusaxiComponent } from './musaxi.component';

@NgModule({
  	declarations: [
		MusaxiComponent
  	],
  	imports: [
		BrowserModule,
		MusaxiRoutingModule
  	],
  	providers: [],
  	bootstrap: [MusaxiComponent]
})
export class MusaxiModule { }
