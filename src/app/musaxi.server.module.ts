import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { MusaxiModule } from './musaxi.module';
import { MusaxiComponent } from './musaxi.component';

@NgModule({
	imports: [
		MusaxiModule,
		ServerModule,
		ModuleMapLoaderModule
	],
	bootstrap: [MusaxiComponent]
})
export class AppServerModule { }
